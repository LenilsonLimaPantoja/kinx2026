import styles from './LocaisFeed.module.scss';
import DetalhesPontoEstabelecimento from './DetalhesPontoEstabelecimento';
import LocaisProximos from './LocaisProximos';
import DarkroomMap from './DarkroomMap';

const LocaisFeed = () => {
    return (
        <div className={styles.darkrooms_populares_agora}>
            <span className={styles.tituloSection}>Locais relacionados em <strong>São Paulo, SP -  Brasil</strong></span>
            <DarkroomMap />
            <span className={styles.tituloSection}>Detalhes do Ponto ou Estabelecimento:</span>
            <DetalhesPontoEstabelecimento />
            <span className={styles.tituloSection}>Locais Próximos:</span>
            <LocaisProximos />
        </div>
    )
}
export default LocaisFeed;