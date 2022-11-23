import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Home.style'

import { descAllDummy, javascriptArray, jobsearchArray, reactArray, htmlCssArray, vueArray, springArray, javaArray, pythonArray } from './../components/filterDataMedia';
// import { descAllDummy, javascriptDummy, reactDummy, vueDummy, htmlAndCssDummy, springDummy, javaDummy, pythonDummy } from './filterData'
import { Tweet } from '../components/Tweet';
import { useParams } from 'react-router-dom';
import { useAxios } from '../util/useAxios';

const TwittCompo = ({ nowCategory, setNowCategory }) => {

    // console.log(htmlCSSDummy);
    const { response, loading, error, clickFetchFunc } = useAxios({
        method: 'GET',
        url: `/tweet/get`,
    });

    // response && console.log(response)



    const [totalTweet, setTotalTweet] = useState([]);
    const [nowData, setNowData] = useState([]);

    const parmas = useParams()

    const twitContainer = useRef();
    useEffect(() => {
        const badWords = [
            '지랄',
            '시발',
            '씨발',
            '존나',
            '미쳐',
            '미친',
            '미쳤',
            '개새',
            'fuck',
            '。',
            '혐',
            '개웃',
            '커미션',
            '대통령',

        ];
        const badUserName = [
            '미스터블루 공식추천봇'
        ]
        if (response) {
            let array = ''
            for (let i = 0; i < badWords.length; i++) {
                array = response.filter(
                    (el) => el.tweet_content.indexOf(badWords[i]) === -1 && el.tweet_name.indexOf(badUserName[0]) === -1 && (el.tweet_retweet > 20 || el.tweet_heart > 80)
                );
            }
            // 기본적으로 rt 많은 순서로 sort
            // if (window.location.pathname === '/')
            array.sort((a, b) => b.tweet_retweet - a.tweet_retweet);
            
            // today 탭이 눌려있다면 날짜순으로 sort.
            // console.log(parmas.categoryName);
            // if (window.location.pathname === '/Today') {
            //     console.log("today 눌렸습니다.")
            //     array.sort((a,b) => new Date(b.date) - new Date(a.date))
            // }
            // sort된 array를 totalTweet으로 설정하기
            setTotalTweet(array)
            setNowData(array)
        }
    }, [response])


    // loading && console(loading)

    useEffect(() => {
        if (response) {
            console.log(parmas)
            // if (parmas.categoryName === undefined) setNowData(totalTweet.sort((a, b) => b.tweet_retweet - a.tweet_retweet));
            if (window.location.pathname === '/') {
                
                setNowData(totalTweet.sort((a, b) => b.tweet_retweet - a.tweet_retweet));
                setTotalTweet(totalTweet)
            }
            
            if (window.location.pathname === '/Today') {
                console.log("today 눌렸습니다.")
                
                setNowData(totalTweet.sort((a, b) => new Date(b.date) - new Date(a.date)))
                setTotalTweet(totalTweet)
            }    



            if (parmas.categoryName === 'Today') setNowData(totalTweet.sort((a, b) => new Date(b.date) - new Date(a.date)))
            if (parmas.categoryName === '취업') setNowData(totalTweet.filter(el => el.category === 'jobsearch'))
            if (parmas.categoryName === 'JavaScript') setNowData(totalTweet.filter(el => el.category === 'javascript'))
            if (parmas.categoryName === 'React') setNowData(totalTweet.filter(el => el.category === 'react'))
            if (parmas.categoryName === 'Vue.js') setNowData(totalTweet.filter(el => el.category === 'vue'))
            if (parmas.categoryName === 'HTML&CSS') setNowData(totalTweet.filter(el => el.category === 'htmlCss'))
            if (parmas.categoryName === 'Spring') setNowData(totalTweet.filter(el => el.category === 'spring'))
            if (parmas.categoryName === 'Java') setNowData(totalTweet.filter(el => el.category === 'java'))
            if (parmas.categoryName === 'Python') setNowData(totalTweet.filter(el => el.category === 'python'))
            
        }


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
        response && resizeAllGridItems();
        // window.onload = resizeAllGridItems();

        response && window.addEventListener('resize', resizeAllGridItems);
    }, [nowData]);
    // response && console.log('nowData,', totalTweet[0])

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

                    {response && nowData.map((tweet, idx) => {
                        const media = tweet.media === '[]' ? [] : tweet.media.slice(1, -1).replaceAll('\"', '').replaceAll(' ', '').split(',');
                        return (
                            <Tweet
                                profile={tweet.profile}
                                name={tweet.tweet_name}
                                key={idx}
                                tweetId={tweet.id}
                                link={tweet.tweet_link}
                                id={tweet.tweet_id}
                                contents={tweet.tweet_content}
                                media={media}
                                retweet={tweet.tweet_retweet}
                                likes={tweet.tweet_heart}
                            />
                        );
                    })}
                </Styled.TwitContainer>
            </Styled.Article>
        </>
    );
};

export default TwittCompo;