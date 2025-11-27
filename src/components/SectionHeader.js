import Header from './Header';
import styles from './SectionHeader.module.scss';
import icones from '../assets/icones';

const SectionHeader = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.sectionHeader}>
            <Header />

            <div className={styles.sectionContent}>
                <div className={styles.titleRow}>
                    <span className={styles.locationText}>
                        Darkrooms de <strong>São Paulo - SP</strong>
                    </span>

                    <button className={styles.refreshButton} onClick={() => handleDesenvolvimento("CIDADE")}>
                        {icones.refresh}
                    </button>
                </div>

                <p className={styles.description}>
                    Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição.
                </p>
            </div>
        </div>
    )
}

export default SectionHeader;