import icones from '../../../assets/icones';
import styles from './Criadores.module.scss';

const Criadores = ({ criadores }) => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.containerCriadores}>
            <div className={styles.cardsList}>
                <div className={styles.areaTituloList}>
                    <span className={styles.tituloList}>Resultados:</span>
                    <span className={styles.subTituloList}>{criadores?.length || 0} Criadores</span>
                </div>
                {criadores?.map((item) => (
                    <div
                        onClick={() => handleDesenvolvimento('CRIADOR')}
                        key={item?.id}
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${item?.fundo})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={styles.cardContent}>

                            {/* Header do card */}
                            <div className={styles.cardLeft}>
                                <img
                                    className={styles.cardImage}
                                    src={item.avatar}
                                    alt="Imagem do criador"
                                />

                                <div className={styles.cardStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statIcon}>{icones.olho}</span>
                                        <span className={styles.statText}>
                                            <strong className={styles.statValue}>{item?.views}</strong>
                                            Views
                                        </span>
                                    </div>

                                    <div className={styles.statItem}>
                                        <span className={styles.statIcon}>{icones.assinantes}</span>
                                        <span className={styles.statText}>
                                            <strong className={styles.statValue}>{item?.assinantes}</strong>
                                            Assinantes
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Corpo do card */}
                            <div className={styles.cardRight}>
                                <div className={styles.creatorInfo}>
                                    <span className={styles.creatorUsername}>{item?.username}</span>
                                    <span className={styles.creatorName}>{item?.name}</span>
                                </div>

                                <p className={styles.creatorDescription}>{item?.descricao}</p>

                                <span className={styles.creatorLocation}>{item?.cidade}, {item?.uf}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Criadores;