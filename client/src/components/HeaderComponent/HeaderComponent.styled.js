import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3rem;
    height: 100vh;
    background: #a9d6e5ff;
    background: ${({theme}) => theme.gradient_left};
    
    p {
        font-size: 5rem;
        font-family: 'Montserrat', sans-serif;
    }
`;