import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkIsSubmit, BookMarkList, BookmarkSettingToggle, NowUserName, UpdataeState, UserName } from '../../atom/atoms'
import * as S from './BookmarkList.style'

import { useAxios } from '../../util/useAxios';
import BookmarkAdd from './BookmarkAdd';
import BookmarkDelete from './BookmarkDelete';
import BookmarkLi from './BookmarkLi';
import SubBookmarkAdd from './SubBookmarkAdd';

const BookmarkList = () => {
    const [isupdate, updateState] = useRecoilState(UpdataeState)
    const forceUpdate = useCallback(() => updateState({}), [])
    const user_id = useRecoilValue(NowUserName)

    function isActive(path) {
        return window.location.pathname.startsWith(path);
    }
    const bookmarkSetting = useRecoilValue(BookmarkSettingToggle)
    //강제 재랜더링


    const isSubmit = useRecoilValue(bookmarkIsSubmit)
    const { response, loading, error, clickFetchFunc } = useAxios({

    }, false);

    useEffect(() => {
        clickFetchFunc({
            method: 'GET',
            url: `/bookmark/get`,
        })
    }, [isSubmit, isupdate])


    const [bookmarkList, setBookmarkList] = useState([])
    useEffect(() => {
        if (response) {
            setBookmarkList(response.filter(e => e.user_id === user_id))

        }
    }, [response])





    response && console.log('bookmarkList', bookmarkList)
    return (
        <S.BookMarkWarp>

            {
                response &&
                bookmarkList.map((el, idx) => {

                    return (<S.Ul active={isActive(`/BookMark/${el.id}`)}>
                        <p  >
                            <div><span  >img</span> {el.name}</div>  {bookmarkSetting ? <BookmarkDelete el={el} /> : null}
                        </p>

                        <BookmarkLi parent={el.id} parentName={el.name} />
                        <SubBookmarkAdd parent={el.id} />
                    </S.Ul>)

                })
            }
            <BookmarkAdd />


        </S.BookMarkWarp>

    );
};

export default BookmarkList;