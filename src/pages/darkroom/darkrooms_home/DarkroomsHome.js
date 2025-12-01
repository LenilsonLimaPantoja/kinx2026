import styles from './DarkroomsHome.module.scss';
import TopicosAlta from './components/TopicosAlta';
import PostagensRecentes from '../components/PostagensRecentes';
import SectionHeader from '../../../components/SectionHeader';
import icones from '../../../assets/icones';

const DarkroomsHome = () => {
    return (
        <div className={styles.container_feed_principal}>
            <SectionHeader
                icone={icones.refresh}
                texto="Darkrooms de "
                textoBold="São Paulo - SP"
                description="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição."
            />
            <div className={styles.area_body}>
                <div className={styles.area_darkroom}>
                    {Array.from({ length: 4 }).map((item, index) => (
                        <TopicosAlta key={index} />
                    ))}
                </div>
                <PostagensRecentes />
            </div>
        </div>
    )
}
export default DarkroomsHome;