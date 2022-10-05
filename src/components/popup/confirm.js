import { confirmAlert } from 'react-confirm-alert'; // Import
import './confirm.css';
import iconClose from '../../assets/img/icon_close.png'
import Select from './Select';

const confirm = (title) => {


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
const modalSelect = (title) => {
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

export { confirm, modalSelect }