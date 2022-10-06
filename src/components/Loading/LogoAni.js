import React from 'react';
import styled, { keyframes } from 'styled-components';

import LogoImg from '../../assets/img/logo_img_header.png'
import XImg from '../../assets/img/icon_close.png'
import TwitterImg from '../../assets/img/icon_twitter_header.png'

const LogoFadein = keyframes`
0% {
    left:110%;
    opacity: 0;
  }
  100% {
    left:0%;
    opacity: 1;
  }
`

const XIconFadein = keyframes`
0% {
    left:150%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
  `

const TwitterFadein = keyframes`
0% {
    left:100%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
`

const LogoWarp = styled.div`
width: 130px;
height: 80px;
position: absolute;
top: 200px;
right: calc(50% + 20px);
overflow: hidden;

 & img {
    position: absolute;
    top: 0;
    left: 100%;
    animation: ${LogoFadein} 1s forwards;
    opacity: 0;

}
`
const XWrap = styled.div`
position: absolute;
top: 240px;
left: 50%;
transform: translate(-50%, -50%);
width: 10px;
height: 10px;
overflow: hidden;
& img {
    position: absolute;
    top: 0;
    opacity: 0;
    animation: ${XIconFadein} 1s forwards 0.2s;
}
`

const TwitterImgWarp = styled.div`
position: absolute;
top: 230px;
width: 30px;
height: 25px;
left: calc(50% + 40px);
transform: translate(0 - 200%);
overflow: hidden;
& img {
    position: absolute;
    opacity: 0;
    top: 0;
    right: 0;
    animation: ${TwitterFadein} 1s forwards 0.5s;
}


`


const LogoAni = () => {
    return (
        <>
            <LogoWarp>
                <img src={LogoImg} />
            </LogoWarp>
            <XWrap>
                <img src={XImg} />
            </XWrap>

            <TwitterImgWarp>
                <img src={TwitterImg} />
            </TwitterImgWarp>

        </>
    );
};

export default LogoAni;