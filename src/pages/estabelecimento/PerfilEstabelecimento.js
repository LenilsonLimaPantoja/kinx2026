import Header from '../../components/Header';
import CriadoresBanner from '../../components/CriadoresBanner';
import ProfileSocialBar from '../../components/ProfileSocialBar';
import FeedNavbar from '../../components/FeedNavbar';
import styles from './PerfilEstabelecimento.module.scss';
import icones from '../../assets/icones';
import { useEffect, useState } from 'react';
import PostsCards from '../../components/PostsCards';
import DarkroonsLista from '../../components/DarkroonsLista';
import post1 from '../../arquivos/criadores/perfil/post1.png';
import post2 from '../../arquivos/estabelecimento/perfil/post2.png';
import Galeria from '../../components/Galeria';
import EventosFeed from '../../components/EventosFeed';
import ProfileOverviewEstabelecimento from './components/ProfileOverviewEstabelecimento';
import Loading from '../../components/Loading';



const PerfilEstabelecimento = () => {
    const [btnAtivo, setBtnAtivo] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const titulo_right =
        btnAtivo === 1 ? 'Agora' :
            btnAtivo === 2 ? 'Meu Feed' :
                btnAtivo === 3 ? 'Galeria' :
                    btnAtivo === 4 ? 'Darkrooms' : 'Eventos';

    const array = [
        {
            left: [
                { id: 1, titulo: "Agora" },
                { id: 2, titulo: "Meu Feed" },
                { id: 3, titulo: "Galeria" },
                { id: 4, titulo: "Darkrooms" },
                { id: 5, titulo: "Eventos" },
            ],
            right: [
                { id: 1, titulo: titulo_right, icone: icones.add },
                { id: 2, icone: icones.chat, flutuante: "2" }
            ]
        }
    ];

    return (
        <div className={styles.perfil_criadores}>
            {loading &&
                <Loading />
            }
            <div className={styles.area_perfil_criadores}>
                <Header logado={true} />
                <CriadoresBanner />
                <ProfileSocialBar />
                <FeedNavbar botoes={array} btnAtivo={btnAtivo} setBtnAtivo={setBtnAtivo} />
                <div className={styles.posts}>
                    <div className={styles.area_body}>
                        {btnAtivo === 1 &&
                            <PostsCards img={post1} />
                        }
                        {btnAtivo === 2 &&
                            <EventosFeed />
                        }
                        {btnAtivo === 3 &&
                            <Galeria />
                        }
                        {btnAtivo === 4 &&
                            <DarkroonsLista />
                        }
                        {btnAtivo === 5 &&
                            <EventosFeed />
                        }
                    </div>

                    <ProfileOverviewEstabelecimento />
                </div>
            </div>
        </div>
    )
}
export default PerfilEstabelecimento;