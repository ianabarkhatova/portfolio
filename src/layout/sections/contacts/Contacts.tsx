import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Button} from "../../../components/common/Button";
import {Container} from "../../../components/common/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_bxub26r', 'template_pgc4pmm', form.current, {
                publicKey: 'zwEIC6iuTTwb9LZuJ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset()
    };
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={"user_name"}></S.Field>
                    <S.Field required placeholder={"Email"} name={"email"}></S.Field>
                    <S.Field required placeholder={"Subject"} name={"subject"}></S.Field>
                    <S.Field required placeholder={"Message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};

