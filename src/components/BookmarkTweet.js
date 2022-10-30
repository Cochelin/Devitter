import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Styled from './Tweet.style'
import { confirm } from './popup/confirm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Floating from './popup/Floating';

import { ReactComponent as BookmarkEmpty } from './../assets/img/bookMarker_empty.svg';
import { ReactComponent as LinkIcon } from './../assets/img/link_icon.svg';
import { ReactComponent as HeartIcon } from './../assets/img/heart_icon.svg';
import { ReactComponent as RetweetIcon } from './../assets/img/retweet_icon.svg';
const BookMarkCompo = styled.div`
   
    margin: 20px;
    margin-bottom: 10px;
/* width: 300px; */
max-width: 100%;
grid-column-end: span 6;
height: max-content;
border-radius: 24px;
padding: 13px;
box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
`


const BookmarkTweet = ({ profile, name, id, contents, link, retweet, likes }) => {

    // profile = 'black'
    // name = '이름이름'
    // id = 'idid'
    // contents = '트윗컴포넌트 연습용입니다.트윗컴포넌트 연습용입니다.트윗컴포넌트 연습용입니다.트윗컴포넌트 연습용입니다.'
    // retweet = 25
    // likes = 25


    const [copy, setCopy] = useState(false);
    useEffect(() => {
        if (copy) {
            setTimeout(() => {
                setCopy(false);
            }, 2000);
        }
    }, [copy]);

    return (
        <BookMarkCompo>
            <Styled.Header>
                <Styled.Profile background={profile} />
                <Styled.NameSpace>
                    <span className='name'>{name}</span>
                    <span className='id'>@{id}</span>
                </Styled.NameSpace>
                <Styled.BookMarkContianer
                    onClick={() =>
                        confirm('로그인 후 이용 가능합니다.', '로그인하기', '취소')
                    }
                >
                    <BookmarkEmpty />
                </Styled.BookMarkContianer>

            </Styled.Header>

            <CopyToClipboard
                text={contents}
                onCopy={() => {
                    setCopy(true);
                }}
            >
                <Styled.Contents>{contents}</Styled.Contents>
            </CopyToClipboard>
            <Styled.Bottom>
                <Styled.IconContainer>
                    <Styled.LinkIconA href={link} target='_blank' rel='noopener noreferrer'>
                        <LinkIcon />
                    </Styled.LinkIconA>
                </Styled.IconContainer>
                <Styled.IconContainer>
                    <RetweetIcon />
                    <Styled.Number>{retweet}</Styled.Number>
                </Styled.IconContainer>
                <Styled.IconContainer>
                    <HeartIcon />
                    <Styled.Number>{likes}</Styled.Number>
                </Styled.IconContainer>
            </Styled.Bottom>
            {copy ? <Floating /> : <></>}


        </BookMarkCompo>
    );
};

export default BookmarkTweet;