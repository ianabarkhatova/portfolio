import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn,  setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() =>{scroll.scrollToTop()}}>
                    <Icon iconId={"arrow"} height={"15px"} width={"15px"} viewBox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}

        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(161, 79, 87, 0.5);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    height: 30px;
    width: 30px;
`

