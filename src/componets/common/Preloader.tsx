import * as React from 'react';
import preloader from '../../../src/assets/preloader.gif';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};