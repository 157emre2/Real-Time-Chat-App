import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #a9d6e5ff;
    background: ${({theme}) => theme.gradient_left};
    height: 80vh;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const StyledAboutUsDiv = styled.div`
    width: 35%;
    color: white;
    font-family: 'Inter',sans-serif;
    
    h3 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    p {
        font-size: 1.6rem;
    }
`;