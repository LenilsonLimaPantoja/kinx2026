import styles from './GaleriaCriadores.module.scss';
import galeria1 from './galeria/galeria1.png';
import icones from '../../../assets/icones';
const galeria = [
    { id: 1, bloqueado: false, tipo: 0, texto_btn: 'Grátis' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'R$4,99' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'R$4,99' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 1, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 1, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 0, texto_btn: 'Assinantes' },
    { id: 1, bloqueado: true, tipo: 1, texto_btn: 'Assinantes' },
];

const GaleriaCriadores = () => {
    return (
        <div className={styles.galeria_criadores}>
            <form className={styles.galeria_criadores_filtros}>
                <select className={styles.galeria_criadores_select}>
                    <option value="">Recentes</option>
                </select>

                <select className={styles.galeria_criadores_select}>
                    <option value="">Tudo</option>
                </select>
            </form>

            <div className={styles.galeria_criadores_grid}>
                {galeria.map((item, index) => (
                    <div
                        key={index}
                        className={styles.galeria_criadores_item}
                    >
                        <img
                            src={galeria1}
                            alt=""
                            className={`${styles.galeria_criadores_imagem} ${item.bloqueado ? styles.bloqueado : ''}`}
                        />

                        <button className={styles.galeria_criadores_botaoPreco}>
                            {item.bloqueado && icones.cadeado}
                            <span className={styles.galeria_criadores_preco}>
                                {item.texto_btn}
                            </span>
                        </button>

                        {item.tipo === 0 ? icones.play_video : icones.imagem}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GaleriaCriadores;