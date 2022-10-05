import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BookmarkEmpty } from './../assets/img/bookMarker_empty.svg';
import { ReactComponent as LinkIcon } from './../assets/img/link_icon.svg';
import { ReactComponent as HeartIcon } from './../assets/img/heart_icon.svg';
import { ReactComponent as RetweetIcon } from './../assets/img/retweet_icon.svg';

// 스타일 컴포넌트와 본문을 분리할까? > 회의 때 정하기

const Box = styled.div`
  margin: 20px;
  min-width: 350px;
  max-width: 350px;
  height: max-content;
  border-radius: 24px;
  padding: 13px;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Profile = styled.img`
  margin: 0 20px 0 3px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin: 2px 2px 0 0;
`;

const Contents = styled.div`
  margin: 16px 0 9px 7px;
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

export const Twit = ({ profile, name, id, contents }) => {
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
  return (
    <Box>
      <Header>
        <Profile src={profile} />
        <NameSpace>
          <span className='name'>{name}</span>
          <span className='id'>@{id}</span>
        </NameSpace>
        <BookMarkContianer>
          <BookmarkEmpty />
        </BookMarkContianer>
      </Header>
      <Contents>{contents}</Contents>
      <Bottom>
        <IconContainer>
          <LinkIcon />
        </IconContainer>
        <IconContainer>
          <RetweetIcon />
          <Number>24</Number>
        </IconContainer>
        <IconContainer>
          <HeartIcon />
          <Number>524</Number>
        </IconContainer>
      </Bottom>
    </Box>
  );
};
