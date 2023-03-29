import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './LinkButton.module.css';

interface LinkButtonInterface {
    link: string;
    text: string;
}

export const LinkButton: FC<LinkButtonInterface> = ({ link, text }) => {
    return (
        <Link to={link}>
            <div className={styles.btn}>
                <p>
                    <span>{text}</span>
                </p>
            </div>
        </Link>
    )
}