import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkIsSubmit, BookmarkSettingToggle, NowBookMark, UpdataeState } from '../../atom/atoms';
import { useAxios } from '../../util/useAxios';
import * as S from './BookmarkList.style'
import SubBookmarkDelete from './SubBookmarkDelete';


const BookmarkLi = ({ parent, parentName }) => {
    const [isupdate, updateState] = useRecoilState(UpdataeState)
    const forceUpdate = useCallback(() => updateState({}), [])
    const isSubmit = useRecoilValue(bookmarkIsSubmit)
    const [subBookmarkList, setSubBookmarkList] = useState([])
    const { response, loading, error, clickFetchFunc } = useAxios({

    }, false);
    useEffect(() => {
        clickFetchFunc({
            method: 'GET',
            url: `/subBookmark/get`,
        })
    }, [isSubmit, isupdate])

    const [nowBookMark, setNowBookMark] = useRecoilState(NowBookMark)
    const ClickSetNav = (e, childName) => {
        setNowBookMark({
            parentName,
            childName
        })
    }

    useEffect(() => {
        if (response) {
            setSubBookmarkList(response.filter(e => e.parent === parent))

        }
    }, [response])
    const bookmarkSetting = useRecoilValue(BookmarkSettingToggle)
    return (
        <>{
            response && subBookmarkList.map(el => <S.Li><NavLink onClick={(e) => { forceUpdate(); ClickSetNav(e, el.name); }} to={`${parent}/${el.id}`}><span >img</span>{el.name}</NavLink>{bookmarkSetting ? <SubBookmarkDelete el={el} /> : null}</S.Li>)
        }

        </>
    );
};

export default BookmarkLi;