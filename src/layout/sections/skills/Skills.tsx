import React from 'react';
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/common/Container";
import {S} from './Skills_Styles'

const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },

    {
        iconId: "css",
        title: "css3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },

    {
        iconId: "react",
        title: "react",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },

    {
        iconId: "ts",
        title: "typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },

    {
        iconId: "styled-comp",
        title: "styled components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },

    {
        iconId: "figma",
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                        {skillData.map((s, index) => {
                            return <Skill
                                iconId={s.iconId} key={index}
                                title={s.title}
                                description={s.description}/>
                        })}
                    </FlexWrapper>
            </Container>
        </S.Skills>
    );
};



