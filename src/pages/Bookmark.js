import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import BookmarkList from '../components/Bookmark/BookmarkCategory';
import BookmarkTweet from './../components/BookmarkTweet';
import './../style/common.css';
import * as Styled from './Home.style'


const Container = styled.div`
padding-top: 142px; 
width: 100%;
display: flex;
font-family: "IBMPlexSansKR-Medium", Arial, Helvetica, sans-serif;
`
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

const Bookmark = () => {
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
        <Container>
            <BookmarkList />
            <Article>
                <Styled.ArticleInfo>
                    <div className='route'>나의 북마크 / 서브 북마크 1</div>
                    <div className='category'>서브 북마크 1</div>
                </Styled.ArticleInfo>
                <TwitContainer ref={twitContainer}>
                    <BookmarkTweet />
                    <BookmarkTweet />
                    <BookmarkTweet />
                    <BookmarkTweet />

                </TwitContainer>
            </ Article>
        </Container>
    );
};

export default Bookmark;