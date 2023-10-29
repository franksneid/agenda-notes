import {JSX} from "react";
import {HeaderStyled} from "./HeaderStyled";

export default function Header(): JSX.Element {
    return (
        <HeaderStyled>
            <div className="container-name-app">
                <h1>Digital-Notes</h1>
            </div>

        </HeaderStyled>
    );
}
