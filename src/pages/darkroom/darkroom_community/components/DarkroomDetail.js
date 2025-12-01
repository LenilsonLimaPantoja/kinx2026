import icones from '../../../../assets/icones';
import styles from './DarkroomDetail.module.scss';
import membros from '../../../../arquivos/membros.png';
import moderadores from '../../../../arquivos/moderadores.png';

const DarkroomDetail = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <span className={styles.title}>Casual e Amizade</span>

                <p className={styles.description}>
                    Se você e seu par estão buscando expandir o círculo de amizades,
                    trocar ideias ou explorar novas conexões de forma leve e respeitosa,
                    esse espaço é pra vocês! Aqui, casais héteros podem conversar,
                    marcar rolês descontraídos, dividir experiências ou simplesmente
                    se divertir trocando histórias com quem está na mesma vibe. Não
                    é um espaço pra pressão, nem pra julgamentos — é sobre afinidade,
                    cumplicidade e liberdade pra viver o que faz sentido pra cada dupla.
                </p>

                <div className={styles.infoGrid}>
                    <div className={styles.infoRow}>
                        <span>Criado em</span>
                        <span>4, Março 2025</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span>Darkroom</span>
                        <span>Pública</span>
                    </div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <div className={styles.iconBox}>{icones.users}</div>
                        <span>251 Membros</span>
                    </div>

                    <div className={styles.statItem}>
                        <div className={styles.iconBox}>
                            {icones.user}
                            {icones.ponto}
                        </div>
                        <span>221 Online</span>
                    </div>

                    <div className={styles.statItem}>
                        <div className={styles.iconBox}>{icones.salvo}</div>
                        <span>221 Online</span>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.tagsSection}>
                <span className={styles.tagsTitle}>Tags do Darkroom</span>
                <div className={styles.tagList}>
                    <span className={styles.tag}>Hétero</span>
                    <span className={styles.tag}>Amizade</span>
                    <span className={styles.tag}>Festas</span>
                    <span className={styles.tag}>Casual</span>
                    <span className={styles.tag}>Jovens</span>
                    <span className={styles.tag}>Sigilo</span>
                    <span className={styles.tag}>Swing</span>
                    <span className={styles.tag}>Viagens</span>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.membersSection}>
                <div className={styles.membersHeader}>
                    <span className={styles.membersTitle}>Membros</span>

                    <div className={styles.membersWrapper}>
                        <div className={styles.membersList}>
                            {Array.from({ length: 5 }).map((item, index) => (
                                <img
                                    key={index}
                                    className={styles.memberAvatar}
                                    src={membros}
                                    alt="Imagem membro"
                                    style={{
                                        transform: `translateX(-${index * 25}%)`
                                    }}
                                />
                            ))}

                            <button
                                onClick={() => handleDesenvolvimento("VER MEMBROS")}
                                style={{
                                    transform: `translateX(-${5 * 25}%)`
                                }}
                                className={styles.moreMembersButton}
                            >+234</button>
                        </div>

                        <button onClick={() => handleDesenvolvimento("LISTA")} className={styles.membersToggleButton}>
                            {icones.lista}
                        </button>
                    </div>
                </div>

                <div className={styles.moderatorsSection}>
                    <span className={styles.moderatorsTitle}>Moderadores:</span>

                    <div className={styles.moderatorItem}>
                        <img className={styles.moderatorAvatar} src={moderadores} alt="Imagem moderador" />
                        <div className={styles.moderatorInfo}>
                            <span className={styles.moderatorName}>JamesHunterXXX</span>
                            <span className={styles.moderatorRole}>Moderador</span>
                        </div>
                    </div>

                    <div className={styles.moderatorItem}>
                        <img className={styles.moderatorAvatar} src={moderadores} alt="Imagem moderador" />
                        <div className={styles.moderatorInfo}>
                            <span className={styles.moderatorName}>Kasalxnovinho</span>
                            <span className={styles.moderatorRole}>Moderador</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DarkroomDetail;