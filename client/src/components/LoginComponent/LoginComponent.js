import React from "react";
import {GeneralDiv, StyledDiv} from "./LoginComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";
import {Link} from "react-router-dom";

function LoginComponent() {
    return (
        <GeneralDiv>
            <StyledDiv>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor={"username_"} r>Username</label>
                            <input type={"text"} id={"username_"}/>
                        </div>
                        <div>
                            <label htmlFor={"password_"} r>Password</label>
                            <input type={"text"} id={"password_"}/>
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