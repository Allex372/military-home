import { LinkButton } from '../../components';
import { useLanguage } from '../../context/languageContext';


import styles from './Greating.module.css';

export const GreatingPage = () => {
    const { t } = useLanguage();
    return (
        <div className={styles.wrapper}>

            <div className={styles.blockWrapper}>
                <div className={styles.textWrapper}>
                    <p>{t('text')}</p>
                </div>
                <div className={styles.btnWrapper}>
                    <LinkButton link='/weapones-categories' text={t('OpenCatalogBtn')} />
                </div>
            </div>
        </div>
    )
}