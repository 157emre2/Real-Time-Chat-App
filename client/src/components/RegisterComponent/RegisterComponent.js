import React, {useState} from "react";
import {GeneralDiv} from "../LoginComponent/LoginComponent.styled";
import {StyledDiv} from "./RegisterComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {ADD_USER_QUERY} from "../../queries/ADD_USER_QUERY";

function RegisterComponent(){
    const [formState, setFormState] = useState({
        name: "",
        username: "",
        password: "",
        email: ""
    })

    const [addUser] = useMutation(ADD_USER_QUERY, {
        variables: {
            name: formState.name,
            username: formState.username,
            email: formState.email,
            password: formState.password
        }
    })

    return(
        <GeneralDiv>
            <StyledDiv>
                <div>
                    <h3>Register</h3>
                </div>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addUser();
                    }}>
                        <div>
                            <label htmlFor={"full_name"}>Full Name</label>
                            <input type={"text"} id={"full_name"} onChange={(e) => setFormState({...formState, name: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor={"username_"}>Username </label>
                            <input type={"text"} id={"username_"} onChange={(e) => setFormState({...formState, username: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor={"email_"}>Email    </label>
                            <input type={"email"} id={"email_"} onChange={(e) => setFormState({...formState, email: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor={"password_"}>Password </label>
                            <input type={"password"} id={"password_"} onChange={(e) => setFormState({...formState, password: e.target.value})}/>
                        </div>
                        <div className={"register_footer"}>
                            <StyledButton type={"outline"}>Register</StyledButton>
                            <p>If you a have account.<Link to={"/login"}><b>Click Here</b></Link></p>
                        </div>
                    </form>
                </div>
            </StyledDiv>
        </GeneralDiv>
    );
}

export default RegisterComponent;