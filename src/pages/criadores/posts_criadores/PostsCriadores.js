import styles from './PostsCriadores.module.scss';
import Header from '../../../components/Header';
import FeedNavbar from '../../../components/FeedNavbar';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';
import CriadoresBanner from '../../../components/CriadoresBanner';
import ProfileSocialBar from '../../../components/ProfileSocialBar';
import icones from '../../../assets/icones';
import PostsCards from '../../../components/PostsCards';
import ProfileOverview from '../../../components/ProfileOverview';
import DarkroonsLista from '../../../components/DarkroonsLista';
import GaleriaCriadores from '../components/GaleriaCriadores';
import feed_principal from '../../../arquivos/feed_principal.png';
import banner from '../../../data/criadores/banner.json';
import tags_perfil from '../../../data/criadores/tags_perfil.json';
import rede_social from '../../../data/criadores/rede_social.json';
import posts from '../../../data/criadores/posts.json';

const array = [
    {
        left: [
            { id: 1, titulo: "Posts" },
            { id: 2, titulo: "Galeria" },
            { id: 3, titulo: "Darkroom" },
        ],
        right: [
            { id: 1, icone: icones.chat, flutuante: "2" }
        ]
    }
];

const PostsCriadores = () => {
    const [loading, setLoading] = useState(true);
    const [btnAtivo, setBtnAtivo] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className={styles.posts_criadores}>
            <div className={styles.area_posts_criadores}>
                {loading && <Loading />}
                <Header logado={true} />
                <CriadoresBanner banner={banner} />
                <ProfileSocialBar tags={tags_perfil} rede_social={rede_social} />
                <FeedNavbar botoes={array} btnAtivo={btnAtivo} setBtnAtivo={setBtnAtivo} />

                <div className={styles.posts}>
                    <div className={styles.area_body}>
                        {btnAtivo === 1 &&
                            <PostsCards posts={posts} />
                        }
                        {btnAtivo === 2 &&
                            <GaleriaCriadores />
                        }
                        {btnAtivo === 3 &&
                            <DarkroonsLista />
                        }
                    </div>

                    <ProfileOverview />
                </div>
            </div>
        </div>
    )
}
export default PostsCriadores;