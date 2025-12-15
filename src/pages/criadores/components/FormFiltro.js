import styles from './FormFiltro.module.scss';
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import Overlay from '../../../components/Overlay';
import SelectComponent from '../../../components/SelectComponent';

const options_sexo = [
    { value: 1, descricao: "Homens" },
    { value: 2, descricao: "Mulheres" },
    { value: 1, descricao: "Homens" },
    { value: 2, descricao: "Mulheres" },
    { value: 1, descricao: "Homens" },
    { value: 2, descricao: "Mulheres" },
    { value: 1, descricao: "Homens" },
    { value: 2, descricao: "Mulheres" },
    { value: 1, descricao: "Homens" },
    { value: 2, descricao: "Mulheres" },
];

const FormFiltro = () => {
    const [sexo, setSexo] = useState(1);
    const [openClosesexo, setOpenCloseSexo] = useState(false);
    return (
        <form className={styles.form_filtro}>
            <div className={styles.select_genero} onClick={() => setOpenCloseSexo(event => !event)}>
                {sexo == 1 ?
                    <AiOutlineMan />
                    :
                    <AiOutlineWoman />
                }
                <span>{sexo == 1 ? 'Homens' : 'Mulheres'}</span>
                <MdOutlineArrowDropDown />
                {openClosesexo &&
                    <>
                        <Overlay />
                        <SelectComponent options={options_sexo} setOption={setSexo} />
                    </>
                }
            </div>
            <div className={styles.input_filtro}>
                <FiSearch />
                <input type='text' placeholder='Busque por nomes, tags e usuários' />
                <button>Filtrar</button>
            </div>
        </form>
    )
}
export default FormFiltro;