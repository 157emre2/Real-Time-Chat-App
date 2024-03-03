import styled from "styled-components";

export const Card = styled.div`
    height: 75px;
    width: 100%;
    background: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.textColor};
    padding: 1rem;
    font-size: 1.6rem;
    overflow: hidden;
    transition: background .5s;
    
    &:hover {
        background: ${({theme}) => theme.gradient_right};
    }
    
    p {
        margin-top: .3rem;
        font-size: 1.2rem;
    }
`;