import styles from './DarkroomMainFeed.module.scss';
import { useEffect, useState } from 'react';
import { TbCompass } from 'react-icons/tb';
import DarkroomsPoluares from './components/DarkroomsPoluares';
import PostagensRecentes from '../components/PostagensRecentes';
import DarkroonsLista from '../../../components/DarkroonsLista';
import FeedNavbar from '../../../components/FeedNavbar';
import PostsCards from '../../../components/PostsCards';
import SectionHeader from '../../../components/SectionHeader';
import Loading from '../../../components/Loading';
import feed_principal_agora from '../../../data/darkroom/feed_principal_agora.json';
import populares from '../../../data/darkroom/populares.json';
import postagem_recente from '../../../data/darkroom/postagem_recente.json';
import darkooms_lista from '../../../data/darkroom/darkooms_lista.json';

const DarkroomMainFeed = () => {
    const [btnAtivo, setBtnAtivo] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

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
            {loading &&
                <Loading />
            }
            <SectionHeader
                texto="Darkrooms "
                textoBold="Straight"
                description="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição."
            />
            <DarkroomsPoluares populares={populares} />
            <FeedNavbar btnAtivo={btnAtivo} setBtnAtivo={setBtnAtivo} botoes={botoes} />
            <div className={styles.area_body}>
                {btnAtivo == 1 ?
                    <PostsCards posts={feed_principal_agora} />
                    :
                    <DarkroonsLista darkooms={darkooms_lista} />
                }

                <PostagensRecentes postagens={postagem_recente} />
            </div>
        </div>
    )
}
export default DarkroomMainFeed;