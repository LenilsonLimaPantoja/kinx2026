import styles from './PostagensRecentes.module.scss';
import { Fragment } from 'react/jsx-runtime';
import icones from '../../../assets/icones';

const PostagensRecentes = ({ postagens }) => {
    return (
        <div className={styles.home_area_postagens}>
            <div className={styles.home_postagens}>
                <div className={styles.home_postagens_area_top}>
                    <span>Postagens Recentes</span>
                </div>
                {postagens?.map((item) => (
                    <Fragment key={item?.id}>
                        <div className={styles.home_postagens_linha_dividir}></div>
                        <div className={styles.home_postagens_card} onClick={() => alert(`Funcionalidade "ABRIR POST RECENTE" em desenvolvimento`)}>
                            <div className={styles.home_postagens_card_body}>
                                <div className={styles.home_postagens_card_body_top}>
                                    <img src={item?.avatar} alt='Titulo da imagem aqui' />
                                    <span className={styles.card_titulo}>{item?.titulo}</span>
                                    {icones.ponto}
                                    <span className={styles.card_tempo_atividade}>{item?.tempo_ativo}</span>
                                </div>
                                <p>{item?.descricao}</p>
                                <div className={styles.home_postagens_card_body_bottom}>
                                    <span>{item?.curtidas} Curtidas</span>
                                    <span>{item?.comentarios} Comentarios</span>
                                </div>
                            </div>
                            <img className={styles.home_postagens_card_img_right} src={item.post} alt='Titulo da imagem aqui' />
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
export default PostagensRecentes;