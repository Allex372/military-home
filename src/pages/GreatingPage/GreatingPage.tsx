import { LinkButton } from '../../components';

import styles from './Greating.module.css';

export const GreatingPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockWrapper}>
                <div className={styles.textWrapper}>
                    <p>Привіт, я допоможу тобі вивчити багато нового</p>
                </div>
                <div className={styles.btnWrapper}>
                    <LinkButton link='/weapones-categories' text='Відкрити каталог' />
                </div>
            </div>
        </div>
    )
}