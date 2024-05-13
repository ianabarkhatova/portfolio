import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contact = styled.section`
    position: relative;
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    align-items: center;
    
    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    padding: 7px 15px;
    color: ${theme.colors.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`

export const S = {
    Contact,
    Form,
    Field,
}