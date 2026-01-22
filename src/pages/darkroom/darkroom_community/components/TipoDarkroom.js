import styles from './TipoDarkroom.module.scss';
import icones from '../../../../assets/icones';
const TipoDarkroom = ({ tipo }) => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div
            style={{ backgroundImage: `url(${tipo[0]?.fundo})` }}
            className={styles.area_darkroon_feed_card_topo}
        >
            <div className={styles.area_darkroon_feed_card_topo_centro}>
                <div className={styles.area_darkroon_feed_card_topo_centro_body}>
                    <img src={tipo[0]?.avatar} alt='Imagem de darkroom casual_amizade' />
                    <div className={styles.area_darkroon_feed_card_topo_centro_body_texto}>
                        <strong>{tipo[0]?.titulo}</strong>
                        <p>{tipo[0]?.descricao}</p>
                        <span>{tipo[0]?.cidade} - {tipo[0]?.uf} / {tipo[0]?.pais}</span>
                    </div>
                </div>
                <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom}>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        {icones.users}
                        <span><strong>{tipo[0]?.membros}</strong> Membros</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        <div className={styles.area_icone_online}>
                            {icones.user}
                            {icones.ponto}
                        </div>
                        <span><strong>{tipo[0]?.online}</strong> Online</span>
                    </div>
                    <div className={styles.area_darkroon_feed_card_topo_centro_info_darkroom_opcao}>
                        {icones.salvo}
                        <span><strong>{tipo[0]?.posts}</strong> Posts</span>
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
                    {!tipo[0]?.entrou &&
                        <button className={styles.btn_acao} onClick={() => handleDesenvolvimento("ENTRAR")}>
                            <span>Entrou</span>
                            {icones.check}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
export default TipoDarkroom;