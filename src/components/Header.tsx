import "../styles/css/Header.css"

import React from "react";
import SetScrollVar from "../scripts/ScrollScript";

export default function Header() {
    SetScrollVar();

    return (
        <header className="headerContainer">
            <div className="headerDiv">This is header div</div>
        </header>
    )
}