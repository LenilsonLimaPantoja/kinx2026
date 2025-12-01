import { Route, Routes } from "react-router-dom";
import DarkroomsHome from '../pages/darkroom/darkrooms_home/DarkroomsHome';
import DarkroomCommunity from '../pages/darkroom/darkroom_community/DarkroomCommunity';
import DarkroomMainFeed from '../pages/darkroom/darkroom_main_feed/DarkroomMainFeed';
const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<DarkroomsHome />} />
            <Route path="/darkrooms" element={<DarkroomMainFeed />} />
            <Route path="/darkrooms/feed" element={<DarkroomCommunity />} />
        </Routes>
    )
}
export default Rotas;