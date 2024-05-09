import React from 'react';
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/works-1.webp"
import timerImg from "../../../assets/images/works-2.webp"
import {Container} from "../../../components/common/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import {S} from './Works_Styles'

const worksItems = ["All", "Landing Page", "React", "spa"]

const workData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
    },

    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
    }

]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {workData.map((w, index) => {
                        return <Work
                            title={w.title} key={index}
                            src={w.src}
                            text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

