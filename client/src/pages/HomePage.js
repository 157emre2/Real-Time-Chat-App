import React, {useState} from "react";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import AboutUsComponent from "../components/AboutUsComponent/AboutUsComponent";
import FeaturesComponent from "../components/FeaturesComponent/FeaturesComponent";

function HomePage(props){
    const [the, toggleTheme] = useState("light");
    const updateTheme = (newTheme) => {
        toggleTheme(newTheme);
        props.callback(the);
    };
    return(
        <div>
            <NavbarComponent updateTheme={updateTheme} theme={the}/>
            <HeaderComponent />
            <AboutUsComponent />
            <FeaturesComponent />
        </div>
    );
}

export default HomePage;