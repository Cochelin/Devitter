import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkIsSubmit, NowUserName, UserName } from '../../atom/atoms';
import { useAxios } from '../../util/useAxios';
import * as S from './BookmarkList.style'


const BookmarkAdd = () => {

    const [addbookMark, setAddbookMark] = useState()

    const [isSubmit, setIsSubmit] = useRecoilState(bookmarkIsSubmit);
    const [subBookMarkSubmit, setSubBookMarkSubmit] = useState(false);
    const user_id = useRecoilValue(NowUserName)
    const [subBookMarkSend, setSubBookMarkSend] = useState({})
    const { response, loading, error, clickFetchFunc } = useAxios({
    }, false);

    useEffect(() => {
        isSubmit &&
            clickFetchFunc({
                method: 'POST',
                url: `/bookmark/create`,
                data: {
                    user_id: user_id,
                    name: bookmarkName.MainBookmarkName
                }
            });


    }, [isSubmit])

    useEffect(() => {
        if (response) {
            let parent_id = response.split(':')[1].trim()
            setSubBookMarkSend({
                parent: parent_id
            })
            // console.log(parent_id)
        }

    }, [response])


    useEffect(() => {
        //메인 생성완료 후 서브 생성 바로 실행 
        if (subBookMarkSend.parent !== undefined) {
            console.log('북마크 성님', subBookMarkSend.parent)
            clickFetchFunc({
                method: 'POST',
                url: `/subBookmark/create`,
                data: {
                    user_id: user_id,
                    name: bookmarkName.SubBookmarkName,
                    parent: subBookMarkSend.parent
                }
            });
            setSubBookMarkSend({
                parent: undefined

            })
            setToggleBookmark(false)
            setBookmarkName({})
            setIsSubmit(false);
        }
    }, [subBookMarkSend])

    const SubmitHandle = () => {
        setIsSubmit(true)

    }

    const [bookmarkName, setBookmarkName] = useState({})
    const nameChangeHandle = (e) => {
        if (e.target.name === 'mainBookMark') {
            setBookmarkName({
                ...bookmarkName,
                MainBookmarkName: e.target.value
            })

        }
        if (e.target.name === 'subBookMark') {
            setBookmarkName({
                ...bookmarkName,
                SubBookmarkName: e.target.value
            })
        }
    }

    const [toggleBookmark, setToggleBookmark] = useState(false)
    const ToggleBookmark = () => {
        setToggleBookmark(!toggleBookmark)
    }

    return (
        <>
            {
                toggleBookmark ?
                    <S.Ul>
                        <p>
                            <span  >img</span>  <input onChange={(e) => nameChangeHandle(e)} type='text' name='mainBookMark' placeholder='메인 북마크 이름을 지정해주세요.' />

                        </p>
                        <S.Li>
                            <a> <span  >img</span>  <input onChange={(e) => nameChangeHandle(e)} type='text' name='subBookMark' placeholder='서브 북마크 이름을 지정해주세요.' /></a>
                        </S.Li>
                        <button onClick={SubmitHandle}> 북마크 저장</button>
                    </S.Ul>

                    :
                    null
            }


            <S.Cutombutton className='lastBtn' onClick={ToggleBookmark}> {toggleBookmark ? '취소' : '+ 북마크 추가'}</S.Cutombutton>

        </>
    );
};

export default BookmarkAdd;