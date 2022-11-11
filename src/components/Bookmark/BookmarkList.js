import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BookMarkList } from '../../atom/atoms'
import styled, { css } from 'styled-components';
import OpenFolder from './../../assets/img/opend_folder_icon.png'
import CloseFolder from './../../assets/img/folder_icon.png'

const Ul = styled.ul`

margin-top: 25px;
padding-bottom:10px;
border-bottom: 1px solid var(--dark-gray-color);
& p span{
    width: 25px;
    height: 24px;
    display: block;
    font-size: 0;
background-image: url(${CloseFolder});
margin-right: 8px;    
}

& p {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 24px;
    ${(p) =>
        p.active &&
        css`
     color: var(--point-green-color);
     & span{
        background-image: url(${OpenFolder});
     }
     `
    }
}






`
const Li = styled.li`
font-size: 15px;
font-weight: 400;
margin-bottom: 16px;
margin-left: 25px;

& .active{
    color: var( --point-green-color);
}
& .active span {
    background-image: url(${OpenFolder});
}
& span {
    width: 25px;
    height: 24px;
    display: block;
    font-size: 0;
background-image: url(${CloseFolder});
margin-right: 8px;
}
& a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
`
const BookmarkList = () => {
    const bookmarkDummy = useRecoilValue(BookMarkList)

    function isActive(path) {
        return window.location.pathname.startsWith(path);
    }

    //강제 재랜더링
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const [tabOpen, setTabOpen] = useState()

    return (
        <div>

            {
                bookmarkDummy.map((el, idx) => {
                    const mainId = el.id
                    return (<Ul active={isActive(`/BookMark/${el.id}`)}>
                        <p  >
                            <span  >img</span> {el.name}
                        </p>

                        {
                            el.children.map((el) => {
                                return <Li><NavLink onClick={forceUpdate} to={`${mainId}/${el.id}`}><span >img</span>{el.name}</NavLink></Li>
                            })
                        }


                    </Ul>)

                })
            }




        </div>
    );
};

export default BookmarkList;