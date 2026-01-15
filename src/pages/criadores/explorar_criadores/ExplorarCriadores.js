import styles from './ExplorarCriadores.module.scss';
import SectionHeader from '../../../components/SectionHeader';
import icones from '../../../assets/icones';
import FormFiltro from '../components/FormFiltro';
import TagsFiltro from '../components/TagsFiltro';
import Destaques from '../components/Destaques';
import Criadores from '../components/Criadores';
import { useEffect, useState } from 'react';
import Loading from '../../../components/Loading';
import tags_filtro from '../../../data/criadores/tags_filtro.json';
import destaques from '../../../data/criadores/destaques.json';
import criadores from '../../../data/criadores/criadores.json';

const ExplorarCriadores = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className={styles.ExplorarCriadores}>
            {loading &&
                <Loading />
            }
            <SectionHeader
                description="Um ambiente exclusivo para quem deseja trocar experiências, compartilhar interesses e explorar novas possibilidades com discrição."
                icone={icones.refresh}
                texto="Criadores Exclusivo em "
                textoBold="São Paulo, SP"
            />
            <div className={styles.area_criadores}>
                <FormFiltro />
                <TagsFiltro tags_filtro={tags_filtro} />
            </div>
            <Destaques setLoading={setLoading} destaques_lista={destaques} />
            <Criadores criadores={criadores} />
        </div>
    )
}
export default ExplorarCriadores;