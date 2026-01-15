import icones from '../assets/icones';
import styles from './CriadoresBanner.module.scss';

const CriadoresBanner = ({ banner }) => {
    return (
        <div className={styles.creator}
            style={{ backgroundImage: `url(${banner?.fundo})` }}
        >
            <div className={styles.creator_container}>

                {/* TOPO */}
                <div className={styles.creator_header}>
                    <div className={styles.creator_avatar}>
                        <img
                            src={banner?.avatar}
                            alt="Avatar do criador"
                            className={styles.creator_avatar_img}
                        />
                        <span className={styles.creator_verified}>
                            {icones.verifie}
                        </span>
                    </div>

                    <div className={styles.creator_stat}>
                        {icones.gostei}
                        <div className={styles.creator_stat_info}>
                            <strong>{banner?.seguidores}</strong>
                            <span>Seguidores</span>
                        </div>
                    </div>

                    <div className={styles.creator_stat}>
                        {icones.seguindo}
                        <div className={styles.creator_stat_info}>
                            <strong>{banner?.seguindo}</strong>
                            <span>Seguindo</span>
                        </div>
                    </div>
                </div>

                {/* INFO */}
                <div className={styles.creator_info}>
                    <div className={styles.creator_names}>
                        <span className={styles.creator_username}>{banner.username}</span>
                        <span className={styles.creator_name}>{banner?.name}</span>
                    </div>

                    <p className={styles.creator_bio}>{banner?.descricao}</p>

                    <span className={styles.creator_location}>
                        {banner?.cidade} - {banner?.uf} / {banner?.pais}
                    </span>

                    {/* NÚMEROS */}
                    <div className={styles.creator_numbers}>
                        <div className={styles.creator_number_item}>
                            {icones.users}
                            <div>
                                <strong>{banner?.assinantes}</strong>
                                <span>Assinantes</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.salvo}
                            <div>
                                <strong>{banner?.posts}</strong>
                                <span>Posts</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.play}
                            <div>
                                <strong>{banner?.videos}</strong>
                                <span>Vídeos</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.imagem}
                            <div>
                                <strong>{banner?.fotos}</strong>
                                <span>Fotos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AÇÕES */}
                <div className={styles.creator_actions}>
                    <button className={styles.creator_subscribe}>
                        <span>Assine agora (1 Mês)</span>
                        <span>R${banner?.valor_mes}</span>
                    </button>

                    <div className={styles.creator_more}>
                        <img
                            src={banner?.img_pais}
                            alt="Bandeira do Brasil"
                            className={styles.creator_country}
                        />
                        {icones.menu_horizontal}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CriadoresBanner;