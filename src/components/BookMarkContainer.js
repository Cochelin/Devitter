import React, { useCallback, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { BookMarkList, NowBookMark, updateState } from './../atom/atoms'
import styled from 'styled-components';
import BookmarkTweet from './BookmarkTweet';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
padding-left: 280px;
position: relative;
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
const NoneBookmark = styled.div`
position: absolute;
top: 50%;
left: 40%;
transform: translate(-50% -50%);
width: 30%;
height: 50px;
margin-top:150px;
text-align: center;
font-size:24px;
line-height: 2;
color: var(--point-green-color);

& a {
    font-weight: 400;
    padding: 8px 8px;
    font-size: 14px;
    text-decoration: none;
    margin-top: 8px;
    border: 1px solid var(--point-green-color);
    border-radius: 5px;
}
`
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

    const filterBookMarkDummy = bookmarkDummy.filter(el => el.id === +params.mainId);
    const filtersubBookMarkDummy = ''


    // console.log(filtersubBookMarkDummy[0].children)

    //profile img
    // const random_rgba = (num) => {
    //     var o = Math.round,
    //         r = Math.random,
    //         s = 255,
    //         l = 100;
    //     return num === 1
    //         ? 'rgba(' +
    //         o(r() * s) +
    //         ',' +
    //         o(r() * s) +
    //         ',' +
    //         o(r() * s) +
    //         ',' +
    //         1 +
    //         ')'
    //         : 'rgba(' +
    //         o(r() * s) +
    //         ',' +
    //         o(r() * (s - l)) +
    //         l +
    //         ',' +
    //         o(r() * s) +
    //         ',' +
    //         0.3 +
    //         ')';
    // };
    // const gradientMap = () => {
    //     const gradientarr = [];
    //     const gradient = `linear-gradient(180deg, ${random_rgba(
    //         1
    //     )} 0%, ${random_rgba(2)} 100%);`;
    //     for (let j = 0; j < filtersubBookMarkDummy[0].children.length; j++) {
    //         gradientarr.push(gradient);
    //     }
    //     return gradientarr;
    // };

    const [, setUpdateState] = useRecoilState(updateState)
    const forceUpdate = useCallback(() => setUpdateState({}), [])
    const nowBookMark = useRecoilValue(NowBookMark)
    return (
        <Article>
            <ArticleInfo>

                <>
                    <div className='route'>{nowBookMark.parentName} / {nowBookMark.childName}</div>
                    <div className='category'> {nowBookMark.childName}</div>
                </>


            </ArticleInfo>


            <TwitContainer ref={twitContainer}>
                <NoneBookmark>아직 추가된 북마크가 없습니다.<br /><Link to='/' onClick={forceUpdate}>북마크 추가하러 가기 </Link></NoneBookmark>
                {
                    // filterBookMarkDummy[0] ?
                    //     filtersubBookMarkDummy[0].children.map((tweet, idx) => {
                    //         const media = tweet["미디어URL"] === '[]' ? [] : tweet["미디어URL"].slice(1, -1).replaceAll('\"', '').replaceAll(' ', '').split(',');
                    //         return (<BookmarkTweet
                    //            profile={tweet["유저 프로파일 이미지"]}
                    //             name={tweet["유저네임"]}
                    //             key={idx}
                    //             link={tweet["URL"]}
                    //             id={tweet["스크린네임"]}
                    //             contents={tweet["내용"]}
                    //             media={media}
                    //             retweet={tweet["리트윗수"]}
                    //             likes={tweet["좋아요수"]}
                    //         />)

                    //     })
                    // :

                }

                {

                }

            </TwitContainer>
        </ Article>
    );
};

export default BookMarkContainer;