import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IsSelectBookmark, NowUserName } from '../../atom/atoms';
import { useAxios } from '../../util/useAxios';
import SubSelect from './SubSelect';

const SelectWarp = styled.div`
padding: 0 15px;    
margin-top: 14px;
`
const SelectDiv = styled.select`
width: 100%;
padding: 0 15px;
height: 40px;
background-color: #F2F2F2;
border: 1px solid var(--point-green-color);
border-radius: 3px;
`

const Select = ({ getSelectItem, user_id }) => {
    const { response, loading, error, clickFetchFunc } = useAxios(
        {
            method: 'GET',
            url: `/bookmark/get`,
        }
    );


    const [bookmarkList, setBookmarkList] = useState([])
    useEffect(() => {
        if (response) {
            setBookmarkList(response.filter(e => e.user_id === user_id))

        }
    }, [response])

    const selectValue = (e) => {
        getSelectItem(e.target.value)
    }

    return (
        <SelectWarp>
            <SelectDiv onChange={(e) => selectValue(e)} name="bookMark" id="bookmark-select">
                <option value="">북마크 추가할 곳을 선택해주세요.</option>
                {
                    bookmarkList.map(el => {
                        return (
                            <optgroup label={el.name}>
                                <SubSelect parent={el.id} />
                            </optgroup>
                        )
                    })
                }



            </SelectDiv>
        </SelectWarp>

    );
};

export default Select;