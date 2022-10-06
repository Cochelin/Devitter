import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import IconPlus from '../../assets/img/icon_plus_floating.png'
import ModalUrl from './confirm';

const Btn = styled.button`
position: fixed;
right: 48px;
bottom: 48px;
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid var(--point-green-color);
text-align: center;
font-size: 14px;
font-weight: 700;
color: var(--point-green-color);
background-color: white;
box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.2);
cursor: pointer;

& span {
    display: block;
    margin: 7px auto 0;

}
`

const FloatingBtn = () => {
    const [urlModalOpen, seturlModalOpen] = useState(false)

    return (
        <>
            <Btn onClick={() => seturlModalOpen(!urlModalOpen)}>
                URL로<br />
                트윗 추가 <span><img src={IconPlus} /></span>
            </Btn>
            {urlModalOpen ? <ModalUrl seturlModalOpen={seturlModalOpen} urlModalOpen={urlModalOpen} /> : null}
        </>
    );
};

export default FloatingBtn;