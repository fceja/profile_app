import React, { useEffect } from "react";

import { observeElementVisibility } from "./ObserveImageElement";
import { updateElementVisibility } from "ts/store/actions/MyGalleryActions";
import { useDispatch } from "react-redux";

interface ElementObserverProps {
  elemToObserve: string;
}

const ElementObserver: React.FC<ElementObserverProps> = ({ elemToObserve }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    observeElementVisibility(elemToObserve, (isVisible) => {
      dispatch(updateElementVisibility(isVisible));
    });
  }, [dispatch]);

  return null;
};

export default ElementObserver;
