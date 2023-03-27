import React, { FC } from 'react';

import styles from './BaseLayout.module.css';

interface BaseLayoutProps {
    children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};
