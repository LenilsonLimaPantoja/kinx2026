import styles from './Darkroons.module.scss';
import straight from '../arquivos/straight/straight.png';
import straight1 from '../arquivos/straight/straight1.png';
import straight2 from '../arquivos/straight/straight2.png';
import straight3 from '../arquivos/straight/straight3.png';
import straight4 from '../arquivos/straight/straight4.png';
import straight5 from '../arquivos/straight/straight5.png';
import straight6 from '../arquivos/straight/straight6.png';
import straight7 from '../arquivos/straight/straight7.png';
import straight8 from '../arquivos/straight/straight8.png';
import icones from '../assets/icones';

const grupos = [
    {
        nome: 'Straight World',
        topicos: [
            {
                imagem: straight,
                titulo: 'Casual e Amizades',
                subtitulo: 'Héteros Cis',
                membros: 251,
                privado: true,
            },
            {
                imagem: straight1,
                titulo: 'Relacionamento Sério',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight2,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight3,
                titulo: 'Apenas Jovens',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight4,
                titulo: 'After Party',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight5,
                titulo: 'Off Road ',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight6,
                titulo: 'Baguncinha',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: true,
            },
            {
                imagem: straight7,
                titulo: 'Swing Partys',
                subtitulo: 'Héteros Cis',
                membros: 180,
                privado: false,
            },
            {
                imagem: straight8,
                titulo: 'Héteros Cis',
                subtitulo: 'Héteros Cis',
                membros: 165,
                privado: false,
            }
        ],
    }
];
const Darkroons = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
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
                                <div key={indexT} className={styles.home_topicos_card} onClick={() => handleDesenvolvimento("ABRIR TOPICO")}>
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
                            <button onClick={() => handleDesenvolvimento("VER MAIS")}>Ver Mais</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Darkroons;