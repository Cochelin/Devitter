import React from 'react';
import ModalFloating from "../../components/popup/ModalFloating";
import FloatingBtn from "../../components/popup/FloatingBtn";
import { confirm, modalSelect } from '../../components/popup/confirm'
const Practice = () => {
    return (
        <div>
            <button style={{ height: `900px` }} onClick={() => confirm()}>북마크 삭제 confirm</button>
            <button style={{ height: `900px` }} onClick={() => modalSelect()}>북마크 추가 modal</button>
            <FloatingBtn />
            <ModalFloating />
        </div>
    );
};

export default Practice;