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
        border: 2px solid ${({ theme }) => theme.button.normal.borderColor};
        border-radius: 20px;
        background: ${({ theme }) => theme.button.normal.backgroundColor};
        transition: .3s all;
        
        a{
            color: ${({theme}) => theme.button.normal.textColor};
            font-size: 1.6rem;
            text-decoration: none;
        }

        &:hover {
            background: ${({theme}) => theme.button.normal.hoverBackgroundColor};
            
            a {
                color: ${({theme}) => theme.button.normal.hoverTextColor};    
            }
        }
    }
`;

export const StyledA = styled.a`
    color: ${({theme}) => theme.textColor}
`;

export const StyledSwitch = styled.label`
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
    
    input {
        display: none;
        &:checked + .slider {
            background-color: #013a63ff;
        }

        &:checked + .slider:before {
            transform: translateX(26px);
        }
    }
`;

export const StyledSliderDiv = styled.div`
    background-color: #468fafff;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
    
    &:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 26px;
    }
`;

export const StyledButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-right: 1rem;
`;