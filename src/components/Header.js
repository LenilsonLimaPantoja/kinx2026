import styles from './Header.module.scss';
import logo_green from '../arquivos/logo_green.png';
import icones from '../assets/icones';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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

            <div className={styles.header_actions}>
                <button className={styles.header_btnRegister} onClick={() => handleMenu("REGISTRAR-SE")}>Registre-se Agora!</button>
                <button className={styles.header_btnLogin} onClick={() => handleMenu("MENU DRAWER")}>Entrar</button>
                <button className={styles.header_btnMenu}>
                    {icones.menu}
                </button>
            </div>
        </div>
    )
}
export default Header;