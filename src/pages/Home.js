import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as Styled from './Home.style'
import { descAllDummy, javascriptDummy, reactDummy, vueDummy, htmlAndCssDummy, springDummy, javaDummy, pythonDummy } from './filterData'


import Category from './../components/Category/Category';
import { Tweet } from './../components/Tweet';


const Home = () => {


  //category 클릭시 useState update
  const [nowData, setNowData] = useState(descAllDummy);
  const [nowCategory, setNowCategory] = useState('인기트윗');

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
    const gradientarr = [];
    const gradient = `linear-gradient(180deg, ${random_rgba(
      1
    )} 0%, ${random_rgba(2)} 100%);`;
    for (let j = 0; j < nowCategory.length; j++) {
      gradientarr.push(gradient);
    }
    return gradientarr;
  };

  const twitContainer = useRef();

  useEffect(() => {
    function resizeGridItem(item) {
      let rowGap = 20;

      let rowSpan = Math.ceil(
        (item.getBoundingClientRect().height + rowGap) / rowGap
      );
      item.style.gridRowEnd = 'span ' + rowSpan;
    }

    function resizeAllGridItems() {
      let allItems = twitContainer.current.children;
      for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
      }
    }

    window.onload = resizeAllGridItems();
    window.addEventListener('resize', resizeAllGridItems);
  }, []);

  return (
    <Styled.Section>
      <Category nowCategory={nowCategory} setNowCategory={setNowCategory} />
      <Styled.Article>
        <Styled.ArticleInfo>
          <div className='route'>전체 / 인기트윗</div>
          <div className='category'>인기트윗</div>
        </Styled.ArticleInfo>
        <Styled.TwitContainer ref={twitContainer}>
          {nowData.map((tweet, idx) => {
            return (
              <Tweet
                profile={gradientMap()[idx]}
                name={tweet.value3}
                key={idx}
                link={tweet.value1}
                id={tweet.value3}
                contents={tweet.value5}
                retweet={tweet.value6}
                likes={tweet.value7}
              />
            );
          })}
        </Styled.TwitContainer>
      </Styled.Article>
    </Styled.Section>
  );
};

export default Home;
