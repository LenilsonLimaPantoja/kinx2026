import styles from './Criadores.module.scss';
import fundo1 from './criadores/fundo1.png'
import fundo2 from './criadores/fundo2.png'
import fundo3 from './criadores/fundo3.png'
import fundo4 from './criadores/fundo4.png'
import fundo5 from './criadores/fundo5.png'
import fundo6 from './criadores/fundo6.png'
const Criadores = () => {
    return (
        <div className={styles.container_criadores}>
            <div className={styles.cards_list}>
                <div className={styles.card} style={{

                    backgroundImage: `url(${fundo1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div className={styles.area_card}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Criadores;