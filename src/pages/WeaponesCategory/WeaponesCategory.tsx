import { LinkButton } from '../../components';
import { useLanguage } from '../../context/languageContext';
import styles from './WeaponesCategories.module.css'

const categoriesArray = [
    { id: 1, name: 'Pistols', link: '/pistols-list' },
    { id: 2, name: 'Automaton', link: '/pistols-list' },
    { id: 3, name: 'Mortar', link: '/pistols-list' },
    { id: 4, name: 'MachineGun', link: '/pistols-list' },
    { id: 5, name: 'GrenadeLauncher', link: '/pistols-list' },
]

interface WeaponeCategory {
    id: number;
    name: string;
    link: string;
}

export const WeaponesCategory = () => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{t("ChoseWeaponesTypes")}</p>
            <div className={styles.categoriesList}>
                {
                    categoriesArray.map((el: WeaponeCategory) => (
                        <LinkButton link={el.link} text={t(el.name)} key={el.id} />
                    ))
                }
            </div>
        </div>
    );
}