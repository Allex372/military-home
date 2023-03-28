import { useState } from 'react';
import styles from './PistolsList.module.css';
import { PistolsArray } from '../../constants';
import img from '../../img/Glock_17.jpg';
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
                            <li key={el.id} onClick={() => setPistolId({ ...el })}>{el.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.descriptionWrapper}>
                {
                    pistolId ?
                        (<div>
                            <div className={styles.imageWrapper}>
                                <img src={img} className={styles.image} alt='Пістолет' />
                            </div>
                            <div>{pistolId.name}</div>
                            <div>{pistolId.description}</div>
                        </div>)
                        : <p>Оберіть пістолет з списку</p>
                }
            </div>
        </div>
    )
}