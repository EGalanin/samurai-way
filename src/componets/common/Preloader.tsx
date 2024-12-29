import * as React from 'react';
import preloader from 'src/assets/preloader.gif';
import  s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloaderContainer}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    );
};
