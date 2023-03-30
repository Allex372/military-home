import { useState } from 'react';
import styles from './PistolsList.module.css';
import { PistolsArray } from '../../constants';
interface PistolsInterface {
    id: number;
    name: string;
    description: string;
    img: string;
}

export const PistolsList = () => {
    const [pistolId, setPistolId] = useState<PistolsInterface | null>(null);
    return (
        <div className={styles.wrapper}>
            <div className={styles.listWrapper}>
                <ul>
                    {
                        PistolsArray.map((el: PistolsInterface) => (
                            <li key={el.id} className={styles.linkStyle} onClick={() => setPistolId({ ...el })}>{el.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.descriptionWrapper}>
                {
                    pistolId ?
                        (<div className={styles.weaponDescription}>
                            <div className={styles.weaponName}>{pistolId.name}</div>
                            <div className={styles.imageWrapper}>
                                <img src={pistolId.img} className={styles.image} alt='Пістолет' />
                            </div>

                            <div className={styles.weaponTest}>{pistolId.description}</div>
                        </div>)
                        : <p style={{ color: 'ghostwhite' }}>Оберіть пістолет з списку</p>
                }
            </div>
        </div>
    )
}