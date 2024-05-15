import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    background-color: rgba(250, 226, 229, 0.2);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    @media ${theme.media.mobile}, ${theme.media.tablet} {
        background-color: transparent;
    }
`

export const S = {
    Header
}