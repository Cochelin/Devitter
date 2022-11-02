import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import BookMarker from '../assets/img/bookMarker_empty_16.png'
import BookMarkerAcive from '../assets/img/bookMarker_active_16.png'
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
    text-decoration:none
}

& a img {
    margin-bottom:-5px;
    @media screen and (max-width: 850px) {
        margin-bottom:0;
    }

}

& a img.IconGNbList{
    margin-right:10px
}
& a img.BookMarker{
margin-bottom:-2px;
    margin-left:4px;
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

const Gnb = () => {
    const [nowTab, setNowTab] = useState('all')
    /*
    nowTab 
    all , today, bookmark
    */

    return (
        <Container>
            <FlexWarp>
                <ListClickArea>
                    <Link to='/' onClick={() => setNowTab('all')} className={nowTab === 'all' ? 'active' : null}>

                        {nowTab === 'all' ?
                            <img className='IconGNbList' src={IconGNbListActive} /> :
                            <img className='IconGNbList' src={IconGNbList} />
                        }
                        전체

                    </Link>
                </ListClickArea>
                <ListClickArea>

                    <Link to='/' onClick={() => setNowTab('today')} className={nowTab === 'today' ? 'active' : null}>

                        Today

                    </Link>
                </ListClickArea>
                <ListClickArea>
                    <Link to='/BookMark/1/10' onClick={() => setNowTab('bookmark')} className={nowTab === 'bookmark' ? 'active' : null}>
                        {/* onClick={() => confirm('로그인 후 이용 가능합니다.', '로그인하기', '취소')} */}
                        북마크
                        {nowTab === 'bookmark' ?
                            <img className="BookMarker" src={BookMarkerAcive} /> :
                            <img className="BookMarker" src={BookMarker} />}

                    </Link>
                </ListClickArea>
            </FlexWarp>
        </Container>
    );
};

export default Gnb;