import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
// img
import ImgHeaderLogo from '../assets/img/logo_img_header.png';
import ImgHeaderX from '../assets/img/icon_close.png';
import ImgTwitterLogo from '../assets/img/icon_twitter_header.png';
import ImgLogin from '../assets/img/icon_login.png';
import LoginModal from './popup/LoginModal';
import LogoutModal from './popup/LogoutModal';
import { useRecoilState } from 'recoil';
import { IsLogin } from '../atom/atoms';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 1;
  background-color: var(--background-color);
  padding: 0 48px 0 48px;
  width: 100%;
  @media screen and (max-width: 850px) {
    padding: 0 15px 0 15px;
  }
`;
const HeaderImgWrap = styled.div`
  display: table-cell;
  width: 50%;
  vertical-align: middle;

  & > img {
    display: table-cell;
  }
`;
const LoginWrap = styled.div`
  display: table-cell;
  width: 50%;
  text-align: right;
  vertical-align: middle;
  position: relative;
`;
const LoginBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  margin-right: -10px;
  cursor: pointer;
  & > img {
    display: block;
  }

  & > div {
    display: flex;
    & > span {
      margin-left: 10px;
    }
  }
`;
const LogoutBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  padding: 10px;
  background: linear-gradient(180deg, #62ff5f 0%, rgba(96, 70, 255, 0) 100%);
  border-radius: 30px;
  margin-left: 16px;
  cursor: pointer;
  & img {
    margin: 0 auto;
  }
`;

const FlexWarp = styled.div`
  display: flex;
  align-items: center;

  & a {
    display: flex;
  align-items: center;
  }
  & a > img {
    display: block;
  }
  & a > .ImgHeaderLogo {
    margin-left: -10px;
  }
  & a > .ImgHeaderX {
    margin-left: 8px;
  }
  & a > .ImgTwitterLogo {
    margin-left: 20px;
  }
  @media screen and (max-width: 850px) {
    & span {
      display: none;
    }
  }
`;
const UserSpan = styled.span`
  display: inline-block;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const Header = ({ forceUpdate }) => {
  //기본 설정
  // userName = '가나다'
  // isLogin = false

  const [isLoginModal, setIsLoginModal] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);
  const [userName, setUserName] = useState('가나다');

  useEffect(() => {
    setModalOpen(!modalOpen);
  }, [isLogin]);

  //로그인 되어있을 시 LogoutModal 로그아웃 되어있을 시 LoginModal
  const LoginModalClick = () => {
    isLogin
      ? setIsLoginModal(
        <LogoutModal setModalOpen={setModalOpen} setIsLogin={setIsLogin} />
      )
      : setIsLoginModal(
        <LoginModal
          setModalOpen={setModalOpen}
          setIsLogin={setIsLogin}
          setUserName={setUserName}
        />
      );

    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <HeaderImgWrap>
        <FlexWarp>
          <Link to='/' onClick={forceUpdate} >
            <img className='ImgHeaderLogo' src={ImgHeaderLogo} />
            <img className='ImgHeaderX' src={ImgHeaderX} />
            <img className='ImgTwitterLogo' src={ImgTwitterLogo} />
          </Link>

        </FlexWarp>
      </HeaderImgWrap>
      <LoginWrap>
        {isLogin ? (
          <>
            <UserSpan>{userName}님</UserSpan>
            <LogoutBtn onClick={LoginModalClick}>
              <FlexWarp>
                <img src={ImgLogin}></img>
              </FlexWarp>
            </LogoutBtn>
          </>
        ) : (
          <>
            <LoginBtn>
              <FlexWarp onClick={LoginModalClick}>
                <img src={ImgLogin}></img>
                <span>로그인</span>
              </FlexWarp>
            </LoginBtn>
          </>
        )}
        {modalOpen ? isLoginModal : null}
      </LoginWrap>
    </Container>
  );
};

export default Header;
