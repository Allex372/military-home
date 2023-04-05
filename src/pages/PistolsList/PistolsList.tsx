import { useState, FC, Suspense, useEffect } from 'react';
import { Engine, Scene, Model } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core'
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import "@babylonjs/loaders/glTF";

import { PistolsArray } from '../../constants';

import styles from './PistolsList.module.css';

interface PistolsInterface {
    id: number;
    name: string;
    description: string;
    img: string;
    model: string;
    detailsImg: string;
}

type ComponentProps = {
    modelFolder: string;
    modelName: string;
}

type LookAtModelProps = {
    id: string
    modelFolder: string;
    modelName: string;
}

const LookAtModel: FC<LookAtModelProps> = ({
    modelName,
    modelFolder
}) => {

    return (
        <Suspense fallback={<box name="fallback" position={Vector3.Zero()} />}>
            <Model
                name="weapon"
                rootUrl={`${modelFolder}/`}
                sceneFilename={modelName}
                scaleToDimension={3.0}
                position={new Vector3(0, 0, 0)}
            />
        </Suspense>
    )
}

export const PistolsList = () => {
    const [pistolId, setPistolId] = useState<PistolsInterface | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [isTabDisplay, setIsTabDisplay] = useState<string>('');
    const [modelName, setModelName] = useState<string | null>(null);
    const [modelFolder, setModelFolder] = useState<string | null>(null);

    useEffect(() => {
        if (pistolId) {
            const strToArray = pistolId.model.split("/");
            const fileName = strToArray.pop();
            fileName && setModelName(fileName);
            const fileFolder = strToArray.join('/');
            fileFolder && setModelFolder(fileFolder);
        }
    }, [pistolId]);


    const ComponentScene: FC<ComponentProps> = ({ modelFolder, modelName }) => {
        return (
            <Dialog open={openModal} fullScreen>
                <div className={styles.modalWrapper}>
                    <div className={styles.closeBtnWrapper}>
                        <Button onClick={() => setOpenModal(false)}>Close Modal</Button>
                    </div>
                    <div className={styles.btnsWrapper}>
                        <Button onClick={() => setIsTabDisplay('3d')}>3D model</Button>
                        <Button onClick={() => setIsTabDisplay('details')}>Weapon details</Button>
                    </div>
                </div>

                {isTabDisplay === '3d' ? <Engine
                    antialias
                    adaptToDeviceRatio
                    canvasId="babylon-js"
                    renderOptions={{
                        whenVisibleOnly: true,
                    }}
                >
                    <Scene>
                        <arcRotateCamera
                            name="camera1"
                            target={Vector3.Zero()}
                            alpha={Math.PI / 2}
                            beta={Math.PI / 4}
                            radius={8}
                            lowerRadiusLimit={2}
                            upperRadiusLimit={10}
                        />
                        <hemisphericLight
                            name="light1"
                            intensity={0.7}
                            direction={Vector3.Up()}
                        />
                        <LookAtModel
                            modelFolder={modelFolder}
                            modelName={modelName}
                            id="1"
                        />
                    </Scene>
                </Engine> :
                    <div className={styles.weaponDetailsWrapper}>
                        {pistolId?.detailsImg ?
                            <div className={styles.detail}>
                                <img src={pistolId?.detailsImg} className={styles.detailsImg} alt='деталі зброї' />
                            </div>
                            :
                            <div>фото не знайдено</div>}
                    </div>}
            </Dialog>
        )
    };
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
                                <Tooltip placement="top-end" title="Натисни щоб побачити 3D модель зброї">
                                    <img src={pistolId.img} className={styles.image} alt='Пістолет' onClick={() => { setOpenModal(true); setIsTabDisplay('3d') }} />
                                </Tooltip>
                            </div>

                            <div className={styles.weaponTest}>{pistolId.description}</div>
                        </div>)
                        : <p style={{ color: 'ghostwhite' }}>Оберіть пістолет з списку</p>
                }
            </div>
            {(modelName && modelFolder) && <ComponentScene modelFolder={modelFolder} modelName={modelName} />
            }
        </div>
    )
}