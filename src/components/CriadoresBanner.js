import icones from '../assets/icones';
import styles from './CriadoresBanner.module.scss';
import avatar1 from '../arquivos/criadores_avatar.png';
import brasil from '../arquivos/brasil.png';

const CriadoresBanner = () => {
    return (
        <div className={styles.creator}>
            <div className={styles.creator_container}>

                {/* TOPO */}
                <div className={styles.creator_header}>
                    <div className={styles.creator_avatar}>
                        <img
                            src={avatar1}
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
                            <strong>1.21k</strong>
                            <span>Seguidores</span>
                        </div>
                    </div>

                    <div className={styles.creator_stat}>
                        {icones.seguindo}
                        <div className={styles.creator_stat_info}>
                            <strong>1.21k</strong>
                            <span>Seguindo</span>
                        </div>
                    </div>
                </div>

                {/* INFO */}
                <div className={styles.creator_info}>
                    <div className={styles.creator_names}>
                        <span className={styles.creator_username}>@MirelaJanis</span>
                        <span className={styles.creator_name}>Mirela Janis</span>
                    </div>

                    <p className={styles.creator_bio}>
                        Se você e seu par estão buscando expandir o círculo de amizades, trocar ideias ou explorar novas conexões de forma leve e respeitosa, esse espaço é pra vocês! Aqui, casais héteros podem conversar, marcar rolês descontraídos, dividir experiências ou simplesmente se divertir trocando histórias com quem está na mesma vibe. Não é um espaço pra pressão, nem pra julgamentos — é sobre afinidade, cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.                        </p>

                    <span className={styles.creator_location}>
                        São Paulo - SP / Brasil
                    </span>

                    {/* NÚMEROS */}
                    <div className={styles.creator_numbers}>
                        <div className={styles.creator_number_item}>
                            {icones.users}
                            <div>
                                <strong>251</strong>
                                <span>Assinantes</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.salvo}
                            <div>
                                <strong>25</strong>
                                <span>Posts</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.play}
                            <div>
                                <strong>12</strong>
                                <span>Vídeos</span>
                            </div>
                        </div>

                        <div className={styles.creator_number_item}>
                            {icones.imagem}
                            <div>
                                <strong>12</strong>
                                <span>Fotos</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AÇÕES */}
                <div className={styles.creator_actions}>
                    <button className={styles.creator_subscribe}>
                        <span>Assine agora (1 Mês)</span>
                        <span>R$19,99</span>
                    </button>

                    <div className={styles.creator_more}>
                        <img
                            src={brasil}
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