import styles from './FormFiltro.module.scss';
import { AiOutlineMan } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const FormFiltro = () => {
    return (
        <form className={styles.form_filtro}>
            <div className={styles.select_genero}>
                <AiOutlineMan />
                {/* <AiOutlineWoman /> */}
                <select>
                    <option>Homens</option>
                    <option>Mulheres</option>
                </select>
                <MdOutlineArrowDropDown />
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