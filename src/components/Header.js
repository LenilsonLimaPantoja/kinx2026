import styles from './Header.module.scss';
import user from '../arquivos/user.png';
import logo_green from '../arquivos/logo_green.png';
import icones from '../assets/icones';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ logado }) => {
    const location = useLocation()
    const navigation = useNavigate();
    const rota = "/" + location.pathname.split("/")[1];

    const menu = [
        { descricao: 'Home', id: 1, rota: '/', selected: rota === "/" ? true : false },
        { descricao: 'Criadores', id: 2, rota: '/criadores', selected: rota === "/criadores" ? true : false },
        { descricao: 'Darkrooms', id: 3, rota: '/darkrooms', selected: rota === "/darkrooms" ? true : false },
        { descricao: 'Eventos', id: 4, rota: '/eventos', selected: rota === "/eventos" ? true : false },
        { descricao: 'Suporte', id: 5, rota: '/suporte', selected: rota === "/suporte" ? true : false }
    ]
    const handleMenu = (rota, id) => {
        navigation(rota);
    }
    return (
        <div className={styles.header}>
            <img src={logo_green} alt='Logo Kinx' className={styles.header_logo} />

            <ul className={styles.header_nav}>
                {menu?.map((item) => (
                    <li
                        key={item?.id}
                        onClick={() => handleMenu(item.rota)}
                        className={`${styles.header_navItem} ${item?.selected ? styles.active : ''}`}
                    >
                        {item?.descricao}
                    </li>
                ))}
            </ul>

            {logado ?
                <div className={styles.user_card}>
                    <button className={styles.user_card_left}>
                        <div className={styles.user_card_avatar_area}>
                            <img className={styles.user_card_avatar} src={user} alt="Imagem de usuário" />
                        </div>
                        <div className={styles.user_card_info}>
                            <span className={styles.user_card_name}>@Usernovo</span>
                            <span className={styles.user_card_role}>Usuário</span>
                        </div>
                    </button>

                    <div className={styles.user_card_right}>
                        <button className={styles.user_card_chat}>
                            {icones?.chat}
                            <strong className={styles.user_card_chat_count}>2</strong>
                        </button>

                        <button className={styles.user_card_count}>2</button>

                        <button className={styles.user_card_menu}>
                            {icones?.menu_horizontal}
                        </button>
                    </div>
                </div>
                :
                <div className={styles.header_actions}>
                    <button className={styles.header_btnRegister} onClick={() => handleMenu("REGISTRAR-SE")}>Registre-se Agora!</button>
                    <button className={styles.header_btnLogin} onClick={() => handleMenu("MENU DRAWER")}>Entrar</button>
                    <button className={styles.header_btnMenu}>
                        {icones.menu}
                    </button>
                </div>
            }
        </div>
    )
}
export default Header;