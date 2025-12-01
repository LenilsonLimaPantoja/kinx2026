import styles from './TipoDarkroom.module.scss';
import casual_amizade from '../../../../arquivos/casual_amizade.png';
import icones from '../../../../assets/icones';
const TipoDarkroom = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.area_darkroon_feed_card_topo}>
            <div className={styles.area_darkroon_feed_card_topo_centro}>
                <div className={styles.area_darkroon_feed_card_topo_centro_body}>
                    <img src={casual_amizade} alt='Imagem de darkroom casual_amizade' />
                    <div className={styles.area_darkroon_feed_card_topo_centro_body_texto}>
                        <strong>Casual e Amizades</strong>
                        <p>
                            Se você e seu par estão buscando expandir o círculo de amizades, trocar ideias ou explorar novas conexões de forma leve e respeitosa, esse espaço é pra vocês! Aqui, casais héteros podem conversar, marcar rolês descontraídos, dividir experiências ou simplesmente se divertir trocando histórias com quem está na mesma vibe. Não é um espaço pra pressão, nem pra julgamentos — é sobre afinidade, cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.
                        </p>
                        <span>São Paulo - SP / Brasil</span>
                    </div>
                </div>
                <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom}>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        {icones.users}
                        <span><strong>251</strong> Membros</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        <div className={styles.area_icone_online}>
                            {icones.user}
                            {icones.ponto}
                        </div>
                        <span><strong>121</strong> Online</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        {icones.salvo}
                        <span><strong>12k</strong> Posts</span>
                    </div>
                </div>
                <div className={styles.area_darkroon_feed_card_topo_centro_right}>
                    <div className={styles.area_darkroon_feed_card_topo_centro_right_topo}>
                        <button onClick={() => handleDesenvolvimento("STAR")}>
                            {icones.estrela}
                        </button>
                        <button onClick={() => handleDesenvolvimento("MENU")}>
                            {icones.menu_horizontal}
                        </button>
                    </div>
                    <button className={styles.btn_acao} onClick={() => handleDesenvolvimento("ENTRAR")}>
                        <span>Entrou</span>
                        {icones.check}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TipoDarkroom;