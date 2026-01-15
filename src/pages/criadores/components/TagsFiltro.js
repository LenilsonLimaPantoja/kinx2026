import { useState } from 'react';
import styles from './TagsFiltro.module.scss';

const TagsFiltro = ({ tags_filtro }) => {
    const [tags, setTags] = useState(tags_filtro);

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
            {tags?.map(item => (
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
