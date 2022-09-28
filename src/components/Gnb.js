import React from 'react';
import styled from "styled-components";

import BookMarker from '../assets/img/bookMarker_empty_16.png'
import BookMarkerAcive from '../assets/img/bookMarker_active_16.png'
import IconGNbList from '../assets/img/icon_gnb_list.png'
import IconGNbListActive from '../assets/img/icon_gnb_list_active.png'


const Container = styled.div`
    display: table;
    background-color: var(--light-gray-color);
    box-sizing : border-box;
    padding : 0 15px 0 15px;
    width : 100%;
`
const FlexWarp = styled.div`
display: flex;
height:60px;
align-items : center;
font-weight:700;
margin-left : -10px
`
const ListClickArea = styled.div`

& a {
    display:block;
    padding:10px;
    text-decoration:none
}
& a img {
    margin-bottom:-5px
}

& a img.IconGNbList{
    margin-right:10px
}
& a img.BookMarker{
margin-bottom:-2px;
    margin-left:4px
}
& a.active {
    color: var(--point-green-color);
}
`

const Gnb = ({ nowTab }) => {

    /*
    nowTab 
    all , today, bookmark
    */
    nowTab = 'all'
    return (
        <Container>
            <FlexWarp>
                <ListClickArea>
                    <a href='#' class={nowTab === 'all' ? 'active' : null}>
                        {nowTab === 'all' ?
                            <img class='IconGNbList' src={IconGNbListActive} /> :
                            <img class='IconGNbList' src={IconGNbList} />
                        }
                        전체
                    </a>
                </ListClickArea>
                <ListClickArea>
                    <a href='#' class={nowTab === 'today' ? 'active' : null}>
                        Today
                    </a>
                </ListClickArea>
                <ListClickArea>
                    <a href='#' class={nowTab === 'bookmark' ? 'active' : null}>
                        북마크
                        {nowTab === 'bookmark' ?
                            <img class="BookMarker" src={BookMarkerAcive} /> :
                            <img class="BookMarker" src={BookMarker} />}
                    </a>
                </ListClickArea>
            </FlexWarp>
        </Container>
    );
};

export default Gnb;