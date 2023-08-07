import { observeElementVisibility } from './ObserveElement';
import React, { useEffect } from 'react';
import { setElementVisibility } from './Actions';
import { useDispatch } from 'react-redux';

const ElementObserver: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        observeElementVisibility('.image-gallery-slides', isVisible => {
            dispatch(setElementVisibility(isVisible));
        });
    }, [dispatch]);

    return null

};

export default ElementObserver;