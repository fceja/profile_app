import "../styles/scss/TelNumber.scss"

import React from "react";

function handleClick() {
    window.location.href= "tel:123-123-1234";
}

export default function TelNumber () {
    return(
        <button className="tel-num" onClick={handleClick}>Call Me</button>
    )
}