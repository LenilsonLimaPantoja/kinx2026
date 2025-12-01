import styles from './PostagensRecentes.module.scss';
import { Fragment } from 'react/jsx-runtime';
import postagem from '../../../arquivos/postagem.png';
import casual_amizade from '../../../arquivos/casual_amizade.png';
import icones from '../../../assets/icones';
const PostagensRecentes = () => {
    return (
        <div className={styles.home_area_postagens}>
            <div className={styles.home_postagens}>
                <div className={styles.home_postagens_area_top}>
                    <span>Postagens Recentes</span>
                </div>
                {Array.from({ length: 3 }).map((item, index) => (
                    <Fragment key={index}>
                        <div className={styles.home_postagens_linha_dividir}></div>
                        <div className={styles.home_postagens_card} onClick={() => alert(`Funcionalidade "ABRIR POST RECENTE" em desenvolvimento`)}>
                            <div className={styles.home_postagens_card_body}>
                                <div className={styles.home_postagens_card_body_top}>
                                    <img src={casual_amizade} alt='Titulo da imagem aqui' />
                                    <span className={styles.card_titulo}>Swing</span>
                                    {icones.ponto}
                                    <span className={styles.card_tempo_atividade}>08 Minutos Atrás</span>
                                </div>
                                <p>À procura de sair do tédio, somos um casal jovem, curioso e cheio de energia, interessados em viver novas experiências, conhecer pessoas diferentes e aproveitar cada oportunidade para tornar nossos dias mais divertidos e intensos.</p>
                                <div className={styles.home_postagens_card_body_bottom}>
                                    <span>1520 Curtidas</span>
                                    <span>250 Comentarios</span>
                                </div>
                            </div>
                            <img className={styles.home_postagens_card_img_right} src={postagem} alt='Titulo da imagem aqui' />
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
export default PostagensRecentes;