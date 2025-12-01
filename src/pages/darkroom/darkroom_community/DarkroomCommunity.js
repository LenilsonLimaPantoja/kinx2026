import styles from './DarkroomCommunity.module.scss';
import { useState } from 'react';
import { BiChat } from 'react-icons/bi';
import { MdAdd } from 'react-icons/md';
import DarkroomDetail from './components/DarkroomDetail';
import EventosPrincipais from './components/EventosPrincipais';
import TipoDarkroom from './components/TipoDarkroom';
import LocaisFeed from './components/LocaisFeed';
import EventosFeed from './components/EventosFeed';
import FeedNavbar from '../../../components/FeedNavbar';
import Header from '../../../components/Header';
import PostsCards from '../../../components/PostsCards';

const DarkroomCommunity = () => {
    const [btnAtivo, setBtnAtivo] = useState(1);
    const botoes = [
        {
            left: [
                { titulo: "Agora", id: 1, icone: null },
                { titulo: "Darkrooms", id: 2, icone: null },
                { titulo: "Locais", id: 3, icone: null }
            ],
            right: [
                { titulo: "Novo Post", id: 1, icone: <MdAdd />, flutuante: null, funcao: () => handleDesenvolvimento("NOVO POST") },
                { titulo: "", id: 2, icone: <BiChat />, flutuante: 2, funcao: () => handleDesenvolvimento("CHAT") },
            ]
        }
    ];

    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_feed_principal}>
            {/* aqui eu devo fazer um ajuste, pois o cabeçalho não é esse */}
            <Header />
            <TipoDarkroom />
            <EventosPrincipais />
            <FeedNavbar btnAtivo={btnAtivo} setBtnAtivo={setBtnAtivo} botoes={botoes} />
            <div className={styles.area_body}>
                {btnAtivo === 1 ?
                    <PostsCards />
                    :
                    btnAtivo === 2 ?
                        <EventosFeed />
                        :
                        <LocaisFeed />
                }
                <DarkroomDetail />
            </div>
        </div>
    )
}
export default DarkroomCommunity;