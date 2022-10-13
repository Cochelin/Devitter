import React from 'react';
import styled from 'styled-components';
import iconClose from '../../assets/img/icon_close.png'
import iconTwitter from '../../assets/img/icon_twitter.png'
import iconGithub from '../../assets/img/icon-github.png'
import iconGoogle from '../../assets/img/icon_google.png'
const ModalWrap = styled.div`
    width: 220px;
    padding: 18px;
    position: absolute;
    top : 100%;
    right: 0;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);

`
const Close = styled.div`
    display: flex;
    justify-content: end;
    cursor: pointer;
`
const LoginWrap = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var( --dark-gray-color);
    width: 100%;
    cursor: pointer;
    & p {
        width: 100%;
        text-align: left;
        font-size: 15px;
        line-height: 1.5;
        padding : 15px 0;
        font-weight: 400;
    }
    & img {margin-right: 10px;}
    &:last-child {
        border-bottom:none;
    }
`
const TwitterImg = styled.img`
    width: 14px;
`
const GithubImg = styled.img`
width: 16px;
`
const GoogleImg = styled.img`
width: 16px;
`
const LoginModal = ({ setModalOpen }) => {
    return (
        <ModalWrap>
            <Close onClick={() => setModalOpen(false)} ><img src={iconClose} alt='close Button' /></Close>
            <LoginWrap>
                <TwitterImg src={iconTwitter} />
                <p>트위터 로그인</p>
            </LoginWrap>
            <LoginWrap>
                <GithubImg src={iconGithub} />
                <p>깃허브 로그인</p>
            </LoginWrap>
            <LoginWrap>
                <GoogleImg src={iconGoogle} />
                <p>구글 로그인</p>
            </LoginWrap>
        </ModalWrap>
    );
};

export default LoginModal;