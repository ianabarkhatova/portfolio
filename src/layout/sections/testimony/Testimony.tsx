import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {S} from '../skills/Skills_Styles'

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quote"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #b2ffdc;
    min-height: 50vh;
    position: relative;
    
    ${S.IconWrapper} {
        margin: 36px 0 72px;
    }
`
