import React, { useCallback, useState } from 'react';
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import BookMarker from '../assets/img/bookMarker_empty_16.png'
import BookMarkerActive from '../assets/img/bookMarker_active_16.png'
import IconGNbList from '../assets/img/icon_gnb_list.png'
import IconGNbListActive from '../assets/img/icon_gnb_list_active.png'
import { confirm } from './../components/popup/confirm'

const Container = styled.div`
    display: table;
    position: fixed;
    top: 80px;
    background-color: var(--light-gray-color);
    box-sizing : border-box;
    padding : 0 48px 0 48px;
    width : 100%;
    border-bottom:2px solid var( --dark-gray-color);
    @media screen and (max-width: 850px) {
        padding:0;
    }
`
const FlexWarp = styled.div`
display: flex;
height:60px;
align-items : center;
font-weight:700;
margin-left : -10px;
@media screen and (max-width: 850px) {
    margin-left:0;
    height:48px;
}
`
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

const Gnb = ({ forceUpdate }) => {
    // const [nowTab, setNowTab] = useState('all')
    /*
    nowTab 
    all , today, bookmark
    */
    function isActive(path) {
        console.log('트루펄스', path, window.location.pathname.startsWith(path))

        return path.length < 2 ? window.location.pathname.endsWith(path) : window.location.pathname.startsWith(path);
    }
    //강제 재랜더링



    return (
        <Container>
            <FlexWarp>
                <ListClickArea active={isActive('/')} >
                    <Link onClick={forceUpdate} to='/'>

                        {/* {nowTab === 'all' ?
                            <img className='IconGNbList' src={IconGNbListActive} /> :
                            <img className='IconGNbList' src={IconGNbList} />
                        } */}
                        <img className='IconGNbList' src={isActive('/') ? IconGNbListActive : IconGNbList} /> 전체

                    </Link>
                </ListClickArea>
                <ListClickArea active={isActive('/Today')}>

                    <Link onClick={forceUpdate} to='/Today'  >

                        Today

                    </Link>
                </ListClickArea>
                <ListClickArea active={isActive('/BookMark')}>
                    <Link onClick={forceUpdate} to='/BookMark/1/10' >

                        북마크  <img className="BookMarker" src={isActive('/BookMark') ? BookMarkerActive : BookMarker} />
                        {/* {nowTab === 'bookmark' ?
                            <img className="BookMarker" src={BookMarkerActive} /> :
                            <img className="BookMarker" src={BookMarker} />} */}

                    </Link>
                </ListClickArea>
            </FlexWarp>
        </Container>
    );
};

export default Gnb;