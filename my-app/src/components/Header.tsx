import "../styles/Header.css"

import React from "react";
import SetScrollVar from "../scripts/HeroScript";

export default function Header() {
    SetScrollVar();

    return (
        <header className="headerContainer">
            <div className="headerDiv">This is header div</div>
        </header>
    )
}