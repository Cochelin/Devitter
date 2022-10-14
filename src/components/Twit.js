import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as BookmarkEmpty } from './../assets/img/bookMarker_empty.svg';
import { ReactComponent as LinkIcon } from './../assets/img/link_icon.svg';
import { ReactComponent as HeartIcon } from './../assets/img/heart_icon.svg';
import { ReactComponent as RetweetIcon } from './../assets/img/retweet_icon.svg';

import { confirm } from './../components/popup/confirm';

// 스타일 컴포넌트와 본문을 분리할까? > 회의 때 정하기

const Box = styled.div`
  margin: 20px;
  min-width: 350px;
  max-width: 350px;
  grid-column-end: span 3;
  height: max-content;
  border-radius: 24px;
  padding: 13px;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Profile = styled.div`
  margin: 0 20px 0 3px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  .name {
    font-size: 15px;
    font-weight: 500;
    line-height: 22.5px;
  }
  .id {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`;

const BookMarkContianer = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 40px;
  margin: 2px 2px 0 0;
`;

const Contents = styled.div`
  margin: 16px 0 9px 7px;
  line-height: 150%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 14px;
`;

const Number = styled.span`
  margin: 0 0 1.5px 4.5px;
  font-size: 11px;
`;

const LinkIconA = styled.a`
  display: block;
  height: 13px;
  width: 13px;
  background-position: 100% 100%;
  background-repeat: no-repeat;
`;

export const Twit = ({ profile, name, id, contents, retweet, likes, link }) => {
  // 컴포넌트 사용 예제
  // profile은 img src에 들어갈 내용이며, 추후 api 문서 업데이트 시 수정될 예정입니다.
  // -------------------
  // <Twit
  //   profile={testImg}
  //   name="TestUser"
  //   id="73571D"
  //   contents="트윗 컴포넌트 테스트합니다"
  // />
  // -------------------

  //미완성 http 가 있으면 slice 후 a 태그로 감싸고 싶음
  // link 생성은 완료했는데 앞  string 하고 합치면 [object Object] 로 변경되는 현상 발생
  // const contentLink = () => {
  //   if (contents.indexOf('http') !== -1) {
  //     let topContents = contents.slice(0, contents.indexOf('http'));
  //     let linkContent = contents.slice(contents.indexOf('http'));
  //     if (linkContent.indexOf(' ') !== -1) {
  //       linkContent = linkContent.slice(0, linkContent.indexOf(' '));
  //       let lastConents = linkContent.slice(linkContent.indexOf(' ') - 1);
  //       let linkContentLink = { __html: linkContent };
  //       return (contents = (
  //         <>
  //           {topContents}
  //           <a
  //             href={linkContent}
  //             target='_blank'
  //             rel='noopener noreferrer'
  //             dangerouslySetInnerHTML={linkContentLink}
  //           />
  //           {lastConents}
  //         </>
  //       ));
  //     } else {
  //       let linkContentLink = { __html: linkContent };
  //       return (contents = (
  //         <>
  //           {topContents}
  //           <a
  //             href={linkContent}
  //             target='_blank'
  //             rel='noopener noreferrer'
  //             dangerouslySetInnerHTML={linkContentLink}
  //           />
  //         </>
  //       ));
  //     }
  //   }
  // };

  // const urlRegex = /(https?:\/\/[^\s]+)/g;
  // contents = contents.replace(urlRegex, (url) => {
  //   return (
  //     <Link href={url} target='_blank' rel='noopener noreferrer'>
  //       {url}
  //     </Link>
  //   );
  // });
  // console.log('1', contents);

  return (
    <Box>
      <Header>
        <Profile background={profile} />
        <NameSpace>
          <span className='name'>{name}</span>
          <span className='id'>@{id}</span>
        </NameSpace>
        <BookMarkContianer
          onClick={() =>
            confirm('로그인 후 이용 가능합니다.', '로그인하기', '취소')
          }
        >
          <BookmarkEmpty />
        </BookMarkContianer>
      </Header>
      <Contents>{contents}</Contents>
      <Bottom>
        <IconContainer>
          <LinkIconA href={link} target='_blank' rel='noopener noreferrer'>
            <LinkIcon />
          </LinkIconA>
        </IconContainer>
        <IconContainer>
          <RetweetIcon />
          <Number>{retweet}</Number>
        </IconContainer>
        <IconContainer>
          <HeartIcon />
          <Number>{likes}</Number>
        </IconContainer>
      </Bottom>
    </Box>
  );
};
