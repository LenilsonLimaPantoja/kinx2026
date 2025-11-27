import DarkroomsPoluares from "./components/DarkroomsPoluares";
import DarkroonsLista from "./components/DarkroonsLista";
import Header from "./components/Header";
import PostagensRecentes from "./components/PostagensRecentes";
import PostFeed from "./components/PostFeed";
import TipoDarkroom from "./components/TipoDarkroom";
import EventosPrincipais from "./components/EventosPrincipais";
import Darkroons from "./components/Darkroons";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import DarkroomDetail from "./components/DarkroomDetail";

function App() {
  return (
    <>
      <SectionHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          padding: 20
        }}
      >
        <Header />
        <TipoDarkroom />
        <EventosPrincipais />
        <Darkroons />
        <DarkroomsPoluares />
        <PostFeed />
        <DarkroonsLista />
        <PostagensRecentes />
        <DarkroomDetail />
      </div>
      <Footer />
    </>
  );
}

export default App;
