import React, {useState} from "react";
import darkLogo from '../../img/darkLongLogo.svg';
import lightLogo from '../../img/lightLongLogo.svg';
import {StyledA, StyledList, StyledNav} from "./NavbarComponent.styled";

function NavbarComponent(props){
    const [logoType, setLogoType] = useState(`${darkLogo}`);

    let logoTypee = logoType === darkLogo ? lightLogo : darkLogo;

    const setTheme = () => {
        let newTheme = props.theme === "light" ? "dark" : "light";
        props.updateTheme(newTheme);
    };

    return(
        <StyledNav>
            <div>
                <img src={logoType} height={150}/>
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
                <button onClick={setTheme}>Change Theme</button>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </StyledNav>
    );
}

export default NavbarComponent;