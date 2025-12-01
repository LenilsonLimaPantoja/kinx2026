import styles from './TopicosAlta.module.scss';
import straight from '../../../../arquivos/straight/straight.png';
import straight1 from '../../../../arquivos/straight/straight1.png';
import straight2 from '../../../../arquivos/straight/straight2.png';
import straight3 from '../../../../arquivos/straight/straight3.png';
import straight4 from '../../../../arquivos/straight/straight4.png';
import straight5 from '../../../../arquivos/straight/straight5.png';
import straight6 from '../../../../arquivos/straight/straight6.png';
import straight7 from '../../../../arquivos/straight/straight7.png';
import straight8 from '../../../../arquivos/straight/straight8.png';
import icones from '../../../../assets/icones';
import { useNavigate } from 'react-router-dom';

const grupos = [
    {
        nome: 'Straight World',
        topicos: [
            {
                imagem: straight,
                titulo: 'Casual e Amizades',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight1,
                titulo: 'Relacionamento Sério',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight2,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight3,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight4,
                titulo: 'After Party',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight5,
                titulo: 'Off Road ',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Swing Partys',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight8,
                titulo: 'Héteros Cis',
                rota: '/darkrooms',
                subtitulo: 'Héteros Cis',
                rota: '/darkrooms',
                membros: 165,
                privado: false,
            }
        ],
    }
];
const TopicosAlta = () => {
    const navigation = useNavigate();
    const handleNavigation = (rota) => {
        navigation(rota)
    }
    return (
        <div className={styles.home_topicos_postagens_area}>
            <div className={styles.home_topicos_area}>
                {grupos?.map((item, indexI) => (
                    <div key={indexI} className={styles.home_topicos}>
                        <div className={styles.home_topicos_area_titulo}>
                            <h2>
                                {item?.nome}
                            </h2>
                            <span>Tópicos em Alta</span>
                        </div>
                        <div className={styles.home_topicos_area_card}>
                            {item?.topicos.map((topico, indexT) => (
                                <div key={indexT} className={styles.home_topicos_card} onClick={() => handleNavigation(topico?.rota)}>
                                    <img src={topico?.imagem} alt='Titulo da imagem aqui' />
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
                ))}
            </div>
        </div>
    )
}
export default TopicosAlta;