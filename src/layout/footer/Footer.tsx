import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/common/FlexWrapper";
import {S} from './Footer_Styles'

const SocialItemData = [
    {
        iconId: "inst",
    },

    {
        iconId: "tel",
    },

    {
        iconId: "vk",
    },

    {
        iconId: "link",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Iana</S.Name>
                <S.SocialList>

                    {SocialItemData.map((s,index) => {
                        return(
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21"}
                                          width={"21"}
                                          viewBox={"0 0 21 21"}
                                          iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Iana Barkhatova, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

