import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import iconClose from '../../assets/img/icon_close.png';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NowUserName, UserName } from '../../atom/atoms';
const ModalWrap = styled.div`
  width: 220px;
  padding: 18px;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
`;
const Close = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;
const LoginWrap = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--dark-gray-color);
  width: 100%;
  cursor: pointer;
  & p {
    width: 100%;
    text-align: left;
    font-size: 15px;
    line-height: 1.5;
    padding: 15px 0;
    font-weight: 400;
  }
  & img {
    margin-right: 10px;
  }
  &:last-child {
    border-bottom: none;
  }
  & button {
        box-shadow: none !important;
        width: 100% !important;
    }
    & button div {
        display: flex;
        align-items: center;
    }
    & button div svg {
        transform: scale(0.8);
    }
    & button span {
        width: 100% !important;
        font-size: 13px !important;
        font-weight: 400!important;
        text-align: left !important;
        font-family: "IBMPlexSansKR-Medium", Arial, Helvetica, sans-serif !important;
    }
`;
const TwitterImg = styled.img`
  width: 14px;
`;
const GithubImg = styled.img`
  width: 16px;
`;
const GoogleImg = styled.img`
  width: 16px;
`;

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
let data = '';
const LoginModal = ({ setModalOpen, setIsLogin, setUserName, setUserImage }) => {
  const userName = useRecoilValue(UserName)
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'profile',
      });
    }
    gapi.load('client:auth2', start);
  });


  const onGoogleLoginSuccess = (res) => {
    if (gapi.auth) {
      let googleAccessToken = gapi.auth.getToken().access_token;
      sessionStorage.setItem('access_token', googleAccessToken);// 토큰 저장
      sessionStorage.setItem('email', res.profileObj.email);// 이메일 저장


      // DB에 post
      axios.post('http://175.106.96.145:5000/user/create', {
        name: res.profileObj.name,
        email: res.profileObj.email,
        profile: res.profileObj.imageUrl,
        nickname: res.profileObj.name, // 필요없을듯
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });

      let name = res.profileObj.name;
      console.log(res.profileObj)
      setIsLogin(true);
      setUserName(name);
      setUserImage(res.profileObj.imageUrl); // 프로필 이미지 설정
    }
  };

  const [userData, setUserData] = useState([])
  const [nowUserId, setNowUserId] = useRecoilState(NowUserName)
  useEffect(() => {
    if (userName) {
      axios.get('http://175.106.96.145:5000/user/get',)
        .then(function (response) {
          setUserData(response.data)
          setNowUserId(response.data.filter(el => el.name === userName).pop().id)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    console.log('유저이름222', userName)


  }, [userName])
  console.log('nowUserId', nowUserId)

  // useEffect(() => {
  //   console.log('유저이름', userName)
  //   if (userData) {
  //     const data = userData
  //     console.log('유저데이터', userData)
  //     // setNowUserName(data.id)
  //   }

  // }, [userData])
  const onGoogleLogInFailure = (res) => {
    alert('로그인을 다시 진행해주세요:', res);
  };

  return (
    <ModalWrap>
      <Close onClick={() => setModalOpen(false)}>
        <img src={iconClose} alt='close Button' />
      </Close>

      <LoginWrap type='button'>
        <GoogleLogin
          client_id={CLIENT_ID}
          buttonText='로그인'
          onSuccess={onGoogleLoginSuccess}
          onFailure={onGoogleLogInFailure}
          cookiePolicy={'single_host_orgin'}
          isSignedIn={true}
        />
      </LoginWrap>
    </ModalWrap>
  );
};

export default LoginModal;
