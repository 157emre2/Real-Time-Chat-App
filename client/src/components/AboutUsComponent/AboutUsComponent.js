import React from "react";
import chat_photo from '../../img/aboutus-chatting.png';
import {StyledDiv} from "./AboutUsComponent.styled";

function AboutUsComponent(){
    return(
        <StyledDiv>
            <img src={chat_photo} height={250}/>
            <p>Hello! We are pushing the boundaries of communication with our real-time chat application developed using
                MERN Stack (MongoDB, Express.js, React, Node.js) and GraphQL technologies. We offer our users the opportunity to connect through one-on-one
                chatting and group formation. Our advanced messaging interface combines features such as gifs, emojis,
                and file sharing to provide users with a richer communication experience. Additionally, we continually
                update our application with features like group file sharing, push notifications, and a night mode,
                focusing on exceeding our users' expectations. Our future plans include adding features such as voice
                and video calls, advanced profile management, and message encryption. Join us on this communication
                journey and explore even more innovations together!</p>
        </StyledDiv>
    );
}

export default AboutUsComponent;