import React, { FC } from 'react';
import { useLanguage } from '../../context/languageContext';


import styles from './BaseLayout.module.css';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    const { setEN, setUA } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <div className={styles.lngBtnWrapper}>
                <button onClick={() => setEN('en')}>EN</button>
                <button onClick={() => setUA('ua')}>UA</button>
            </div>
            {children}
        </div>
    );
};
