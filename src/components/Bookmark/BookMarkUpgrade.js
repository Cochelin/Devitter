import React from 'react';
import styled from 'styled-components';
import CircleImg from './../../assets/img/circle_user.png'
import CheckImg from './../../assets/img/icon_check_green.png'
const Wrap = styled.div`
width: 100%;
padding: 65px 100px;
padding-left: 320px;
`
const Head = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 43px;
`
const WrapList = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const UpgradeList = styled.ul`
position: relative;
width: 33%;
margin-right: 50px;
height: 580px;
padding: 20px 40px;
border-radius: 24px;
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
& :last-child {
    margin-right: 0;
}
`
const Top = styled.p`
font-size: 15px;
font-weight: 700;

& span{
    font-weight: 400;
    font-size: 13px;
    margin-left: 17px;
}
margin-bottom: 36px;
`
const ImgWarp = styled.div`
font-size: 15px;
display: flex;
align-items: center;
& img{
    margin-right: 18px;
}
& span{
    margin-left: 12px;
    border-right: 12px solid white;
    font-size: 36px;
font-weight: 500;
}
margin-bottom: 32px;
`
const List = styled.li`
height: 53px;
display: flex;
font-size: 15px;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #DADADA;

& :last-child{
    border: none;
}
`
const Button = styled.button`
width: calc(100% - 80px);
position: absolute;
bottom: 20px;
left: 40px;
height: 60px;
font-size: 16px;
font-weight: 700;
background: #EEEEEE;
border-radius: 10px;
border: none;
cursor: pointer;
&.use{
    border: 3px solid var(--point-green-color);
    background-color: white;
    color: var(--point-green-color);
}
`
const BookMarkUpgrade = () => {
    return (
        <Wrap>
            <Head>요금제 업그레이드</Head>


            <WrapList>
                <UpgradeList>
                    <Top>basic <span>For Free</span></Top>
                    <ImgWarp> <img src={CircleImg} alt='img' /><span>0$</span></ImgWarp>

                    <List>
                        북마크 5개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <List>
                        서브 북마크 5개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <Button className=''>현재 사용중</Button>
                </UpgradeList>
                <UpgradeList>
                    <Top>basic <span>For Free</span></Top>
                    <ImgWarp> <img src={CircleImg} alt='img' /><span>2$</span>for  Month</ImgWarp>

                    <List>
                        북마크 10개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <List>
                        서브 북마크 10개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <List>
                        사진 데이터 베이스 3GB <img src={CheckImg} alt='check' />
                    </List>
                    <List>
                        외부 트윗 추가 기능<img src={CheckImg} alt='check' />
                    </List>
                    <Button className='use'>이용하기</Button>
                </UpgradeList>
                <UpgradeList>
                    <Top>basic <span>For Free</span></Top>
                    <ImgWarp> <img src={CircleImg} alt='img' /><span>3$</span>for  Month</ImgWarp>

                    <List>
                        북마크 20개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <List>
                        서브 북마크 20개 제공 <img src={CheckImg} alt='check' />
                    </List>

                    <List>
                        사진 데이터 베이스 6GB<img src={CheckImg} alt='check' />
                    </List>
                    <List>
                        외부 트윗 추가 기능<img src={CheckImg} alt='check' />
                    </List>
                    <Button className='use'>이용하기</Button>
                </UpgradeList>

            </WrapList>


        </Wrap>
    );
};

export default BookMarkUpgrade;