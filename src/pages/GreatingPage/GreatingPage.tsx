import { Link } from 'react-router-dom';

import styles from './Greating.module.css';

export const GreatingPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.blockWrapper}>
                <div className={styles.textWrapper}>
                    <p>Привіт, я допоможу тобі вивчити багато нового</p>
                </div>
                <div className={styles.textWrapper}>
                    <button><Link to='/weapones-categories'>Відкрити каталог</Link></button>
                </div>
            </div>
        </div>
    )
}