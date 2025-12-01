import styles from './LocaisProximos.module.scss';
import { MdOutlineStar } from 'react-icons/md';
import { FaChartColumn } from 'react-icons/fa6';
import eventos from '../../../../arquivos/eventos.png';
import casual_amizade from '../../../../arquivos/casual_amizade.png';
import icones from '../../../../assets/icones';
import { useState } from 'react';

const LocaisProximos = () => {
    const [curtido, setCurtido] = useState(true);

    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.card_agora}>
            <div className={styles.card_agora_topo}>
                <div className={styles.card_agora_topo_left}>
                    <img src={casual_amizade} alt='Imagem icone casual_amizade' />
                    <span className={styles.left_titulo}>SaunaSouce</span>
                    {icones.ponto}
                    <span className={styles.left_acesso_tempo}>08 Minutos Atrás</span>
                </div>
                <div className={styles.card_agora_topo_right}>
                    <button onClick={() => handleDesenvolvimento("AVALIAÇÃO")}>
                        <span>4,1</span>
                        <MdOutlineStar />
                    </button>
                    <button onClick={() => handleDesenvolvimento("GRÁFICO")}>
                        <FaChartColumn />
                    </button>
                </div>
            </div>

            <span className={styles.titulo_evento}>#ET0021: Sauna Sauce</span>
            <p className={styles.card_agora_paragrafo}>🔥 Venha curtir um ambiente sofisticado e discreto, com sauna a vapor e seca, bar com drinks especiais, áreas de convivência aconchegantes e eventos temáticos para tornar cada visita única. Aqui, o prazer e o bem-estar andam juntos. 🌈🔥 Viva a experiência SAUNCE!</p>
            <p className={styles.card_agora_paragrafo}>Horários : (Todos os Dias) 19:00 às 23:00</p>
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
    )
}
export default LocaisProximos;