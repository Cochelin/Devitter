import React, { useCallback } from 'react';
import { useAxios } from '../../util/useAxios';

import deleteImg from '../../assets/img/delete_bookmark.png'
import { useRecoilState } from 'recoil';
import { UpdataeState } from '../../atom/atoms';

const BookmarkDelete = ({ el }) => {
    const [isupdate, updateState] = useRecoilState(UpdataeState)
    const forceUpdate = useCallback(() => updateState({}), [])
    const { response, loading, error, clickFetchFunc } = useAxios({

    }, false);
    const deleteBookmark = (e, bookmark_id) => {


        clickFetchFunc({
            method: 'DELETE',
            url: `/bookmark/delete/${bookmark_id}`,
        })
        forceUpdate()
    }
    return (
        <>
            <button className='deleteBtn'>
                <img key={el.id} onClick={(e) => { deleteBookmark(e, el.id); }} src={deleteImg} />
            </button>
        </>
    );
};

export default BookmarkDelete;