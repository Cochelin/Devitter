import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Home.style'

import { descAllDummy, javascriptDummy, reactDummy, vueDummy, htmlAndCssDummy, springDummy, javaDummy, pythonDummy } from './filterData'
import { Tweet } from '../components/Tweet';
import { useParams } from 'react-router-dom';

const TwittCompo = ({ nowCategory, setNowCategory }) => {


    const [nowData, setNowData] = useState(descAllDummy);

    const parmas = useParams()

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
        for (let j = 0; j < nowData.length; j++) {
            gradientarr.push(gradient);
        }
        return gradientarr;
    };

    const twitContainer = useRef();



    useEffect(() => {
        if (parmas.categoryName === undefined) setNowData(descAllDummy)
        if (parmas.categoryName === '취업') setNowData(javascriptDummy)
        if (parmas.categoryName === '블로깅') setNowData(javascriptDummy)
        if (parmas.categoryName === 'JavaScript') setNowData(javascriptDummy)
        if (parmas.categoryName === 'React') setNowData(reactDummy)
        if (parmas.categoryName === 'Vue.js') setNowData(vueDummy)
        if (parmas.categoryName === 'HTML&CSS') setNowData(htmlAndCssDummy)
        if (parmas.categoryName === 'Spring') setNowData(springDummy)
        if (parmas.categoryName === 'Java') setNowData(javaDummy)
        if (parmas.categoryName === 'Python') setNowData(pythonDummy)

    }, [parmas.categoryName])

    //twitContainer 는 ref 라서 이전의 값이 계속 반복문에 들어가는 현상 발생 > 
    // nowData.length 를 useEffect nowData 가 변경될 때마다 그 값으로 정렬해주면 해결
    useEffect(() => {
        function resizeGridItem(item) {
            let rowGap = 30;

            let rowSpan = Math.ceil(
                (item.getBoundingClientRect().height + rowGap) / rowGap
            );
            item.style.gridRowEnd = 'span ' + rowSpan;
        }

        function resizeAllGridItems() {
            let allItems = twitContainer.current.children;
            for (let x = 0; x < nowData.length; x++) {
                resizeGridItem(allItems[x]);
            }
        }

        // window.onload = resizeAllGridItems();
        resizeAllGridItems();
        window.addEventListener('resize', resizeAllGridItems);
    }, [nowData]);


    return (
        <>
            <Styled.Article>
                <Styled.ArticleInfo>
                    {
                        parmas.categoryName === undefined ?
                            <>
                                <div className='route'>전체 / 인기트윗</div>
                                <div className='category'>인기트윗</div>
                            </>

                            :
                            <>
                                <div className='route'>전체 / {parmas.categoryName}</div>
                                <div className='category'>{parmas.categoryName}</div>
                            </>

                    }

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
        </>
    );
};

export default TwittCompo;