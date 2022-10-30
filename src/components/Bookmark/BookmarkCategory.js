import React from 'react';
import styled from 'styled-components';
import SettingIcon from '../../assets/img/icon_setting.png'
import BookmarkList from './BookmarkList';
const BookMarkCategory = styled.div`
    min-width: 280px;
    padding:48px;


`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 22px 0;
& p {
    font-weight: 700;
}

`

const BookmarkCategory = () => {
    return (
        <BookMarkCategory>
            <Header>
                <p>북마크</p>
                <button> <img src={SettingIcon} /></button>


            </Header>

            <BookmarkList />

        </BookMarkCategory>
    );
};

export default BookmarkCategory;