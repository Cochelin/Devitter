import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { BookMarkList } from './../atom/atoms'
import styled from 'styled-components';
import BookmarkTweet from './BookmarkTweet';
import { useNavigate, useParams } from 'react-router-dom';

const TwitContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 200;
  width: 100%;
`;

const Article = styled.article`
display: flex;
width: 100%;
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
const BookMarkContainer = ({ props }) => {

    //Dummy 이용 임시 아이디

    // mainId = 1
    // subId = 11
    let params = useParams();
    console.log(params)

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


    const bookmarkDummy = useRecoilValue(BookMarkList)

    const filterBookMarkDummy = bookmarkDummy.filter(el => el.id === +params.mainId)
    const filtersubBookMarkDummy = filterBookMarkDummy[0].children.filter(el => el.id === +params.subId)
    console.log(filtersubBookMarkDummy[0].children)

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
        for (let j = 0; j < filtersubBookMarkDummy[0].children.length; j++) {
            gradientarr.push(gradient);
        }
        return gradientarr;
    };


    return (
        <Article>
            <ArticleInfo>
                <div className='route'>{filterBookMarkDummy[0].name} / {filtersubBookMarkDummy[0].name}</div>
                <div className='category'>{filtersubBookMarkDummy[0].name}</div>
            </ArticleInfo>

            <TwitContainer ref={twitContainer}>
                {
                    filtersubBookMarkDummy[0].children.map((tweet, idx) => {
                        return (<BookmarkTweet
                            profile={gradientMap()[idx]}
                            name={tweet.value3}
                            key={idx}
                            link={tweet.value1}
                            id={tweet.value3}
                            contents={tweet.value5}
                            retweet={tweet.value6}
                            likes={tweet.value7}
                        />)

                    })
                }

            </TwitContainer>
        </ Article>
    );
};

export default BookMarkContainer;