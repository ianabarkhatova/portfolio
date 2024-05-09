import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Button} from "../../../components/common/Button";
import {Container} from "../../../components/common/Container";
import {FlexWrapper} from "../../../components/common/FlexWrapper";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: lightpink;
`