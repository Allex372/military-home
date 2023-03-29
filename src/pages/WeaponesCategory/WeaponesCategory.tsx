import { LinkButton } from '../../components';
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
            <p className={styles.title}>Обери категорію збої</p>
            <div className={styles.categoriesList}>
                {
                    categoriesArray.map((el: WeaponeCategory) => (
                        <LinkButton link={el.link} text={el.name} />
                    ))
                }
            </div>
        </div>
    );
}