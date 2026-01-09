import styles from './BannerValidarIdade.module.scss';

const BannerValidarIdade = () => {
    return (
        <div className={styles.banner_validar_idade}>
            <span className={styles.banner_titulo}>
                Validação Obrigatória de Idade e Identidade.
            </span>

            <p className={styles.banner_descricao}>
                Para garantir um ambiente seguro, ético e alinhado às diretrizes legais, o KINX exige que todos os criadores de conteúdo passem por um processo obrigatório de validação de idade e identidade. Essa verificação é essencial para confirmar que todos os envolvidos na <strong>criação e publicação de conteúdos têm mais de 18 anos</strong>, protegendo tanto os usuários quanto a integridade da plataforma. O processo é rápido, sigiloso e feito por meio de documentos oficiais e reconhecimento facial — sem espaço para brechas. No KiNX, ser criador é também assumir o compromisso com o respeito, a responsabilidade e a confiança de toda a comunidade.
            </p>

            <button className={styles.banner_botao}>
                Iniciar Validação
            </button>
        </div>
    );
}

export default BannerValidarIdade;
