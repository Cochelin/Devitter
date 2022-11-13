import React, { useEffect, useState } from 'react';
import { useAxios } from '../../util/useAxios';

const SubSelect = ({ parent }) => {
    const [subBookmarkList, setSubBookmarkList] = useState([])
    const { response, loading, error, clickFetchFunc } = useAxios({
    }, false);

    useEffect(() => {
        clickFetchFunc({
            method: 'GET',
            url: `/subBookmark/get`,
        })
    }, [])

    useEffect(() => {
        if (response) {
            setSubBookmarkList(response.filter(e => e.parent === parent))

        }
    }, [response])

    return (
        <>
            {
                subBookmarkList.map(el => {
                    return <option value={el.id}>{el.name}</option>
                })
            }


        </>
    );
};

export default SubSelect;