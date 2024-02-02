import styled from "styled-components";

export const GeneralDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.backgroundColor};
`;

export const StyledDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    padding: 2rem;
    border: 2px solid;
    border-image: ${({theme}) => theme.gradient_right} 30;
    background-color: white;
    font-size: 1.6rem;
    transition: .3s all;
    height: 25vh;
    width: 20vw;

    &:hover {
        border-image: ${({theme}) => theme.gradient_top} 30;
    }
    
    div:first-child {
        h3 {
            text-align: center;
            margin-bottom: 2rem;
            font-family: 'Montserrat', sans-serif;
            font-size: 2.4rem;
        }
    }
    
    :nth-child(2) {
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            
            div:not(.login_footer) {
                display: flex;
                justify-content: space-evenly;
            }
            
            .login_footer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 1rem;
            }
        }
    }
`;

