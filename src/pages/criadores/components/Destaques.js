import { useRef, useState } from 'react';
import styles from './Destaques.module.scss';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import avatar1 from './destaques/avatar1.png';
import avatar2 from './destaques/avatar2.png';
import avatar3 from './destaques/avatar3.png';
import avatar4 from './destaques/avatar4.png';
import fundo2 from './destaques/fundo2.png';
import fundo3 from './destaques/fundo3.png';
import fundo4 from './destaques/fundo4.png';

const arrayList = [
    {
        id: 1,
        avatar: avatar1,
        fundo: fundo2,
        seleted: false
    },
    {
        id: 2,
        avatar: avatar2,
        fundo: fundo3,
        seleted: false
    },
    {
        id: 3,
        avatar: avatar3,
        fundo: fundo4,
        seleted: false
    },
    {
        id: 4,
        avatar: avatar4,
        fundo: fundo2,
        seleted: false
    },
    {
        id: 5,
        avatar: avatar2,
        fundo: fundo3,
        seleted: false
    },
    {
        id: 6,
        avatar: avatar1,
        fundo: fundo2,
        seleted: false
    },
    {
        id: 7,
        avatar: avatar3,
        fundo: fundo4,
        seleted: false
    },
    {
        id: 8,
        avatar: avatar4,
        fundo: fundo2,
        seleted: false
    },
    {
        id: 9,
        avatar: avatar2,
        fundo: fundo3,
        seleted: false
    },
    {
        id: 10,
        avatar: avatar3,
        fundo: fundo4,
        seleted: false
    },
];

const Destaques = () => {
    const scrollRef = useRef(null);
    const [destaques, setDestaques] = useState(arrayList);
    const onMouseDown = (e) => {
        const slider = scrollRef.current;
        slider.isDown = true;
        slider.startX = e.pageX - slider.offsetLeft;
        slider.scrollLeftStart = slider.scrollLeft;
        slider.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
        const slider = scrollRef.current;
        slider.isDown = false;
        slider.style.cursor = "grab";
    };

    const onMouseUp = () => {
        const slider = scrollRef.current;
        slider.isDown = false;
        slider.style.cursor = "grab";
    };

    const onMouseMove = (e) => {
        const slider = scrollRef.current;
        if (!slider.isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 2; // velocidade do arrasto
        slider.scrollLeft = slider.scrollLeftStart - walk;
    };

    const handleSelectDestaque = (destaque) => {
        const destaquesSelect = destaques.map((item) => {
            if (item?.id === destaque?.id) {
                item.seleted = true;
                return item
            }
            item.seleted = false;
            return item;
        });

        setDestaques(destaquesSelect);
    }
    return (
        <div className={styles.destaques}>
            <span className={styles.destaques_titulo}>Destaques:</span>
            <div
                className={styles.destaques_lista}
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {destaques?.map((item, index) => (
                    <div
                        key={index}
                        className={styles.cartaoDestaque}
                        style={{
                            backgroundImage: `url('${item?.fundo}')`,
                            border: item?.seleted ? '3px solid #CBFB45' : 'none',
                            minWidth: item?.seleted ? 442 : 243,
                            width: 442
                        }}
                    >
                        <div
                            onClick={() => handleSelectDestaque(item)}
                            className={styles.cartaoDestaque_fundoBlur}
                            style={{ flexDirection: item?.seleted ? 'row' : 'column', gap: 12 }}
                        >
                            <div className={styles.cartaoDestaque_esquerda} >
                                <div className={styles.cartaoDestaque_avatar}>
                                    <img src={item?.avatar} alt='Imagem 1' />
                                    <RiVerifiedBadgeFill />
                                </div>
                                <div style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_estatisticas}>
                                    <div className={styles.cartaoDestaque_estatistica}>
                                        <MdOutlineRemoveRedEye />
                                        <span>
                                            <strong>233k</strong>
                                            Views
                                        </span>
                                    </div>
                                    <div className={styles.cartaoDestaque_estatistica}>
                                        <BiUserPin />
                                        <span>
                                            <strong>12k</strong>
                                            Assinantes
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cartaoDestaque_direita}>
                                <div className={styles.cartaoDestaque_usuario}>
                                    <span className={styles.cartaoDestaque_username}>@MirelaJanis</span>
                                    <span style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_nome}>Mirela Janis</span>
                                </div>
                                <p style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_descricao}>
                                    Descubra o universo exclusivo de Mirela Janis, onde sedução, carisma e conteúdos envolventes se encontram.
                                    Com uma presença magnética e produções de alta qualidade (Ver Mais)
                                </p>
                                <span style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_localizacao}>São Paulo, SP</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default Destaques;