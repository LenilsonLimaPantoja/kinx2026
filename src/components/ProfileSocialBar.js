import icones from '../assets/icones';
import styles from './ProfileSocialBar.module.scss';
const ProfileSocialBar = () => {
    return (
        <div className={styles.profile_extras}>
            <div className={styles.profile_tags}>
                <span className={styles.profile_tags_title}>Tags do Perfil</span>

                <div className={styles.profile_tags_list}>
                    <span className={styles.profile_tag_item}>Amizade</span>
                    <span className={styles.profile_tag_item}>Ruiva</span>
                    <span className={styles.profile_tag_item}>Praia</span>
                    <span className={styles.profile_tag_item}>LifeStyle</span>
                    <span className={styles.profile_tag_item}>Dinheiro</span>
                    <span className={styles.profile_tag_item}>Novinha</span>
                    <span className={styles.profile_tag_item}>Cruising</span>
                    <span className={styles.profile_tag_item}>Público</span>
                </div>
            </div>

            <div className={styles.profile_social}>
                <span className={styles.profile_social_title}>Siga-me</span>

                <div className={styles.profile_social_list}>
                    <span className={styles.profile_social_icon}>{icones.twitter}</span>
                    <span className={styles.profile_social_icon}>{icones.instagram}</span>
                    <span className={styles.profile_social_icon}>{icones.whatsapp}</span>
                    <span className={styles.profile_social_icon}>{icones.telegram}</span>

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