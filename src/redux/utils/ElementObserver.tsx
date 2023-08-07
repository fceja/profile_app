import { observeElementVisibility } from './ObserveImageElement';
import React, { useEffect } from 'react';
import { setElementVisibility } from '../Actions';
import { useDispatch } from 'react-redux';

interface ElementObserverProps {
    elemToObserve: string;
  }

const ElementObserver: React.FC<ElementObserverProps> = ({elemToObserve}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        observeElementVisibility(elemToObserve , isVisible => {
            dispatch(setElementVisibility(isVisible));
        });
    }, [dispatch]);

    return null

};

export default ElementObserver;