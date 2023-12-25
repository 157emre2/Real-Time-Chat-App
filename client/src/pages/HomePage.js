import React, {useState} from "react";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";

function HomePage(props){
    const [the, toggleTheme] = useState("light");
    const updateTheme = (newTheme) => {
        toggleTheme(newTheme);
        props.callback(the);
    };
    return(
        <div>
            <NavbarComponent updateTheme={updateTheme} theme={the}/>
        </div>
    );
}

export default HomePage;