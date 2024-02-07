import styled from "styled-components";

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
    width: 20vw;

    &:hover {
        border-image: ${({theme}) => theme.gradient_top} 30;
    }

    h3 {
        text-align: center;
        margin-bottom: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
    }
    
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        

        div:not(.register_footer) {
            display: flex;
            justify-content: center;
            
            label {
                width: 9rem;
                text-align: left;
            }
        }

        .register_footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
        }
    }
`;