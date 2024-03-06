import React, {useState} from "react";
import darkLogo from '../../img/darkLongLogo.svg';
import lightLogo from '../../img/lightLongLogo.svg';
import {
    StyledButtonDiv,
    StyledList,
    StyledNav,
    StyledSliderDiv,
    StyledSwitch
} from "./NavbarComponent.styled";
import {StyledLink} from "../../styles/ButtonStyle";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {VERIFY_TOKEN_MUTATION} from "../../queries/VERIFY_TOKEN_MUTATION";

function NavbarComponent(props){
    const [logoType, setLogoType] = useState(`${lightLogo}`);
    let newTheme = props.theme === "light" ? "dark" : "light";
    let logoTypee = logoType === darkLogo ? lightLogo : darkLogo;
    const [token, setToken] = useState("1");

    const setTheme = () => {
        props.updateTheme(newTheme);
        setLogoType(logoTypee);
    };

    const navigate = useNavigate();

    const [verifyToken, {loading, data, error}] = useMutation(VERIFY_TOKEN_MUTATION,{
        variables: {
            token: token
        }
    })
    async function tokenCheck(){
        await setToken(localStorage.getItem("token (1h)"));

        if (token === ""){
            navigate('/login');
        }

        await verifyToken();
        if (loading){
            console.log("loading..");
        }
        if (error){
            console.log(error);
        }
        if (data){
            console.log(data);
            if (data.verifyToken.success === true){
                navigate(`/chat/${data.verifyToken.user.id}`);
            }else {
                navigate('/login');
            }
        }

    }

    return(
        <StyledNav>
            <div>
                <img src={logoType} height={150}/>
            </div>
            <div>
                <StyledList>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li><a href="#features">Features</a></li>
                </StyledList>
            </div>
            <StyledButtonDiv>
                <StyledLink type={"outline"} onClick={tokenCheck}>Login</StyledLink>
                <StyledLink type={"outline"} to={"/register"}>Sign Up</StyledLink>
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