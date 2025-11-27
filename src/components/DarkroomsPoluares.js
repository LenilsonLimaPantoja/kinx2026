import styles from './DarkroomsPoluares.module.scss';
import casual_amizade from '../arquivos/casual_amizade.png';
import icones from '../assets/icones';
const DarkroomsPoluares = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.area_darkrooms_populares}>
            <div className={styles.darkrooms_populares_area_titulo}>
                <h2>Darkrooms  Populares</h2>
            </div>
            <div className={styles.darkrooms_populares_area_card}>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div key={index} className={styles.darkrooms_populares_card}>
                        <button className={styles.btn_flutuante}>
                            {icones.fire}
                        </button>
                        <div className={styles.darkrooms_populares_area_img}>
                            <img src={casual_amizade} alt='Titulo da imagem aqui' />
                        </div>
                        <div className={styles.darkrooms_populares_card_body} onClick={() => handleDesenvolvimento('ABRIR DARKROOM')}>
                            <div className={styles.darkrooms_populares_card_body_topo}>
                                <span className={styles.darkrooms_populares_card_body_topo_titulo}>Casual e Amizades</span>
                                <span className={styles.darkrooms_populares_card_body_topo_paragrafo}>Casais a procura de outros casais com interesses peculiares. Vamos nos conhecer!</span>
                            </div>
                            <div className={styles.darkrooms_populares_card_body_bottom}>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.users}
                                    </div>
                                    <span>251 Membros</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.user}
                                        {icones.ponto}
                                    </div>
                                    <span>121 Online</span>
                                </div>
                                <div className={styles.darkrooms_populares_card_body_bottom_item}>
                                    <div className={styles.area_icone}>
                                        {icones.salvo}
                                    </div>
                                    <span>12k Posts</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.darkrooms_populares_card_area_sair}>
                            <button  onClick={() => handleDesenvolvimento('SAIR')}>
                                {icones.login}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DarkroomsPoluares;