import styled from 'styled-components';

export const StyledNav = styled.nav`
    background: ${({ theme }) => theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    li {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.button.normal.borderColor};
        border-radius: 20px;
        background: ${({ theme }) => theme.button.normal.backgroundColor};
        color: ${({ theme }) => theme.button.normal.textColor};
        transition: .3s all;
        
        &:hover {
            background: ${({theme}) => theme.button.normal.hoverBackgroundColor};
            color: ${({theme}) => theme.button.normal.hoverTextColor};
        }
    }
`;

export const StyledA = styled.a`
    color: ${({theme}) => theme.textColor}
`;