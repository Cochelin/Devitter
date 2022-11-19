import React from 'react';
import styled from 'styled-components';
import iconClose from '../../assets/img/icon_close.png'

import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
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
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    & p {
        width: 100%;
        font-size: 15px;
        line-height: 1.5;
        padding : 15px 0;
        font-weight: 400;
    }
    & img {margin-right: 10px;}
    &:last-child {
        border-bottom:none;
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
`

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const LogoutModal = ({ setModalOpen, setIsLogin }) => {
    const navigate = useNavigate()

    const onGoogleLogoutSuccess = (res) => {
        setIsLogin(false);
        // alert('성공적으로 로그아웃되었습니다');
        sessionStorage.clear();
        navigate('/')

    }
    return (
        <ModalWrap>
            <Close onClick={() => setModalOpen(false)} ><img src={iconClose} alt='close Button' /></Close>
            <LoginWrap>
                <GoogleLogout
                    client_id={CLIENT_ID}
                    buttonText='로그아웃'
                    onLogoutSuccess={onGoogleLogoutSuccess}
                />

            </LoginWrap>
        </ModalWrap>
    );
}

export default LogoutModal;