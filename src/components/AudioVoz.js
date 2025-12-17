import { useEffect, useRef, useState } from "react";
import styles from "./AudioVoz.module.scss";
import { IoPlay, IoPause } from "react-icons/io5";

const BAR_WIDTH = 2; // px
const BAR_GAP = 2;   // px
const BAR_TOTAL = BAR_WIDTH + BAR_GAP;

const AudioVoz = ({ img, audio }) => {
    const audioRef = useRef(null);
    const waveRef = useRef(null);

    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [bars, setBars] = useState([]);

    // calcula barras depois que o layout fecha
    useEffect(() => {
        const calcBars = () => {
            if (!waveRef.current) return;

            const width = waveRef.current.clientWidth;
            const count = Math.floor(width / BAR_TOTAL);

            setBars(
                Array.from({ length: count }, () => Math.floor(Math.random() * 20) + 8)
            );
        };

        requestAnimationFrame(calcBars);
        window.addEventListener("resize", calcBars);

        return () => window.removeEventListener("resize", calcBars);
    }, []);

    // progresso automático
    useEffect(() => {
        const audioEl = audioRef.current;

        const update = () => {
            if (!audioEl.duration) return;
            setProgress(audioEl.currentTime / audioEl.duration);
        };

        audioEl.addEventListener("timeupdate", update);
        audioEl.addEventListener("ended", () => setPlaying(false));

        return () => {
            audioEl.removeEventListener("timeupdate", update);
        };
    }, []);

    const toggle = () => {
        const audioEl = audioRef.current;
        if (audioEl.paused) {
            audioEl.play();
            setPlaying(true);
        } else {
            audioEl.pause();
            setPlaying(false);
        }
    };

    const activeBars = Math.floor(progress * bars.length);

    return (
        <div className={styles.audio_box} onClick={toggle}>
            <img src={img} alt="" />

            <div className={styles.area}>
                <button className={styles.play}>
                    {playing ? <IoPause /> : <IoPlay />}
                </button>

                <div className={styles.wave} ref={waveRef}>
                    {bars.map((h, i) => (
                        <span
                            key={i}
                            style={{
                                height: h - 5,
                                background: i <= activeBars ? "#fff" : "#666",
                            }}
                        />
                    ))}
                </div>
            </div>

            <audio ref={audioRef} src={audio} />
        </div>
    );
};

export default AudioVoz;