import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    margin: 20px auto;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    
    font-size: 17px;
`

export const ButtonStyled = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 18px;
    outline: none;

    font-size: 17px;
    color: #444;

    transition: all 150ms ease-in-out;

    &:hover {
        color: #ddd;
        background-color: #02066F;
        cursor: pointer;
    }
`