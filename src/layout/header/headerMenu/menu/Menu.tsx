import React from 'react';
import {S} from './../HeaderMenu_Styles'

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.Link href="">
                        {/* "item" forms a place for absolutely positioned elements: */}
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuItem>
            })}
        </ul>
    );
};


