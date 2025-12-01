import { useState } from 'react';
import styles from './TagsFiltro.module.scss';

const TagsFiltro = () => {
    const [tags, setTags] = useState([
        { id: 1, name: "Hétero", selected: false },
        { id: 2, name: "LGBTQIA+", selected: false },
        { id: 3, name: "Amador", selected: false },
        { id: 4, name: "Profissional", selected: false },
        { id: 5, name: "Sensual", selected: false },
        { id: 6, name: "Romântico", selected: false },
        { id: 7, name: "Kinky", selected: false },
        { id: 8, name: "Cosplay", selected: false },
        { id: 9, name: "Fetiche", selected: false },
        { id: 10, name: "Solo", selected: false },
        { id: 11, name: "Casal", selected: false },
        { id: 12, name: "Grupal", selected: false },
        { id: 13, name: "Outdoor", selected: false },
        { id: 14, name: "Artístico", selected: false },
        { id: 15, name: "Fitness", selected: false },
        { id: 16, name: "Música", selected: false },
        { id: 17, name: "Dança", selected: false },
        { id: 18, name: "Erótico", selected: false },
        { id: 19, name: "Clássico", selected: false },
        { id: 20, name: "Experimental", selected: false }
    ]);

    const handleTagSelected = (tag) => {
        setTags(prevTags =>
            prevTags.map(item =>
                item.id === tag.id
                    ? { ...item, selected: !item.selected }
                    : item
            )
        );
    };

    return (
        <div className={styles.tags_filtro}>
            {tags.map(item => (
                <button
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleTagSelected(item)}
                    className={`${styles.tag} ${item.selected ? styles.tag_selected : ''}`}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};

export default TagsFiltro;
