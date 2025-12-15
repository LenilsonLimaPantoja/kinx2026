import icones from '../assets/icones';
import styles from './SelectComponent.module.scss';
const SelectComponent = ({ options, setOption }) => {
    return (
        <div className={styles.opt}>
            <button type='button'>
                <span>Fechar</span>
                {icones.close}
            </button>
            {options.map((item, index) => (
                <button key={index} onClick={() => setOption(item.value)}>
                    <span>{item.descricao}</span>
                    {icones.right}
                </button>
            ))}
        </div>
    )
}
export default SelectComponent;