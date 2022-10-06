import { confirmAlert } from 'react-confirm-alert'; // Import
import './css/confirm.css';
import './css/modal.css';
import iconClose from '../../assets/img/icon_close.png'
import Select from './Select';
import { useState } from 'react';

//Delete bookmark conmfirm
const confirm = () => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='react-confirm-alert-body'>
                    <h5></h5> <span><img src={iconClose} onClick={onClose} /></span>
                    <p>북마크를 삭제하시겠습니까?</p>
                    <div className='react-confirm-alert-button-group'>
                        <button className='on' onClick={onClose}>취소</button>
                        <button
                            onClick={onClose} > 확인
                        </button>
                    </div>
                </div>
            );
        }
    });



}

//add bookmark > select modal 
const modalSelect = () => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='react-confirm-alert-body'>
                    <h5>북마크 추가</h5> <span><img src={iconClose} onClick={onClose} /></span>
                    <Select />

                    <div className='react-confirm-alert-button-group'>
                        <button className='one' onClick={onClose}>확인</button>

                    </div>
                </div>
            );
        }
    });

}


// Add bookmark modal
const ModalUrl = ({ seturlModalOpen, urlModalOpen }) => {

    return (
        <div className='modal_url_body'>
            <h5>북마크 추가</h5> <span><img src={iconClose} onClick={() => seturlModalOpen(!urlModalOpen)} /></span>
            <div className='input_warp'>
                <input type='text' placeholder='URL을 입력해 주세요.' />
            </div>

            <Select />

            <div className='react-confirm-alert-button-group'>
                <button className='one' >확인</button>

            </div>
        </div>
    )
}


export { confirm, modalSelect }
export default ModalUrl