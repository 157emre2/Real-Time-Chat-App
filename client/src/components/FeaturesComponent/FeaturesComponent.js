import React from "react";
import {Card, FeaturesDiv} from "./FeaturesComponent.styled";

function FeaturesComponent(){
    return(
        <FeaturesDiv id={"features"}>
            <Card>
                <h3>Features</h3>
                <ul>
                    <li>One-on-one and group chat capabilities.</li>
                    <li>Advanced messaging interface: gifs, emojis, file sharing.</li>
                    <li>Continuously updated features: group file sharing, real-time notifications, night mode.</li>
                    <li>Future plans: voice and video calls, advanced profile management, message encryption.</li>
                    <li>Ongoing development focused on exceeding user expectations.</li>
                    <li>Join us, push the boundaries of communication, and explore innovations together!</li>
                </ul>
            </Card>
        </FeaturesDiv>
    );
}

export default FeaturesComponent;