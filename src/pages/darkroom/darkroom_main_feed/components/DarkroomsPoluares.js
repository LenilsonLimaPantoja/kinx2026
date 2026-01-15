import styles from './DarkroomsPoluares.module.scss';
import icones from '../../../../assets/icones';

const DarkroomsPoluares = ({populares}) => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.area_darkrooms_populares}>
            <div className={styles.darkrooms_populares_area_titulo}>
                <h2>Darkrooms  Populares</h2>
            </div>
            <div className={styles.darkrooms_populares_area_card}>
                {populares?.map((item) => (
                    <div key={item?.id} className={styles.darkrooms_populares_card}>
                        <button className={styles.btn_flutuante}>
                            {icones.fire}
                        </button>
                        <div className={styles.darkrooms_populares_area_img}>
                            <img src={item?.avatar} alt='Titulo da imagem aqui' />
                        </div>
                        <div className={styles.darkrooms_populares_card_body} onClick={() => handleDesenvolvimento('ABRIR DARKROOM')}>
                            <div className={styles.darkrooms_populares_card_body_topo}>
                                <span className={styles.darkrooms_populares_card_body_topo_titulo}>{item?.titulo}</span>
                                <span className={styles.darkrooms_populares_card_body_topo_paragrafo}>{item?.descricao}</span>
                            </div>
                            <div className={styles.darkrooms_populares_card_body_bottom}>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.users}
                                    </div>
                                    <span>{item?.membros} Membros</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.user}
                                        {icones.ponto}
                                    </div>
                                    <span>{item?.online} Online</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.salvo}
                                    </div>
                                    <span>{item?.posts} Posts</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.darkrooms_populares_card_area_sair}>
                            {!item?.entrou &&
                                <button onClick={() => handleDesenvolvimento('SAIR')}>
                                    {icones.login}
                                </button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DarkroomsPoluares;