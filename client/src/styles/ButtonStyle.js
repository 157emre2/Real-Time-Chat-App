import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({theme , type}) => theme.button[type].backgroundColor};
    color: ${({theme, type}) => theme.button[type].textColor};
    border-color: ${({theme, type}) => theme.button[type].borderColor};
    transition: .3s all;
    
    &:hover {
        background-color: ${({theme , type}) => theme.button[type].hoverBackgroundColor};
        color: ${({theme, type}) => theme.button[type].hoverTextColor};
        cursor: pointer;
    }
`;

export const StyledLink = styled(Link)`
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 5px;
    background-color: ${({theme, type}) => theme.button[type].backgroundColor};
    color: ${({theme, type}) => theme.button[type].textColor};
    text-decoration: none;
    border: 1px solid ${({theme, type}) => theme.button[type].borderColor};
    transition: .3s all;

    &:hover {
        background-color: ${({theme, type}) => theme.button[type].hoverBackgroundColor};
        color: ${({theme, type}) => theme.button[type].hoverTextColor};
        cursor: pointer;
    }
`;