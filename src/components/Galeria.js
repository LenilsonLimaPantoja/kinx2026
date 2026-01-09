import styles from './Galeria.module.scss';
import galeria from '../arquivos/criadores/perfil/galeria.png';
import icones from '../assets/icones';

const Galeria = () => {
    return (
        <div className={styles.galeria_container}>
            {Array.from({ length: 5 }).map((__, index) => (
                <div key={index} className={styles.card_galeria}>
                    <img
                        src={galeria}
                        alt="Img Galeria"
                        className={styles.galeria_imagem}
                    />

                    <div className={styles.galeria_conteudo}>
                        <div className={styles.privado}>
                            {icones.cadeado}
                        </div>
                        <span className={styles.galeria_titulo}>
                            Diversão na Augusta
                        </span>

                        <p className={styles.galeria_descricao}>
                            Descubra o universo exclusivo de Mirela Janis, onde sedução, carisma e conteúdos envolventes se encontram. Com uma presença magnética e produções de alta qualidade (Ver Mais)
                        </p>

                        <div className={styles.galeria_estatisticas}>
                            <div className={styles.galeria_item}>
                                {icones.play}
                                <span className={styles.galeria_texto}>
                                    <strong className={styles.galeria_numero}>10</strong>
                                    Videos
                                </span>
                            </div>

                            <div className={styles.galeria_item}>
                                {icones.imagem}
                                <span className={styles.galeria_texto}>
                                    <strong className={styles.galeria_numero}>02</strong>
                                    Fotos
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Galeria;