import React, {useState} from "react";
import darkLogo from '../../img/darkLongLogo.svg';
import lightLogo from '../../img/lightLongLogo.svg';
import {
    StyledA,
    StyledButtonDiv,
    StyledInputDiv,
    StyledList,
    StyledNav,
    StyledSliderDiv,
    StyledSwitch
} from "./NavbarComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";

function NavbarComponent(props){
    const [logoType, setLogoType] = useState(`${lightLogo}`);
    let newTheme = props.theme === "light" ? "dark" : "light";
    let logoTypee = logoType === darkLogo ? lightLogo : darkLogo;

    const setTheme = () => {
        props.updateTheme(newTheme);
        setLogoType(logoTypee);
    };

    return(
        <StyledNav>
            <div>
                <img src={logoType} height={150}/>
            </div>
            <div>
                <StyledList>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Contact Us</a></li>
                </StyledList>
            </div>
            <StyledButtonDiv>
                <StyledButton type={"outline"}>Login</StyledButton>
                <StyledButton type={"outline"}>Sign Up</StyledButton>
                <div>
                    <StyledSwitch htmlFor={"checkbox"}>
                        <input type={"checkbox"} id={"checkbox"} onChange={setTheme}/>
                            <StyledSliderDiv className={"slider"}></StyledSliderDiv>
                    </StyledSwitch>
                </div>
            </StyledButtonDiv>
        </StyledNav>
    );
}

export default NavbarComponent;