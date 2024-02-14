import React, {useState} from "react";
import {GeneralDiv, StyledDiv} from "./LoginComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";
import {Link} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {USER_CHECK_MUTATION} from "../../queries/USER_CHECK_MUTATION";

function LoginComponent() {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })

    const [logincheck] = useMutation(USER_CHECK_MUTATION, {
        variables: {
            username: formState.username,
            password: formState.password
        }
    })



    return (
        <GeneralDiv>
            <StyledDiv>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <form onSubmit={(e) => {
                       e.preventDefault();
                       logincheck();

                    }}>
                        <div>
                            <label htmlFor={"username_"}>Username</label>
                            <input type={"text"} id={"username_"} onChange={(e) => setFormState({...formState, username: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor={"password_"}>Password</label>
                            <input type={"text"} id={"password_"} onChange={(e) => setFormState({...formState, password: e.target.value})}/>
                        </div>
                        <div className={"login_footer"}>
                            <StyledButton type={"outline"}>Login</StyledButton>
                            <p>If you don't have account.<Link to={"/register"}><b>Click Here</b></Link></p>
                        </div>
                    </form>
                </div>
            </StyledDiv>
        </GeneralDiv>
    );
}

export default LoginComponent;