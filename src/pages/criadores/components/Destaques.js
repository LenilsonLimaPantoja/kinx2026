import { useRef, useState } from 'react';
import styles from './Destaques.module.scss';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Destaques = ({ setLoading, destaques_lista }) => {
    const scrollRef = useRef(null);
    const navigation = useNavigate();
    const [destaques, setDestaques] = useState(destaques_lista);
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
                if (item.seleted === true) {
                    setLoading(true);
                    navigation('/criadores/posts');
                    item.seleted = false;
                } else {
                    item.seleted = true;
                }
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
                // onClick={() => navigation('/criadores/posts')}
                className={styles.destaques_lista}
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
            >
                {destaques?.map((item) => (
                    <div
                        key={item?.id}
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
                                            <strong>{item?.views}</strong>
                                            Views
                                        </span>
                                    </div>
                                    <div className={styles.cartaoDestaque_estatistica}>
                                        <BiUserPin />
                                        <span>
                                            <strong>{item?.assinantes}</strong>
                                            Assinantes
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cartaoDestaque_direita}>
                                <div className={styles.cartaoDestaque_usuario}>
                                    <span className={styles.cartaoDestaque_username}>{item?.username}</span>
                                    <span style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_nome}>{item?.name}</span>
                                </div>
                                <p style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_descricao}>{item?.descricao}</p>
                                <span style={{ display: item?.seleted ? 'flex' : 'none' }} className={styles.cartaoDestaque_localizacao}>{item?.cidade}, {item?.uf}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default Destaques;