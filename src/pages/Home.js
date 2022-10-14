import Category from './../components/Category/Category';
import { Twit } from './../components/Twit';
import styled from 'styled-components';
import { javascriptData, reactData, vueData, cssData, cssDataEng, htmlData, htmlDataEng, springData, javaData, pythonData } from '../static/dummyData';
import { useEffect, useRef, useState } from 'react';
const Section = styled.section`
  display: flex;
  padding-top: 142px;
  flex-direction: row;
`;

const Article = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left:280px;
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
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(125px,1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 200;
`;

const Home = () => {


  //dummy
  let javascriptDummy = javascriptData.filter(el => el.value6 > 20 || el.value7 > 80)
  let reactDummy = reactData.filter(el => el.value6 > 20 || el.value7 > 80)
  let vueDummy = vueData.filter(el => el.value6 > 20 || el.value7 > 80)
  let cssEngData = cssDataEng.filter(el => el.value6 > 20 || el.value7 > 80)
  let cssDummy = [...cssData.filter(el => el.value6 > 20 || el.value7 > 80), ...cssEngData]
  let htmlEngData = htmlDataEng.filter(el => el.value6 > 20 || el.value7 > 80)
  let htmlAndCssDummy = [...htmlData.filter(el => el.value6 > 20 || el.value7 > 80), ...htmlEngData, ...cssDummy]
  let springDummy = springData.filter(el => el.value6 > 20 || el.value7 > 80)
  let javaDummy = javaData.filter(el => el.value6 > 20 || el.value7 > 80)
  let pythonDummy = pythonData.filter(el => el.value6 > 20 || el.value7 > 80)
  const FilterString = () => {
    const badWords = ['지랄', '시발', '씨발', '존나', '미쳐', '미친', '미쳤', '개새', 'fuck', '。']
    for (let i = 0; i < badWords.length; i++) {
      javascriptDummy = javascriptDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
      reactDummy = reactDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
      htmlAndCssDummy = htmlAndCssDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
      springDummy = springDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
      javaDummy = javaDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
      pythonDummy = pythonDummy.filter(el => el.value5.indexOf(badWords[i]) === -1)
    }

  }
  FilterString()
  const allDummy = [...javascriptDummy, ...reactDummy, ...vueDummy, ...htmlAndCssDummy, ...springDummy, ...javaDummy, ...pythonDummy]
  const descAllDummy = [...allDummy].sort((a, b) => b.value6 - a.value6)

  // 내림차순 정렬
  // const LikesDesc = () => {
  //   allDummy = allDummy.sort((a,b) => b.value7 - a.value7)
  // }

  // 날짜별 정렬 (완료안됨)
  const TodayDummy = [...allDummy].sort((a, b) => b.value9 - a.value9)


  //category 클릭시 useState update
  const [nowCategory, setNowCategory] = useState(descAllDummy)


  //profile img
  const random_rgba = (num) => {
    var o = Math.round,
      r = Math.random,
      s = 255,
      l = 100;
    return num === 1
      ? 'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      1 +
      ')'
      : 'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * (s - l)) +
      l +
      ',' +
      o(r() * s) +
      ',' +
      0.3 +
      ')';
  };
  const gradientMap = () => {
    const gradientarr = []
    const gradient = `linear-gradient(180deg, ${random_rgba(1)} 0%, ${random_rgba(2)} 100%);`
    for (let j = 0; j < nowCategory.length; j++) {
      gradientarr.push(gradient)
    }
    return gradientarr
  }

  const twitContainer = useRef()

  useEffect(() => {
    function resizeGridItem(item) {
      let rowGap = 20;

      let rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / rowGap);
      item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems() {
      let allItems = twitContainer.current.children;
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    }

    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

  })



  return (
    <Section>
      <Category nowCategory={nowCategory} setNowCategory={setNowCategory} />
      <Article>
        <ArticleInfo>
          <div className='route'>전체/ 취업</div>
          <div className='category'>취업</div>
        </ArticleInfo>
        <TwitContainer ref={twitContainer}>
          {
            nowCategory.map((tweet, idx) => {
              return (
                <Twit
                  profile={gradientMap()[idx]}
                  name={tweet.value3}
                  key={idx}
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
