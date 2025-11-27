import styles from './Header.module.scss';
import logo_green from '../arquivos/logo_green.png';
import icones from '../assets/icones';

const Header = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.header}>
            <img src={logo_green} alt='Logo Kinx' className={styles.header_logo} />

            <ul className={styles.header_nav}>
                <li onClick={() => handleDesenvolvimento('HOME')} className={styles.header_navItem}>Home</li>
                <li onClick={() => handleDesenvolvimento("CRIADORES")} className={styles.header_navItem}>Criadores</li>
                <li onClick={() => handleDesenvolvimento("DARKROOMS")} className={styles.header_navItem}>Darkrooms</li>
                <li onClick={() => handleDesenvolvimento("EVENTOS")} className={styles.header_navItem}>Eventos</li>
                <li onClick={() => handleDesenvolvimento("SUPORTE")} className={`${styles.header_navItem} ctive}`}>Suporte</li>
            </ul>

            <div className={styles.header_actions}>
                <button className={styles.header_btnRegister} onClick={() => handleDesenvolvimento("REGISTRAR-SE")}>Registre-se Agora!</button>
                <button className={styles.header_btnLogin} onClick={() => handleDesenvolvimento("MENU DRAWER")}>Entrar</button>
                <button className={styles.header_btnMenu}>
                    {icones.menu}
                </button>
            </div>
        </div>
    )
}
export default Header;