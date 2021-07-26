import styled from "styled-components";

export const InputStyled = styled.input`
    width: 100%;
    height: 50px;

    font-size: 17px;
    font-weight: 100;
    outline: none;
    color: #050505;

    margin: 15px 0;
    padding: 10px;
    border-radius: 8px;
`

export const LabelStyled = styled.label`
    font-weight: 700;
    color: #FF073A;
`

export const Container = styled.div`
    width: 350px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    font-size: 21px;
`

export const SubLabel = styled.p`
    margin: 5px 0;

    font-size: 15px;
    color: #FF073A;
    font-weight: 100;

    text-align: left;
`