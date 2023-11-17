import React from "react";

import "@scss/components/telNumber/TelNumber.scss";

const handleClick = () => {
  window.location.href = "tel:123-123-1234";
};

const TelNumber = () => {
  return (
    <button className="tel-num" onClick={handleClick}>
      Call Me
    </button>
  );
};

export default TelNumber;
