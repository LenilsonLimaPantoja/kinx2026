import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.areaLoading}>
            <div className={styles.loading} />
        </div>
    )
}

export default Loading;