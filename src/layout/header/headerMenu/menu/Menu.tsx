import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: "Home",
        href: "home"
    },

    {
        title: "Skills",
        href: "skills"
    },

    {
        title: "Works",
        href: "works"
    },

    {
        title: "Testimony",
        href: "testimony"
    },

    {
        title: "Contact",
        href: "contact"
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                    >
                        {/* "item" forms a place for absolutely positioned elements: */}
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};


