import styles from './EventosFeed.module.scss';
import eventos from '../../../../arquivos/eventos.png';
import casual_amizade from '../../../../arquivos/casual_amizade.png';
import icones from '../../../../assets/icones';
import { useState } from 'react';

const EventosFeed = () => {
    const [curtido, setCurtido] = useState(true);

    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.darkrooms_populares_agora}>
            {Array.from({ length: 2 }).map((item, index) => (
                <div key={index} className={styles.card_agora}>
                    <div className={styles.card_agora_topo}>
                        <div className={styles.card_agora_topo_left}>
                            <img src={casual_amizade} alt='Imagem icone casual_amizade' />
                            <span className={styles.left_titulo}>@Maralora32</span>
                            {icones.ponto}
                            <span className={styles.left_acesso_tempo}>08 Minutos Atrás</span>
                        </div>
                        <div className={styles.card_agora_topo_right}>
                            <span>12/100</span>
                            <button onClick={() => handleDesenvolvimento("INSCREVER-SE")}>
                                <span>Inscrever-se</span>
                                <span>12</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.data_evento}>
                        <span className={styles.titulo}>Data e Hora do Evento:</span>
                        <div className={styles.descricao}>
                            <span>{index === 0 ? 'Hoje' : '12/05/2025'}</span>
                            <div className={styles.dividir} />
                            <span>23:30</span>
                        </div>
                    </div>
                    <span className={styles.titulo_evento}>{index === 0 ? 'Secret Party Black Hole' : 'Baile no Off '}</span>
                    <p className={styles.card_agora_paragrafo}>Você está convidado(a) para uma noite de prazer, mistério e descobertas. Em um ambiente sofisticado e discreto, selecionei um grupo especial para compartilhar momentos inesquecíveis na maior festa do KINX de Campo Grande - MS, venha conferir (Ver Mais)</p>
                    <div className={styles.card_agora_tags}>
                        <span>Solteita</span>
                        <span>Animado</span>
                        <span>Animais</span>
                        <span>Madura</span>
                    </div>
                    <div className={styles.card_agora_img_area} onClick={() => handleDesenvolvimento("ABRIR POST")}>
                        <img src={eventos} alt='Imagem do eventos' />
                    </div>
                    <div className={styles.card_agora_bottom}>
                        <div className={styles.card_agora_bottom_left}>
                            <div onClick={() => setCurtido(!curtido)} className={styles.card_agora_bottom_left_curtida_coment}>
                                {curtido ?
                                    icones.gostei_clicado
                                    :
                                    icones.gostei
                                }
                                <span>156</span>
                            </div>
                            <div onClick={() => handleDesenvolvimento("COMENTÁRIOS")} className={styles.card_agora_bottom_left_curtida_coment}>
                                {icones.comentario}
                                <span>21</span>
                            </div>
                        </div>
                        <button onClick={() => handleDesenvolvimento("MENU")} className={styles.card_agora_bottom_icone_menu}>
                            {icones.menu_horizontal}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default EventosFeed;