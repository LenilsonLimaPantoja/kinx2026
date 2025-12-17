import icones from '../../../assets/icones';
import AudioVoz from '../../../components/AudioVoz';
import styles from './ProfileOverview.module.scss';
import avatar1 from './destaques/avatar1.png';

const ProfileOverview = () => {
    return (
        <div className={styles.profileOverview}>

            <div className={styles.profileContent}>

                <span className={styles.username}>@MirelaJanis</span>

                <p className={styles.description}>
                    Descubra o universo exclusivo de James Fox, onde sedução, carisma e conteúdos envolventes se encontram. Com uma presença magnética e produções de alta qualidade, James oferece uma experiência única para quem busca algo além do comum. Assine, explore e aproveite momentos inesquecíveis. 😈🔥
                </p>

                <p className={styles.highlights}>
                    🔞 Conteúdo exclusivo | Acesso VIP | Experiências sem censura
                </p>

                <div className={styles.profileMeta}>
                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Criado em</span>
                            <span className={styles.metaValue}>4, Março 2025</span>
                        </div>

                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Tipo de Perfil</span>
                            <span className={styles.metaValue}>
                                Usuário, Criador de Conteúdo
                            </span>
                        </div>
                    </div>

                    <div className={styles.location}>
                        {icones.location}
                        <span>São Paulo, SP</span>
                    </div>

                    <div className={styles.stats}>

                        <div className={styles.statItem}>
                            {icones.salvo}
                            <span>12 Posts</span>
                        </div>

                        <div className={styles.statItem}>
                            {icones.play}
                            <span>12 Vídeos</span>
                        </div>

                        <div className={styles.statItem}>
                            {icones.imagem}
                            <span>12 Fotos</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.dividir} />

            <div className={styles.aboutSection}>
                <span className={styles.aboutTitle}>Sobre Mim</span>

                <div className={styles.aboutItemTopo}>
                    <span className={styles.aboutLabel}>Gênero:</span>
                    <div className={styles.aboutValueGroup}>
                        <span className={styles.aboutValue}>Mulher</span>
                        <span className={styles.aboutDescription}>
                            Mulher Cisgênero. Nasceu do sexo Feminino e identifica-se como Mulher.
                        </span>
                    </div>
                </div>

                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Sexualidade:</span>
                        <span className={styles.aboutValue}>Hétero</span>
                    </div>

                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Preferências:</span>
                        <span className={styles.aboutValue}>Não Informado</span>
                    </div>
                </div>

                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Altura:</span>
                        <span className={styles.aboutValue}>1.89m</span>
                    </div>

                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Peso:</span>
                        <span className={styles.aboutValue}>74kg</span>
                    </div>
                </div>

                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Porte:</span>
                        <span className={styles.aboutValue}>Torneado</span>
                    </div>

                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Pés:</span>
                        <span className={styles.aboutValue}>43</span>
                    </div>
                </div>

                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Tatuagens:</span>
                        <span className={styles.aboutValue}>Sim</span>
                    </div>

                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Piercings:</span>
                        <span className={styles.aboutValue}>Não</span>
                    </div>
                </div>

                <div className={styles.aboutRow}>
                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Etnia:</span>
                        <span className={styles.aboutValue}>Pardo</span>
                    </div>

                    <div className={styles.aboutItem}>
                        <span className={styles.aboutLabel}>Dote:</span>
                        <span className={styles.aboutValue}>-</span>
                    </div>
                </div>
            </div>

            <div className={styles.dividir} />

            <div className={styles.audioSection}>
                <AudioVoz
                    img={avatar1}
                    audio="https://files.fatalmodel.com/shared/ad-intro-voices/1763698172-2001459.mp3"
                />
            </div>

        </div>
    );
};

export default ProfileOverview;