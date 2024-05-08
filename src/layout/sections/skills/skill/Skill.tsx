import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconID: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
            <StyledSkill>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={props.iconID}/>
                    </IconWrapper>
                    <SkillTitle>{props.title}</SkillTitle>
                    <SkillText>{props.description}</SkillText>
                </FlexWrapper>
            </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 45px 24px 50px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0px 40px;
    }
`

export const IconWrapper = styled.div`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45.00deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%; 
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`
const SkillText = styled.p`
    text-align: center;
`
