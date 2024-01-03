import React from "react";
import {StyledButton} from "../../styles/ButtonStyle";
import chat_tel from '../../img/chat-tel.png';
import {StyledHeader} from "./HeaderComponent.styled";

function HeaderComponent(){
    return(
        <StyledHeader id={"header"}>
            <div>
                <div>
                    <p>Easy</p>
                    <p>Fast</p>
                    <p>Secure...</p>
                </div>
                <StyledButton type={"outline"}>Sign Up</StyledButton>
            </div>
            <div>
                <img src={chat_tel} height={600}/>
            </div>
        </StyledHeader>
    );
}

export default HeaderComponent;