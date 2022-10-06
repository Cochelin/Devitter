import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import LogoAni from './LogoAni';
import Background2 from '../../assets/img/background/003.png'
import { disableScroll, enableScroll } from './stopScroll'


const LoadingFadeOut = keyframes`
0% {
    transform: translateY(-10vh);
    opacity: 1;
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    border-radius: 0;
  }
  80%{
    opacity: 1;
   
  }
  100% {
    transform: translateY(-120vh);
    opacity: 1;
    border-radius: 50%;
  }
  `

const FullPage = styled.div`
    z-index: 99999;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    background-image: url('${Background2}');
    background-position: 50% 50%;
    background-repeat : no-repeat;
    background-size :cover;
    height: 120vh;
    transform: translateY(-10vh);
    overflow: hidden;
    animation: ${LoadingFadeOut} 0.8s ease-in-out 3s forwards;
`
const LoadingPage = () => {

    useEffect(() => {
        // modal이 떠 있을 땐 스크롤 막음
        disableScroll();
        setTimeout(() => enableScroll(), 3000);

    }, []);
    return (
        <FullPage >
            <LogoAni />

        </FullPage>
    );
};

export default LoadingPage;