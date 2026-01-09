import { Route, Routes } from "react-router-dom";
import DarkroomsHome from '../pages/darkroom/darkrooms_home/DarkroomsHome';
import DarkroomMainFeed from '../pages/darkroom/darkroom_main_feed/DarkroomMainFeed';
import ExplorarCriadores from "../pages/criadores/explorar_criadores/ExplorarCriadores";
import PostsCriadores from "../pages/criadores/posts_criadores/PostsCriadores";
import DarkroomCommunity from '../pages/darkroom/darkroom_community/DarkroomCommunity';
import PerfilCriadores from "../pages/criadores/perfil_ciradores/PerfilCriadores";
import PerfilEstabelecimento from "../pages/estabelecimento/PerfilEstabelecimento";
const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<DarkroomsHome />} />
            <Route path="/darkrooms" element={<DarkroomMainFeed />} />
            <Route path="/criadores" element={<ExplorarCriadores />} />
            <Route path="/criadores/posts" element={<PostsCriadores />} />
            <Route path="/criadores/perfil" element={<PerfilCriadores />} />
            <Route path="/estabelecimentos/perfil" element={<PerfilEstabelecimento />} />
            <Route path="/darkrooms/feed" element={<DarkroomCommunity />} />
        </Routes>
    )
}
export default Rotas;