import React, {useState} from "react";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import AboutUsComponent from "../components/AboutUsComponent/AboutUsComponent";

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
        </div>
    );
}

export default HomePage;