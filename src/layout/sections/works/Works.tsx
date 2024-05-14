import React, {useState} from 'react';
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/works-1.webp"
import timerImg from "../../../assets/images/works-2.webp"
import {Container} from "../../../components/common/Container";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {S} from './Works_Styles'
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },

    {
        title: "Landing Page",
        status: "landing"
    },

    {
        title: "React",
        status: "react"
    },

    {
        title: "spa",
        status: "spa"
    }
]

const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 1
    },

    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 2
    },

    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 3
    },

    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 4
    },

    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
        type: "spa",
        id: 5
    },

    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 6
    }

]

export const Works: React.FC = () => {
    const[currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div
                                    style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work
                                        title={w.title}
                                        src={w.src}
                                        text={w.text}
                                        key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

