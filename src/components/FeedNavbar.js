import styles from './FeedNavbar.module.scss';

const FeedNavbar = ({ btnAtivo, setBtnAtivo, botoes }) => {
    return (
        <div className={styles.feedNavbar}>
            <div className={styles.navTabs}>
                {botoes[0].left?.map((item) => (
                    <button key={item?.id} className={`${styles.tabButton} ${btnAtivo != item?.id ? styles.tabButtonInativo : ''}`} onClick={() => setBtnAtivo(item?.id)}>
                        {item?.icone && item.icone}
                        <span>{item?.titulo}</span>
                    </button>
                ))}
            </div>

            <div className={styles.rightActions}>
                {botoes[0].right?.map((item) => (
                    <button key={item?.id} className={styles.tabButton} onClick={item?.funcao}>
                        {item?.icone && item.icone}
                        {item?.titulo && <span>{item?.titulo}</span>}
                        {item?.flutuante && <strong>{item?.flutuante}</strong>}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default FeedNavbar;