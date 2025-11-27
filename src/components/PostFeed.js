import styles from './PostFeed.module.scss';
import feed_principal from '../arquivos/feed_principal.png';
import casual_amizade from '../arquivos/casual_amizade.png';
import icones from '../assets/icones';

const PostFeed = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.darkrooms_populares_agora}>
            {Array.from({ length: 2 }).map((item, index) => (
                <div key={index} className={styles.card_agora}>
                    <div className={styles.card_agora_topo}>
                        <div className={styles.card_agora_topo_left}>
                            <img src={casual_amizade} alt='Imagem icone casual_amizade' />
                            <span className={styles.left_titulo}>Casual e Amizades</span>
                            {icones.ponto}
                            <span className={styles.left_acesso_tempo}>08 Minutos Atrás</span>
                        </div>
                        <div className={styles.card_agora_topo_right}>
                            {icones.temporario}
                            <button onClick={() => handleDesenvolvimento("SAIR")}>
                                {icones.login}
                            </button>
                        </div>
                    </div>
                    <p className={styles.card_agora_paragrafo}>Estou me busca de amizades e conhecer pessoas interessantes, caso tenha interesse manda mensagem na DM. </p>
                    <div className={styles.card_agora_tags}>
                        <span>Solteita</span>
                        <span>Animado</span>
                        <span>Animais</span>
                        <span>Madura</span>
                    </div>
                    <div className={styles.card_agora_img_area} onClick={() => handleDesenvolvimento("ABRIR POST")}>
                        <img src={feed_principal} alt='Imagem do feed_principal' />
                    </div>
                    <div className={styles.card_agora_bottom}>
                        <div className={styles.card_agora_bottom_left}>
                            <div onClick={() => handleDesenvolvimento("GOSTEI")} className={styles.card_agora_bottom_left_curtida_coment}>
                                {icones.gostei}
                                <span>156</span>
                            </div>
                            <div onClick={() => handleDesenvolvimento("COMENTÁRIOS")} className={styles.card_agora_bottom_left_curtida_coment}>
                                {icones.comentario}
                                <span>21</span>
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
export default PostFeed;