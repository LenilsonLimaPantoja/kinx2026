import icones from '../../../assets/icones';
import styles from './Criadores.module.scss';
import fundo1 from './criadores/fundo1.png';
import fundo2 from './criadores/fundo2.png';
import fundo3 from './criadores/fundo3.png';
import fundo4 from './criadores/fundo4.png';
import fundo5 from './criadores/fundo5.png';
import fundo6 from './criadores/fundo6.png';
import avatar1 from './criadores/avatar1.png';
import avatar2 from './criadores/avatar2.png';
import avatar3 from './criadores/avatar3.png';
import avatar4 from './criadores/avatar4.png';
import avatar5 from './criadores/avatar5.png';
import avatar6 from './criadores/avatar6.png';

const fundo = [fundo1, fundo2, fundo3, fundo4, fundo5, fundo6];
const avatar = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const Criadores = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.containerCriadores}>
            <div className={styles.cardsList}>
                <div className={styles.areaTituloList}>
                    <span className={styles.tituloList}>Resultados:</span>
                    <span className={styles.subTituloList}>08 Criadores</span>
                </div>
                {avatar.map((item, index) => (
                    <div
                        onClick={() => handleDesenvolvimento('CRIADOR')}
                        key={index}
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${fundo[index]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className={styles.cardContent}>

                            {/* Header do card */}
                            <div className={styles.cardLeft}>
                                <img
                                    className={styles.cardImage}
                                    src={item}
                                    alt="Imagem do criador"
                                />

                                <div className={styles.cardStats}>
                                    <div className={styles.statItem}>
                                        <span className={styles.statIcon}>{icones.olho}</span>
                                        <span className={styles.statText}>
                                            <strong className={styles.statValue}>233k</strong>
                                            Views
                                        </span>
                                    </div>

                                    <div className={styles.statItem}>
                                        <span className={styles.statIcon}>{icones.assinantes}</span>
                                        <span className={styles.statText}>
                                            <strong className={styles.statValue}>12k</strong>
                                            Assinantes
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Corpo do card */}
                            <div className={styles.cardRight}>
                                <div className={styles.creatorInfo}>
                                    <span className={styles.creatorUsername}>@Arthururach</span>
                                    <span className={styles.creatorName}>Arthur Urach</span>
                                </div>

                                <p className={styles.creatorDescription}>
                                    Descubra o universo exclusivo de Mirela Janis, onde sedução,
                                    carisma e conteúdos envolventes se encontram. Com uma presença
                                    magnética e produções de alta qualidade (Ver Mais)
                                </p>

                                <span className={styles.creatorLocation}>São Paulo, SP</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Criadores;