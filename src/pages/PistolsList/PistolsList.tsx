import { useState } from 'react';
import styles from './PistolsList.module.css';

const pistolsArray = [
    { id: 1, name: 'Glock', description: 'lorem asdsad asd asd asdjnda jn jans kjsand kjasn jaksn sadn jk', img: 'src/' },
    { id: 2, name: 'Glock1', description: 'lorem asdsad asd asd asdjnda jn jans kjsand kjasn jaksn sadn jk', img: 'src/' },
    { id: 3, name: 'Glock2', description: 'lorem asdsad asd asd asdjnda jn jans kjsand kjasn jaksn sadn jk', img: 'src/' },
    { id: 4, name: 'Glock3', description: 'lorem asdsad asd asd asdjnda jn jans kjsand kjasn jaksn sadn jk', img: 'src/' },
    { id: 5, name: 'Glock4', description: 'lorem asdsad asd asd asdjnda jn jans kjsand kjasn jaksn sadn jk', img: 'src/' },
];

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
                        pistolsArray.map((el: PistolsInterface) => (
                            <li key={el.id} onClick={() => setPistolId({ ...el })}>{el.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.descriptionWrapper}>
                {
                    pistolId ?
                        (<div>
                            <div>{pistolId.img}</div>
                            <div>{pistolId.name}</div>
                            <div>{pistolId.description}</div>
                        </div>)
                        : <p>Оберіть пістолет з списку</p>
                }
            </div>
        </div>
    )
}