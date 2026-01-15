import icones from '../assets/icones';
import styles from './ProfileSocialBar.module.scss';
const ProfileSocialBar = ({ tags, rede_social }) => {
    const openLink = (link) => {
        window.open(link);
    }

    return (
        <div className={styles.profile_extras}>
            <div className={styles.profile_tags}>
                <span className={styles.profile_tags_title}>Tags do Perfil</span>

                <div className={styles.profile_tags_list}>
                    {tags?.map((item) => (
                        <span key={item?.id} className={styles.profile_tag_item}>{item?.descricao}</span>
                    ))}
                </div>
            </div>

            <div className={styles.profile_social}>
                <span className={styles.profile_social_title}>Siga-me</span>

                <div className={styles.profile_social_list}>
                    {rede_social?.map((item) => (
                        <span
                            onClick={() => openLink(item?.link)}
                            key={item?.codigo}
                            className={styles.profile_social_icon}
                        >
                            {
                                item?.codigo === 1 ? icones.twitter :
                                    item?.codigo === 2 ? icones.instagram :
                                        item?.codigo === 3 ? icones.whatsapp :
                                            icones.telegram
                            }
                        </span>

                    ))}

                    <div className={styles.profile_social_divider} />

                    <span className={styles.profile_social_icon}>{icones.assinantes}</span>
                    <span className={styles.profile_social_icon}>{icones.location}</span>
                    <span className={styles.profile_social_icon}>{icones.presente}</span>
                    <span className={styles.profile_social_icon}>{icones.chat}</span>
                </div>
            </div>
        </div>
    )
}
export default ProfileSocialBar;