import styled from "styled-components";

export const FeaturesDiv = styled.div`
    background: #a9d6e5ff;
    background: ${({theme}) => theme.gradient_left};
    text-align: center;
    padding-top: 2rem;
    color: white;
    font-size: 2rem;
`;

export const Card = styled.div`
    width: 45%;
    border: 2px solid white;
    border-radius: 20px;
    padding: 2rem;
    margin: 0 auto;
    background: rgba(0,0,0,0.2);x
    backdrop-filter: blur(100px);
    
    h3 {
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
        text-align: left;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;

        li::before {
            content: url("https://cdn4.iconfinder.com/data/icons/core-ui-outlined-rounded/32/outlined_rounded_button_tick-32.png");
            width: 50px;
            height: 50px;
        }
    }
`;