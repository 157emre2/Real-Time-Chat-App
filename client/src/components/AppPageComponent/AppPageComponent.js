import React from "react";
import ChatandOptionsComponent from "../ChatandOptionsComponent/ChatandOptionsComponent";
import MessagesComponent from "../MessagesComponent/MessagesComponent";
import {FlexedDiv} from "./AppPageComponent.styled";

function AppPageComponent(){
    return(
        <FlexedDiv>
            <ChatandOptionsComponent />
            <MessagesComponent />
        </FlexedDiv>
    );
}

export default AppPageComponent;