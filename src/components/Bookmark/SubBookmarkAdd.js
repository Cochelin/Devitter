import React, { useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { BookmarkSettingToggle, NowUserName, OnChangeValue, UpdataeState, UserName } from '../../atom/atoms';
import { useAxios } from '../../util/useAxios';
import * as S from './BookmarkList.style'



const SubBookmarkAdd = ({ parent }) => {
    const [toggleBookmark, setToggleBookmark] = useState(false)
    const user_id = useRecoilValue(NowUserName)
    const ToggleBookmark = () => {
        setToggleBookmark(!toggleBookmark)
    }
    const [onChangeValue, setOnChangeValue] = useRecoilState(OnChangeValue)

    const onChangeValueFunc = (e) => {
        setOnChangeValue(
            {
                SubBookmarkName: e.target.value
            }
        )
    }
    const { response, loading, error, clickFetchFunc } = useAxios({

    }, false);


    const [isupdate, updateState] = useRecoilState(UpdataeState)
    const forceUpdate = useCallback(() => updateState({}), [])
    const submitSubBookmark = () => {
        clickFetchFunc(
            {
                method: 'POST',
                url: `/subBookmark/create`,
                data: {
                    user_id: user_id,
                    name: onChangeValue.SubBookmarkName,
                    parent: parent
                }
            }
        )
        setToggleBookmark(false)
        setOnChangeValue({})
        forceUpdate()
    }
    const bookmarkSetting = useRecoilValue(BookmarkSettingToggle)
    return (
        <>{
            bookmarkSetting ?
                <>
                    {
                        toggleBookmark ?
                            <S.Li>
                                <a> <span  >img</span>  <input className='buttoninput' onChange={(e) => onChangeValueFunc(e)} type='text' name='subBookMark' placeholder='서브 북마크 이름을 지정해주세요.' /></a><button onClick={submitSubBookmark}>저장</button>
                            </S.Li>
                            :
                            null
                    }

                    <button onClick={() => ToggleBookmark(!toggleBookmark)}>{toggleBookmark ? '취소' : '+ 서브 북마크 추가'}</button>
                </>
                :
                null
        }

        </>
    );
};

export default SubBookmarkAdd;