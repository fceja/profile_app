import React from "react";

import "../../../styles/components/telNumber/TelNumber.scss"

function handleClick() {
    window.location.href= "tel:123-123-1234";
}

export default function TelNumber () {
    return(
        <button className="tel-num" onClick={handleClick}>Call Me</button>
    )
}