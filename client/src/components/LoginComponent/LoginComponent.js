import React, {useState} from "react";
import {GeneralDiv, StyledDiv} from "./LoginComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";
import {Link} from "react-router-dom";

function LoginComponent() {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })

    //const [logincheck] =

    return (
        <GeneralDiv>
            <StyledDiv>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <form>
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