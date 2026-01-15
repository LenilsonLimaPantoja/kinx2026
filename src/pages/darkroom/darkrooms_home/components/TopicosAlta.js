import styles from './TopicosAlta.module.scss';
import icones from '../../../../assets/icones';
import { useNavigate } from 'react-router-dom';

const TopicosAlta = ({ topicos_alta }) => {
    const navigation = useNavigate();
    const handleNavigation = (rota) => {
        navigation(rota)
    }
    return (
        <div className={styles.home_topicos_postagens_area}>
            <div className={styles.home_topicos_area}>
                <div className={styles.home_topicos}>
                    <div className={styles.home_topicos_area_titulo}>
                        <h2>
                            {topicos_alta?.titulo}
                        </h2>
                        <span>Tópicos em Alta</span>
                    </div>
                    <div className={styles.home_topicos_area_card}>
                        {topicos_alta.topicos.map((topico) => (
                            <div key={topico?.id} className={styles.home_topicos_card} onClick={() => handleNavigation(topico?.rota)}>
                                <img src={topico?.avatar} alt='Titulo da imagem aqui' />
                                <div className={styles.home_topicos_card_body}>
                                    <div className={styles.home_topicos_card_body_area_top}>
                                        <span className={styles.home_topicos_card_body_titulo}>{topico?.titulo}</span>
                                        <span className={styles.home_topicos_card_body_subtitulo}>{topico?.subtitulo}</span>
                                    </div>
                                    <div className={styles.home_topicos_card_body_area_bottom}>
                                        {icones.users}
                                        <span><strong>{topico?.membros}</strong> Membros</span>
                                    </div>
                                </div>
                                <div className={styles.home_topicos_right}>
                                    {topico?.privado && (
                                        <button className={styles.home_topicos_right_btn1}>
                                            {icones.cadeado}
                                        </button>
                                    )}
                                    <button>
                                        {icones.login}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.home_topicos_area_bottom}>
                        <button onClick={() => handleNavigation("VER MAIS")}>Ver Mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopicosAlta;