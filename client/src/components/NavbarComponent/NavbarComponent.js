import React from "react";
import darkLogo from '../../img/darkLongLogo.svg';
import {StyledNav} from "./NavbarComponent.styled";

function NavbarComponent(props){
    let newTheme = props.theme === "light" ? "dark" : "light";
    const setTheme = () => {
        props.updateTheme(newTheme);
    };

    return(
        <StyledNav>
            <div>
                <img src={darkLogo} height={150}/>
            </div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <button>Login</button>
                <button>Sign Up</button>
                <button onClick={setTheme}>Change Theme</button>
            </div>
        </StyledNav>
    );
}

export default NavbarComponent;