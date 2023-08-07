import { observeElementVisibility } from './ObserveElement';
import React, { useEffect } from 'react';
import { setElementVisibility } from './Actions';
import { useDispatch } from 'react-redux';

const ElementObserver: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        observeElementVisibility('image-gallery-slide  image-gallery-center', isVisible => {
            dispatch(setElementVisibility(isVisible));
        });
    }, [dispatch]);

    return <div className="element-observer">Observer Component</div>;

};

export default ElementObserver;