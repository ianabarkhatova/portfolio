import React from 'react';
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Button} from "../../../components/common/Button";
import {Container} from "../../../components/common/Container";
import {S} from './Contacts_Styles'

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Name"}></S.Field>
                    <S.Field placeholder={"Subject"}></S.Field>
                    <S.Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

