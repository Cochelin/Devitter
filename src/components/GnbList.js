import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ListClickArea = styled.div`

& a {
    display:block;
    padding:10px;
    text-decoration:none;
    ${(p) =>
        p.active &&
        css`
     color: var(--point-green-color);
     `
    }
   
}

& a img {
    margin-bottom:-5px;
    @media screen and (max-width: 850px) {
        margin-bottom:0;
    }
   
}

& a img.IconGNbList{
    margin-right:3px
}
& a img.BookMarker{
margin-bottom:-2px;
    margin-left:0px;
    @media screen and (max-width: 850px) {
        margin-bottom:0;
    }
}
& a.active {
    color: var(--point-green-color);
}
@media screen and (max-width: 850px) {
    width:33%;
    position:relative;
    &::after {
        content : '';
        position: absolute;
        top:0;
        right:0;
        width:1px;
        height:100%;
        background-color: var(--dark-gray-color);
    }
    &:last-child::after{
        display:none;
    }
    & a {
        height:48px;
        font-size : 14px;
        text-align:center;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    & a.active::after{
        content:'';
        width:100%;
        height:2px;
        position:absolute;
        bottom:-2px;
        left:0px;
        background-color:var(--point-green-color);
    }
}
`
const GnbList = ({ name, path, link, frontImg, backImg }) => {
    function isActive(path) {
        return path.length < 2 ? window.location.pathname.endsWith(path) : window.location.pathname.startsWith(path);
    }

    //강제 재랜더링
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])
    return (
        <ListClickArea active={isActive(`${path}`)} >
            <Link onClick={forceUpdate} to={`${link}`}>
                {name}
            </Link>
        </ListClickArea>
    );
};

export default GnbList;