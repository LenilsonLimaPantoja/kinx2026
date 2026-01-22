import styles from './EventosPrincipais.module.scss';
import icones from '../../../../assets/icones';
import eventos_principais from '../../../../data/darkroom/eventos_principais.json';
const EventosPrincipais = () => {
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_eventos_principais}>
            <h2>Eventos Principais</h2>
            <div className={styles.area_eventos_principais}>
                {eventos_principais.map((item) => (
                    <div key={item?.id} className={styles.evento_principal} onClick={() => handleDesenvolvimento("VISUALIZAR EVENTO")}>
                        <div className={styles.eventos_principais_left}>
                            <div className={styles.eventos_principais_left_topo}>
                                <strong>{item?.dia}</strong>
                                <strong>{item?.mes}</strong>
                                <strong>{item?.ano}</strong>
                            </div>
                            <span className={styles.hora}>23:00</span>
                        </div>
                        <div className={styles.eventos_principais_body}>
                            <strong>{item?.titulo}</strong>
                            <p>{item?.descricao}</p>
                            <div className={styles.eventos_principais_body_bottom}>
                                {icones.users}
                                <span>{item?.vagas} Vagas</span>
                            </div>
                        </div>
                        <div className={styles.eventos_principais_right}>
                            {item?.privado &&
                                <button className={styles.btn_lock}>
                                    {icones.cadeado}
                                </button>
                            }
                            {!item?.entrou &&
                                <button>
                                    {icones.login}
                                </button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default EventosPrincipais;