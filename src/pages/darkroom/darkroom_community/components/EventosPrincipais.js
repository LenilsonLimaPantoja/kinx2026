import styles from './EventosPrincipais.module.scss';
import icones from '../../../../assets/icones';
const EventosPrincipais = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_eventos_principais}>
            <h2>Eventos Principais</h2>
            <div className={styles.area_eventos_principais}>
                {Array.from({ length: 4 }).map((item, index) => (
                    <div key={index} className={styles.evento_principal} onClick={() => handleDesenvolvimento("VISUALIZAR EVENTO")}>
                        <div className={styles.eventos_principais_left}>
                            <div className={styles.eventos_principais_left_topo}>
                                <strong>21</strong>
                                <strong>Set</strong>
                                <strong>25</strong>
                            </div>
                            <span className={styles.hora}>23:00</span>
                        </div>
                        <div className={styles.eventos_principais_body}>
                            <strong>Festa Privada</strong>
                            <p>
                                Festa prive só para casais jovens e
                                selecionados caso tenha interesse
                                inscreva-se agora...
                            </p>
                            <div className={styles.eventos_principais_body_bottom}>
                                {icones.users}
                                <span>30 Vagas</span>
                            </div>
                        </div>
                        <div className={styles.eventos_principais_right}>
                            <button className={styles.btn_lock}>
                                {icones.cadeado}
                            </button>
                            <button>
                                {icones.login}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventosPrincipais;