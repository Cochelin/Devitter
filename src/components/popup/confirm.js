import { confirmAlert } from 'react-confirm-alert'; // Import
import './css/confirm.css';
import './css/modal.css';
import iconClose from '../../assets/img/icon_close.png'
import Select from './Select';

//Delete bookmark conmfirm
const confirm = (head, Yes, No, yesState, noState) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='react-confirm-alert-body'>
                    <h5></h5> <span><img src={iconClose} onClick={onClose} /></span>
                    <p>{head}</p>
                    <div className='react-confirm-alert-button-group'>
                        <button className='on' onClick={onClose}>{No}</button>
                        <button
                            onClick={onClose} > {Yes}
                        </button>
                    </div>
                </div>
            );
        }
    });



}

//add bookmark > select modal 
const modalSelect = (key) => {

    // const getSelectItem = (bookmark_id, key) => {
    //     const fetchData = async (params) => {
    //         try {
    //             const result = await axios.request(params);
    //         } catch (error) {
    //         } finally {
    //         }
    //     };

    //     fetchData({

    //     })
    // }

    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='react-confirm-alert-body'>
                    <h5>북마크 추가</h5> <span><img src={iconClose} onClick={onClose} /></span>
                    <Select />
                    {/* getSelectItem={getSelectItem} */}
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