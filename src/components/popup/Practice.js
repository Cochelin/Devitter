import React from 'react';
import ModalFloating from "../../components/popup/ModalFloating";
import FloatingBtn from "../../components/popup/FloatingBtn";
import { confirm, modalSelect } from '../../components/popup/confirm'
import RandomColor from '../Loading/RandomColor';
const Practice = () => {
    return (
        <div>
            <RandomColor />
            <button style={{ height: `900px` }} onClick={() => confirm()}>북마크 삭제 confirm</button>
            <button style={{ height: `900px` }} onClick={() => modalSelect()}>북마크 추가 modal</button>
            <ModalFloating />

            <FloatingBtn />


        </div>
    );
};

export default Practice;