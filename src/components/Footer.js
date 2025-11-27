import styles from './Footer.module.scss';
import logo_light from '../arquivos/logo_light.png';
import { FaXTwitter, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import icones from '../assets/icones';

const Footer = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.area_footer}>
            <footer className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <img src={logo_light} alt="Logo KiNX" className={styles.footerLogo} />
                    <span className={styles.footerFollowText}>Siga a gente:</span>
                    <div className={styles.footerSocialIcons}>
                        {icones.twitter}
                        {icones.instagram}
                        {icones.whatsapp}
                        {icones.telegram}
                    </div>
                </div>

                <div className={styles.footerRight}>
                    <div className={styles.footerLinksWrapper}>
                        <div className={styles.footerLinksSection}>
                            <span className={styles.footerSectionTitle}>Nossas Funcionalidades</span>
                            <span className={styles.footerLink}>Criadores</span>
                            <span className={styles.footerLink}>Darkrooms</span>
                            <span className={styles.footerLink}>Estabelecimentos</span>
                            <span className={styles.footerLink}>Eventos</span>
                        </div>

                        <div className={styles.footerLinksSection}>
                            <span className={styles.footerSectionTitle}>Precisa de Ajuda</span>
                            <span className={styles.footerLink} onClick={() => handleDesenvolvimento("PERGUNTAS FREQUENTES")}>Perguntas Frequentes</span>
                            <span className={styles.footerLink}>Fale Conosco</span>
                            <span className={styles.footerLink}>Imprensa</span>
                            <span className={styles.footerLink}>Como Funciona</span>
                        </div>
                    </div>

                    <div className={styles.footerBottomSection}>
                        <span className={styles.footerCopyright}>
                            2025 © KINX Brasil
                        </span>
                        <p className={styles.footerDisclaimer}>
                            O uso da plataforma KiNX é estritamente proibido para menores de 18 anos. Ao criar uma conta, o usuário declara ter, no mínimo, 18 anos de idade, assumindo total responsabilidade sobre essa informação. O descumprimento dessa regra poderá resultar na suspensão ou exclusão imediata do perfil. Além disso, todo o conteúdo compartilhado na plataforma — como textos, imagens, vídeos, eventos e interações — é de inteira responsabilidade do usuário que o publica. O KiNX não se responsabiliza por conteúdos que violem direitos de terceiros, legislações vigentes ou as diretrizes internas da comunidade. Postagens que contenham ofensas, discriminação, violência, abusos ou qualquer conduta considerada inadequada serão removidas sem aviso prévio, podendo acarretar penalidades como advertência, bloqueio ou exclusão definitiva do perfil. A plataforma conta com mecanismos de monitoramento e canais de denúncia para manter um ambiente seguro, respeitoso e íntegro para todos os usuários. Ao acessar e utilizar o KiNX, o usuário concorda automaticamente com estas regras e se compromete a respeitar integralmente os termos aqui descritos.                        {/* restante do texto mantido igual */}
                        </p>
                        <div className={styles.footerLegalLinks}>
                            <span className={styles.footerLegalLink}>Informações Legais</span>
                            <span className={styles.footerLegalLink}>Regulamentação</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;