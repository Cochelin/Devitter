import Category from './../components/Category/Category';
import { Twit } from './../components/Twit';
import testImg from './../assets/img/bookMarker_empty.svg';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin: 40px 0 0 32px;
  .route {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
  }
  .category {
    font-weight: 700;
    font-size: 16px;
    line-height: 33px;
  }
`;

const TwitContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Section>
      <Category />
      <Article>
        <ArticleInfo>
          <div className='route'>전체/ 취업</div>
          <div className='category'>취업</div>
        </ArticleInfo>
        <TwitContainer>
          <Twit
            profile={testImg}
            name='TestUser'
            id='73571D'
            contents='트윗 컴포넌트 테스트합니다'
          />
          <Twit
            profile={testImg}
            name='TestUser'
            id='73571D'
            contents='트윗 컴포넌트 테스트합니다'
          />
          <Twit
            profile={testImg}
            name='TestUser'
            id='73571D'
            contents='트윗 컴포넌트 테스트합니다'
          />
          <Twit
            profile={testImg}
            name='TestUser'
            id='73571D'
            contents='트윗 컴포넌트 테스트합니다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ'
          />
        </TwitContainer>
      </Article>
    </Section>
  );
};

export default Home;
