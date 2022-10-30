import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BookMarkList } from '../../atom/atoms'
import styled from 'styled-components';

const Ul = styled.ul`
`
const Li = styled.li`
`
const BookmarkList = () => {
    const bookmarkDummy = useRecoilValue(BookMarkList)
    return (
        <div>

            {
                bookmarkDummy.map((el, idx) => {
                    return (<Ul>{el.name}
                        <Li>
                            {
                                el.children.map((el) => {
                                    return <Li><Link to={`${el.id}`}>{el.name}</Link></Li>
                                })
                            }


                        </Li>
                    </Ul>)

                })
            }




        </div>
    );
};

export default BookmarkList;