import styles from './ExplorarCriadores.module.scss';
import SectionHeader from '../../../components/SectionHeader';
import icones from '../../../assets/icones';
import FormFiltro from '../components/FormFiltro';
import TagsFiltro from '../components/TagsFiltro';
import Destaques from '../components/Destaques';

const ExplorarCriadores = () => {
    return (
        <div className={styles.ExplorarCriadores}>
            <SectionHeader
                description="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição."
                icone={icones.refresh}
                texto="Criadores Exclusivo em "
                textoBold="São Paulo, SP"
            />
            <div className={styles.area_criadores}>
                <FormFiltro />
                <TagsFiltro />
            </div>
            <Destaques />
        </div>
    )
}
export default ExplorarCriadores;