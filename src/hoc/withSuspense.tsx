import React, { Suspense, ComponentType } from 'react';
import {Preloader} from 'src/componets/common/Preloader';

const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => {
    return (props: P) => (
        <Suspense fallback={<Preloader />}>
            <WrappedComponent {...props} />
        </Suspense>
    );
};

export default withSuspense;
