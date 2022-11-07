import React, { useEffect, useRef } from 'react';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IsLogin } from '../atom/atoms';
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
    const isLogin = useRecoilValue(IsLogin)
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (!isLogin) {
            alert('로그인 후 이용해주세요.');
            navigate('/', { state: pathname });
        }
    }, [])

    return (
        <Container>
            <BookmarkList />
            <Outlet />
        </Container>

    );
};

export default Bookmark;