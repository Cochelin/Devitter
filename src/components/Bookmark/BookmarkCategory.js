import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import SettingIcon from '../../assets/img/icon_setting.png'
import { BookmarkSettingToggle } from '../../atom/atoms';
import BookmarkList from './BookmarkList';
const BookMarkCategory = styled.div`
z-index: 11;
position: fixed;
top: 142px;
left: 0;
    min-width: 280px;
    padding:48px;
& button {
    cursor: pointer;
background-color: transparent;
border: 1px solid var(--point-green-color);
padding: 4px 8px;
margin-top: 10px;
border-radius: 3px;
}


& button.deleteBtn{
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
}



`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 22px 0 ;
border-bottom: 1px solid var(--dark-gray-color);

& p {
    font-weight: 700;
    font-size: 16px;
}
& button {
    cursor: pointer;
    background-color: transparent;
    border: none;
}

`
const Upgrade = styled.div`
& a{
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
    margin-top: 40px;
    color: var(--point-green-color);
}
`

const BookmarkCategory = () => {
    const [bookmarkSettingToggle, setBookmarkSettingToggle] = useRecoilState(BookmarkSettingToggle)

    const onClickFunc = () => {
        setBookmarkSettingToggle(!bookmarkSettingToggle)
    }
    return (
        <BookMarkCategory>
            <Header>
                <p>북마크</p>
                {
                    bookmarkSettingToggle ? <button onClick={onClickFunc}>수정 취소</button> : <button onClick={onClickFunc}> <img src={SettingIcon} /></button>
                }



            </Header>

            <BookmarkList />

            <Upgrade><Link to='upgrade'>요금제 업그레이드</Link></Upgrade>
        </BookMarkCategory>
    );
};

export default BookmarkCategory;