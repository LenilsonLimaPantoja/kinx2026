import styles from './DarkroonsLista.module.scss';
import icones from '../assets/icones';
import { useNavigate } from 'react-router-dom';

const DarkroonsLista = ({ darkooms }) => {
    const navigation = useNavigate();

    const handleNavigation = (rota) => {
        navigation(rota);
    }

    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_darkrooms_lista}>
            {darkooms?.map((item, index) => (
                <div key={item?.id} className={styles.container_darkrooms_lista_card}>
                    <div className={styles.area_img}>
                        <img src={item?.avatar} alt='Imagem de casual_amizade' />
                    </div>
                    <div className={styles.container_darkrooms_lista_card_body} onClick={() => handleNavigation('/darkrooms/feed')}>
                        <div className={styles.container_darkrooms_lista_card_body_top}>
                            <span>{item?.titulo}</span>
                            <p>{item?.descricao}</p>
                        </div>
                        <div className={styles.container_darkrooms_lista_card_body_bottom}>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.users}
                                </div>
                                <span>{item?.membros} Membros</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.user}
                                    {icones.ponto}
                                </div>
                                <span>{item?.online} Online</span>
                            </div>
                            <div className={styles.container_darkrooms_lista_card_body_bottom_item}>
                                <div className={styles.area_icone}>
                                    {icones.salvo}
                                </div>
                                <span>{item?.posts} Posts</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container_darkrooms_lista_card_right}>
                        <div className={styles.btns_top}>
                            {item?.privado && !item?.entrou &&
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
                            {!item?.privado && !item?.entrou &&
                                <button className={styles.entrar} onClick={() => handleDesenvolvimento("ENTRAR")}>
                                    <span>Entrar</span>
                                    {icones.login}
                                </button>
                            }
                            {item?.entrou &&
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