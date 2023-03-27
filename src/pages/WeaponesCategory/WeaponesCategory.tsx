import { Link } from 'react-router-dom';

import styles from './WeaponesCategories.module.css'

const categoriesArray = [
    { id: 1, name: 'Пістолети', link: '/pistols-list' },
    { id: 2, name: 'Напів автоматична зброя', link: '/pistols-list' },
    { id: 3, name: 'Автомати', link: '/pistols-list' },
    { id: 4, name: 'Кулемети', link: '/pistols-list' },
    { id: 5, name: 'Гранати', link: '/pistols-list' },
]

interface WeaponeCategory {
    id: number;
    name: string;
    link: string;
}

export const WeaponesCategory = () => {
    return (
        <div className={styles.wrapper}>
            <p>Weapones categories</p>
            <div className={styles.categoriesList}>
                {
                    categoriesArray.map((el: WeaponeCategory) => (
                        <div key={el.id}>
                            <Link to={el.link}>
                                {el.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}