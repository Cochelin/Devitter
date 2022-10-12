import Category from './../components/Category/Category';
import { Twit } from './../components/Twit';
import testImg from './../assets/img/bookMarker_empty.svg';
import styled from 'styled-components';
import { javascriptData } from '../static/dummyData';
const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
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
  const random_rgba = (num) => {
    var o = Math.round, r = Math.random, s = 255, l = 100;
    return num === 1 ? 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')' : 'rgba(' + o(r() * (s)) + ',' + o(r() * (s - l)) + l + ',' + o(r() * (s)) + ',' + 0.3 + ')';
  }
  const gradientMap = () => {
    const gradientarr = []
    const gradient = `linear-gradient(180deg, ${random_rgba(1)} 0%, ${random_rgba(2)} 100%);`
    for (let j = 0; j < javascriptData[0].length; j++) {
      gradientarr.push(gradient)
    }
    return gradientarr
  }
  return (
    <Section>
      <Category />
      <Article>
        <ArticleInfo>
          <div className='route'>전체/ 취업</div>
          <div className='category'>취업</div>
        </ArticleInfo>
        <TwitContainer>
          {
            javascriptData[0].map((tweet, idx) => {
              return (
                <Twit
                  profile={gradientMap()[idx]}
                  name={tweet.value3}
                  key={tweet.value1}
                  link={tweet.value1}
                  id={tweet.value3}
                  contents={tweet.value5}
                  retweet={tweet.value6}
                  likes={tweet.value7}
                />
              )
            })
          }
        </TwitContainer>
      </Article>
    </Section>
  );
};

export default Home;
