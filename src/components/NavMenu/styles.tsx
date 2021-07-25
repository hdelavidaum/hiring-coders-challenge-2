import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 10%;

    background-color: #02066F;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 150px;

    &:hover {
        border-bottom: 1px;
        border-color: #ddd;
        color: #FF073A;
    }

    @media (max-width: 480px) {
        padding: 0;

        &:hover {
        border-bottom: 0;
        border-color: none;
        color: none;
        }
    }
`

export const LinkWrapper = styled.div`
    width: 30px;
    height: 100%;
    display: flex;

    justify-content: center;
    place-items: center;

    text-align: center;
    font-weight: 400;

    & > a {
        transition: all 150ms ease-in-out;
        text-decoration: none;

        &:hover {
            color: #FF073A;
        }
    }

    @media (max-width: 480px) {
        &:hover {
            color: none;
        }
    }
`