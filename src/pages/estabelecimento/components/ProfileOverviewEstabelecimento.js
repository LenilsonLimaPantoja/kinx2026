import icones from '../../../assets/icones';
import styles from './ProfileOverviewEstabelecimento.module.scss';
import avatar1 from '../../../arquivos/criadores_avatar.png';
import { useEffect, useState } from 'react';

const ProfileOverviewEstabelecimento = () => {
    let padrao = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [dadosSemana, setDadosSemana] = useState({});
    const [dados, setDados] = useState(padrao);
    const [diaSemana, setDiaSemana] = useState();
    const maiorValor = Math.max(...dados);
    const handleDiaSemana = (dia) => {
        setDiaSemana(dia);
        if (dadosSemana[dia]) {
            setDados(dadosSemana[dia]);
        }
    };


    useEffect(() => {
        fetchForecasts();
    }, []);

    const fetchForecasts = async () => {
        const params = new URLSearchParams({
            api_key_private: "pri_5cc8058cf314497b9f315767e1768e86",
            venue_name: "Alchemist Bar & Lounge",
            venue_address: "3rd street, San Francisco"
        });

        const url = `https://besttime.app/api/v1/forecasts?${params.toString()}`;

        try {
            const res = await fetch(url, { method: "POST" });
            const data = await res.json();

            const semana = {
                0: data.analysis[0].day_raw, // DOM
                1: data.analysis[1].day_raw, // SEG
                2: data.analysis[2].day_raw, // TER
                3: data.analysis[3].day_raw, // QUA
                4: data.analysis[4].day_raw, // QUI
                5: data.analysis[5].day_raw, // SEX
                6: data.analysis[6].day_raw  // SAB
            };

            setDadosSemana(semana);

            const hoje = new Date().getDay();
            setDiaSemana(hoje);
            setDados(semana[hoje]);

        } catch (err) {
            console.error("Erro ao buscar forecast:", err);
        }
    };

    return (
        <div className={styles.profileOverview}>

            <div className={styles.profileContent}>
                <span className={styles.username}>@MirelaJanis</span>

                <p className={styles.description}>
                    A Sauna Sauce não é apenas um espaço — é um estado de espírito. Um refúgio onde o tempo desacelera e os sentidos ganham voz. Cada detalhe foi pensado para provocar. Do calor que envolve a pele ao vapor que esconde e revela desejos, tudo convida ao encontro sem pressa, ao toque sem rótulos, à troca que não precisa de palavras. Ambientes discretos, iluminação suave, encontros que surgem no ritmo do olhar. Aromas marcantes dançam no ar, criando uma atmosfera que acende memórias e desperta vontades.
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

                    <div className={styles.endereco}>
                        {icones.location}
                        <div className={styles.area_right}>
                            <span className={styles.titulo}>Endereço</span>
                            <span className={styles.tua_numero}>Rua Estebão Gonçalves, 12</span>
                            <span className={styles.bairro_cidade}>Centro / São Paulo - SP</span>
                        </div>
                    </div>

                    <div className={styles.horario_funcionamento}>
                        {icones.relogio}
                        <div className={styles.right}>
                            <span className={styles.titulo}>Horário de Funcionamento</span>
                            <div className={styles.area_horario}>
                                <span className={styles.status}>Aberto</span>
                                {icones.ponto}
                                <span className={styles.hora}>Fecha às 23:00</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.horario}>
                        {icones.relogio}
                        <div className={styles.right}>
                            <span>Movimento  (Tempo Real):</span>
                            <div className={styles.horario_dias}>
                                <span onClick={() => handleDiaSemana(0)} className={`${diaSemana === 0 ? styles.ativo : ''}`}>DOM</span>
                                <span onClick={() => handleDiaSemana(1)} className={`${diaSemana === 1 ? styles.ativo : ''}`}>SEG</span>
                                <span onClick={() => handleDiaSemana(2)} className={`${diaSemana === 2 ? styles.ativo : ''}`}>TER</span>
                                <span onClick={() => handleDiaSemana(3)} className={`${diaSemana === 3 ? styles.ativo : ''}`}>QUA</span>
                                <span onClick={() => handleDiaSemana(4)} className={`${diaSemana === 4 ? styles.ativo : ''}`}>QUI</span>
                                <span onClick={() => handleDiaSemana(5)} className={`${diaSemana === 5 ? styles.ativo : ''}`}>SEX</span>
                                <span onClick={() => handleDiaSemana(6)} className={`${diaSemana === 6 ? styles.ativo : ''}`}>SAB</span>
                            </div>

                            <div className={styles.horario_grafico}>
                                {dados?.map((valor, i) => (
                                    <div key={i} className={styles.barra} style={{ height: `${valor || 10}%`, backgroundColor: valor === maiorValor ? '#CBFB45' : '#fff' }} />
                                ))}
                            </div>

                            <div className={styles.timeline}>
                                <div className={styles.tracos}>
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div className={styles.area_traco}>
                                            <div key={i} className={styles.traco}></div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.horas}>
                                    <span>06:00</span>
                                    <span>09:00</span>
                                    <span>12:00</span>
                                    <span>15:00</span>
                                    <span>18:00</span>
                                    <span>21:00</span>
                                    <span>00:00</span>
                                    <span>03:00</span>
                                </div>
                            </div>
                            <div className={styles.info_agora}>
                                <span>Agora</span>
                                {icones.ponto}
                                <span>Um pouco movimentado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.dividir} />

        </div>
    );
};

export default ProfileOverviewEstabelecimento;