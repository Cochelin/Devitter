import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BookMarkList } from '../../atom/atoms'
import styled from 'styled-components';
import OpenFolder from './../../assets/img/opend_folder_icon.png'
import CloseFolder from './../../assets/img/folder_icon.png'

const Ul = styled.ul`

margin-top: 25px;
padding-bottom:10px;
border-bottom: 1px solid var(--dark-gray-color);
& p {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 24px;
}

& p span{
    width: 25px;
    height: 24px;
    display: block;
    font-size: 0;
background-image: url(${CloseFolder});
margin-right: 8px;    
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

    return (
        <div>

            {
                bookmarkDummy.map((el, idx) => {
                    const mainId = el.id
                    return (<Ul>
                        <p>
                            <span >img</span> {el.name}
                        </p>
                        {
                            el.children.map((el) => {
                                return <Li><NavLink to={`${mainId}/${el.id}`}><span >img</span>{el.name}</NavLink></Li>
                            })
                        }


                    </Ul>)

                })
            }




        </div>
    );
};

export default BookmarkList;