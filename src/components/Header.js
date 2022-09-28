import React from 'react';
import styled from "styled-components";

// img
import ImgHeaderLogo from '../assets/img/logo_img_header.png'
import ImgHeaderX from '../assets/img/icon_close.png'
import ImgTwitterLogo from '../assets/img/icon_twitter_header.png'
import ImgLogin from '../assets/img/icon_login.png'

const Container = styled.div`
    display: table;

    box-sizing : border-box;
    padding : 0 15px 0 15px;
    width : 100%;

`
const HeaderImgWrap = styled.div`
display:table-cell;
width:50%;
vertical-align:middle; 

& > img {
    display:table-cell;
}
`
const LoginWrap = styled.div`
display:table-cell;
widht:50%;
text-align:right;
vertical-align:middle; 
`
const LoginBtn = styled.button`
border:none;
background-color:transparent;
padding: 10px;
margin-right:-10px;
cursor:pointer;
& > img{
    display:block;
}

& > div {
    display :flex;
    & > span {
        margin-left:10px
    }
}
`
const FlexWarp = styled.div`
display:flex;
align-items:center;

& > img {
    display:block;
}
& > .ImgHeaderLogo {
    margin-left: -10px
}
& > .ImgHeaderX{
    margin-left:8px
}
& > .ImgTwitterLogo {
    margin-left:20px
}
`
const Header = () => {
    return (
        <Container>
            <HeaderImgWrap>
                <FlexWarp>
                    <img className='ImgHeaderLogo' src={ImgHeaderLogo} />
                    <img className='ImgHeaderX' src={ImgHeaderX} />
                    <img className='ImgTwitterLogo' src={ImgTwitterLogo} />
                </FlexWarp>

            </HeaderImgWrap>
            <LoginWrap>

                <LoginBtn>
                    <FlexWarp>
                        <img src={ImgLogin}></img>
                        <span>로그인</span>
                    </FlexWarp>

                </LoginBtn>
            </LoginWrap>

        </Container>
    );
};

export default Header;