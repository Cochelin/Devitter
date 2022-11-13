import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Home.style'

import { descAllDummy, javascriptArray, jobsearchArray, reactArray, htmlCssArray, vueArray, springArray, javaArray, pythonArray } from './filterDataMedia';
// import { descAllDummy, javascriptDummy, reactDummy, vueDummy, htmlAndCssDummy, springDummy, javaDummy, pythonDummy } from './filterData'
import { Tweet } from '../components/Tweet';
import { useParams } from 'react-router-dom';
import { useAxios } from '../util/useAxios';

const TwittCompo = ({ nowCategory, setNowCategory }) => {

    // console.log(htmlCSSDummy);

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
        if (parmas.categoryName === '취업') setNowData(jobsearchArray)
        // if (parmas.categoryName === '블로깅') setNowData(javascriptArray)
        if (parmas.categoryName === 'JavaScript') setNowData(javascriptArray)
        if (parmas.categoryName === 'React') setNowData(reactArray)
        if (parmas.categoryName === 'Vue.js') setNowData(vueArray)
        if (parmas.categoryName === 'HTML&CSS') setNowData(htmlCssArray)
        if (parmas.categoryName === 'Spring') setNowData(springArray)
        if (parmas.categoryName === 'Java') setNowData(javaArray)
        if (parmas.categoryName === 'Python') setNowData(pythonArray)

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

        window.onload = resizeAllGridItems();
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
                        const media = tweet["미디어URL"] === '[]' ? [] : tweet["미디어URL"].slice(1, -1).replaceAll('\"', '').replaceAll(' ', '').split(',');
                        return (
                            <Tweet
                                profile={tweet["유저 프로파일 이미지"]}
                                name={tweet["유저네임"]}
                                key={idx}
                                link={tweet["URL"]}
                                id={tweet["스크린네임"]}
                                contents={tweet["내용"]}
                                media={media}
                                retweet={tweet["리트윗수"]}
                                likes={tweet["좋아요수"]}
                            />
                        );
                    })}
                </Styled.TwitContainer>
            </Styled.Article>
        </>
    );
};

export default TwittCompo;