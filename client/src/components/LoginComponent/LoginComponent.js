import React, {useState} from "react";
import {GeneralDiv, StyledDiv} from "./LoginComponent.styled";
import {StyledButton} from "../../styles/ButtonStyle";
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {USER_CHECK_MUTATION} from "../../queries/USER_CHECK_MUTATION";

function LoginComponent() {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })

    const [loginState, setLoginState] = useState(null);
    const [loginCheck, {loading, error, data}] = useMutation(USER_CHECK_MUTATION, {
        variables: {
            username: formState.username,
            password: formState.password
        }
    });
    const navigate = useNavigate();
    function login(){
        loginCheck();
        if (loading){
            setLoginState("Checking Data..");
        }

        if (error) {
            setLoginState(`Error: ${error.message}`);
        }
        if (data){
            if (data.loginUser.error === null){
               setLoginState(`Welcome ${data.loginUser.user.name}`);
               localStorage.setItem("token (1h)", data.loginUser.token);
               navigate(`/chat/${data.loginUser.user.id}`);
            }else{
                setLoginState(`${data.loginUser.error.message}`);
            }
        }
    }

    return (
        <GeneralDiv>
            <StyledDiv>
                <div>
                    <h3>Login</h3>
                </div>
                <div>
                    <form onSubmit={ async (e) => {
                       e.preventDefault();
                       await login();
                    }}>
                        <div>
                            <label htmlFor={"username_"}>Username</label>
                            <input type={"text"} id={"username_"} onChange={(e) => setFormState({...formState, username: e.target.value})} required={true}/>
                        </div>
                        <div>
                            <label htmlFor={"password_"}>Password</label>
                            <input type={"password"} id={"password_"} onChange={(e) => setFormState({...formState, password: e.target.value})} required={true}/>
                        </div>
                        <div className={"login_footer"}>
                            <StyledButton type={"outline"}>Login</StyledButton>
                            <p>If you don't have account.<Link to={"/register"}><b>Click Here</b></Link></p>
                            <p>{loginState}</p>
                        </div>
                    </form>
                </div>
            </StyledDiv>
        </GeneralDiv>
    );
}

export default LoginComponent;