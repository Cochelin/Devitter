import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login'
import iconClose from '../../assets/img/icon_close.png'
import iconTwitter from '../../assets/img/icon_twitter.png'
import iconGithub from '../../assets/img/icon-github.png'
import iconGoogle from '../../assets/img/icon_google.png'
import NaverLogin from '../Login/NaverLogin';
import NaverLogout from '../Login/NaverLogout';

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

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
let data = '';
const LoginModal = ({ setModalOpen, setIsLogin, setUserName }) => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'profile'
            })
        }
        gapi.load('client:auth2', start)
    });
    if (gapi.auth) {
        // 토큰 저장
        let googleAccessToken = gapi.auth.getToken().access_token;
        sessionStorage.setItem('google_access_token', googleAccessToken);
        // console.log(sessionStorage.getItem('google_access_token'));
    }

    const onGoogleLoginSuccess = (res) => {
        let name = res.profileObj.name;
        // alert(`로그인되었습니다. ${name}님 안녕하세요.`);
        //isLogin 상태 변경
        setIsLogin(true);
        setUserName(name);
    }

    const onGoogleLogInFailure = (res) => {
        alert('로그인 실패:', res)
    }


    return (
        <ModalWrap>
            <Close onClick={() => setModalOpen(false)} ><img src={iconClose} alt='close Button' /></Close>

            {/*
            <LoginWrap>
                <TwitterImg src={iconTwitter} />
                <p>트위터 로그인</p>
            </LoginWrap>

            <LoginWrap >
                <div id="naver_id_login"><NaverLogin /></div>

                <NaverLogout />
                <GithubImg id="naverIdLogin" src={iconGithub} />
                <p>네이버 로그인</p>
            </LoginWrap>
            */}


            <LoginWrap type='button'>

                <GoogleLogin
                    client_id={CLIENT_ID}
                    buttonText='로그인'
                    onSuccess={onGoogleLoginSuccess}
                    onFailure={onGoogleLogInFailure}
                    cookiePolicy={'single_host_orgin'}
                    isSignedIn={true}
                />

                {/* <GoogleImg src={iconGoogle} />
                <p>구글 로그인</p> */}
            </LoginWrap>
        </ModalWrap>
    );
};

export default LoginModal;