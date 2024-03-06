import React from "react";
import {Card} from "./ChatCardComponent.styled";

function ChatCardComponent(){
    return(
        <Card>
            <h3>Name</h3>
            <p><i className={"fa-solid fa-check-double"}></i> <i className="fa-solid fa-check"></i> Last Message</p>
        </Card>
    );
}

export default ChatCardComponent;