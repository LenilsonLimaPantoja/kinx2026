import styles from './HeaderLogado.module.scss';
import logo_green from '../arquivos/logo_green.png';
import icones from '../assets/icones';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderLogado = ({ logado }) => {
    const [menuAtivo, setMenuAtivo] = useState(1);
    const navigation = useNavigate();
    const menu = [
        { descricao: 'Home', id: 1, rota: '/' },
        { descricao: 'Criadores', id: 2, rota: '/' },
        { descricao: 'Darkrooms', id: 3, rota: '/' },
        { descricao: 'Eventos', id: 4, rota: '/' },
        { descricao: 'Suporte', id: 5, rota: '/' }
    ]
    const handleMenu = (rota, id) => {
        if (id) setMenuAtivo(id);
        navigation(rota);
    }
    return (
        <div className={styles.header}>
            <img src={logo_green} alt='Logo Kinx' className={styles.header_logo} />

            <ul className={styles.header_nav}>
                {menu?.map((item) => (
                    <li
                        key={item?.id}
                        onClick={() => handleMenu(item.rota, item?.id)}
                        className={`${styles.header_navItem} ${menuAtivo == item?.id ? styles.active : ''}`}
                    >
                        {item?.descricao}
                    </li>
                ))}
            </ul>

            {logado ?
                <div className={styles.user_card}>
                    <button className={styles.user_card_left}>
                        <div className={styles.user_card_avatar_area}>
                            <img className={styles.user_card_avatar} src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="" />
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
export default HeaderLogado;