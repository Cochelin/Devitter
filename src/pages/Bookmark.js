import React, { useEffect, useRef } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BookmarkList from '../components/Bookmark/BookmarkCategory';
import BookMarkContainer from '../components/BookMarkContainer';
import BookmarkTweet from './../components/BookmarkTweet';
import './../style/common.css';
import * as Styled from './Home.style'


const Container = styled.div`
padding-top: 142px; 
width: 100%;
display: flex;
font-family: "IBMPlexSansKR-Medium", Arial, Helvetica, sans-serif;
`

const Bookmark = () => {

    return (
        <Container>

            <BookmarkList />
            <Outlet />

        </Container>

    );
};

export default Bookmark;