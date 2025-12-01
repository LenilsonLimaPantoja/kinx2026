import Header from './Header';
import styles from './SectionHeader.module.scss';

const SectionHeader = ({ texto, textoBold, icone, description }) => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.sectionHeader}>
            <Header />

            <div className={styles.sectionContent}>
                <div className={styles.titleRow}>
                    <span className={styles.locationText}>
                        {texto}<strong>{textoBold}</strong>
                    </span>

                    {icone &&
                        <button className={styles.refreshButton} onClick={() => handleDesenvolvimento("CIDADE")}>
                            {icone}
                        </button>
                    }
                </div>

                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default SectionHeader;