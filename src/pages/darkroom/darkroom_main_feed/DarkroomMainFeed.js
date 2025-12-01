import styles from './DarkroomMainFeed.module.scss';
import { useState } from 'react';
import { TbCompass } from 'react-icons/tb';
import DarkroomsPoluares from './components/DarkroomsPoluares';
import PostagensRecentes from '../components/PostagensRecentes';
import DarkroonsLista from './components/DarkroonsLista';
import FeedNavbar from '../../../components/FeedNavbar';
import PostsCards from '../../../components/PostsCards';
import SectionHeader from '../../../components/SectionHeader';

const DarkroomMainFeed = () => {
    const [btnAtivo, setBtnAtivo] = useState(1);
    const botoes = [
        {
            left: [
                { titulo: "Agora", id: 1, icone: null },
                { titulo: "Darkrooms", id: 2, icone: null },
            ],
            right: [
                { titulo: "", id: 1, icone: <TbCompass size={25} />, flutuante: null, funcao: () => handleDesenvolvimento("BÚSSOLA") },
            ]
        }
    ];
    const handleDesenvolvimento = (texto) => {
        alert(`Funcionalidade de "${texto}" em desenvolvimento.`);
    }
    return (
        <div className={styles.container_feed_principal}>
            <SectionHeader
                texto="Darkrooms "
                textoBold="Straight"
                description="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição."
            />
            <DarkroomsPoluares />
            <FeedNavbar btnAtivo={btnAtivo} setBtnAtivo={setBtnAtivo} botoes={botoes} />
            <div className={styles.area_body}>
                {btnAtivo == 1 ?
                    <PostsCards />
                    :
                    <DarkroonsLista />
                }

                <PostagensRecentes />
            </div>
        </div>
    )
}
export default DarkroomMainFeed;