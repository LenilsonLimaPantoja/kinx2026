import styles from './DarkroonsLista.module.scss';
import casual_amizade from '../arquivos/casual_amizade.png';
import icones from '../assets/icones';

const DarkroonsLista = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_darkrooms_lista}>
            {Array.from({ length: 3 })?.map((item, index) => (
                <div key={index} className={styles.container_darkrooms_lista_card}>
                    <div className={styles.area_img}>
                        <img src={casual_amizade} alt='Imagem de casual_amizade' />
                    </div>
                    <div className={styles.container_darkrooms_lista_card_body} onClick={() => handleDesenvolvimento("DARKROOM")}>
                        <div className={styles.container_darkrooms_lista_card_body_top}>
                            <span>Casual e Amizades</span>
                            <p>prática sexual em que casais consensualmente trocam parceiros para relações íntimas, seja na mesma sala ou em ambientes separados. Também pode envolver a participação de um terceiro ou de outros casais.</p>
                        </div>
                        <div className={styles.container_darkrooms_lista_card_body_bottom}>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.users}
                                </div>
                                <span>251 Membros</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.user}
                                    {icones.ponto}
                                </div>
                                <span>121 Online</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.salvo}
                                </div>
                                <span>12k Posts</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_darkrooms_lista_card_right}>
                        <div className={styles.btns_top}>
                            {index === 1 &&
                                <>
                                    <button className={styles.privado}>
                                        {icones.cadeado}
                                    </button>
                                    <button className={styles.solicitar} onClick={() => handleDesenvolvimento("SOLICITAR")}>
                                        <span>Solicitar</span>
                                        {icones.login}
                                    </button>
                                </>
                            }
                            {index === 2 &&
                                <button className={styles.entrar} onClick={() => handleDesenvolvimento("ENTRAR")}>
                                    <span>Entrar</span>
                                    {icones.login}
                                </button>
                            }
                            {index === 0 &&
                                <button>
                                    {icones.check}
                                </button>
                            }
                        </div>
                        <button className={styles.btn_menu} onClick={() => handleDesenvolvimento("MENU")}>
                            {icones.menu_horizontal}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default DarkroonsLista;