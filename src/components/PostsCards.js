import styles from './PostsCards.module.scss';
import icones from '../assets/icones';

const PostsCards = ({ posts }) => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.darkrooms_populares_agora}>
            {posts?.map((item) => (
                <div key={item?.id} className={styles.card_agora}>
                    <div className={styles.card_agora_topo}>
                        <div className={styles.card_agora_topo_left}>
                            <img src={item?.avatar} alt='Imagem icone casual_amizade' />
                            <span className={styles.left_titulo}>{item?.titulo}</span>
                            {icones.ponto}
                            <span className={styles.left_acesso_tempo}>{item?.tempo_ativo}</span>
                        </div>
                        <div className={styles.card_agora_topo_right}>
                            {item?.temporario && icones.temporario}
                            {!item?.entrou &&
                                <button onClick={() => handleDesenvolvimento("SAIR")}>
                                    {icones.login}
                                </button>
                            }
                        </div>
                    </div>
                    <p className={styles.card_agora_paragrafo}>{item?.descricao}</p>
                    <div className={styles.card_agora_tags}>
                        {item.tags?.map((item) => (
                            <span key={item?.id}>{item?.descricao}</span>
                        ))}
                    </div>
                    <div className={styles.card_agora_img_area} onClick={() => handleDesenvolvimento("ABRIR POST")}>
                        <img src={item?.post} alt='Imagem do feed_principal' />
                    </div>
                    <div className={styles.card_agora_bottom}>
                        <div className={styles.card_agora_bottom_left}>
                            <div className={styles.card_agora_bottom_left_curtida_coment}>
                                {item?.curtida_status ?
                                    icones.gostei_clicado
                                    :
                                    icones.gostei
                                }
                                <span>{item?.curtidas}</span>
                            </div>
                            <div onClick={() => handleDesenvolvimento("COMENTÁRIOS")} className={styles.card_agora_bottom_left_curtida_coment}>
                                {icones.comentario}
                                <span>{item?.comentarios}</span>
                            </div>
                        </div>
                        <button onClick={() => handleDesenvolvimento("MENU")} className={styles.card_agora_bottom_icone_menu}>
                            {icones.menu_horizontal}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default PostsCards;