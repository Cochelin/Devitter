import Gnb from "./components/Gnb";
import Header from "./components/Header";
import './style/common.css'
import { confirm, modalSelect } from './components/popup/confirm'
import FloatingBtn from "./components/popup/FloatingBtn";
import ModalFloating from "./components/popup/ModalFloating";
function App() {

  return (
    <div>
      <Header />
      <Gnb />
      <button style={{ height: `900px` }} onClick={() => confirm()}>북마크 삭제 confirm</button>
      <button style={{ height: `900px` }} onClick={() => modalSelect()}>북마크 추가 modal</button>

      <FloatingBtn />
      <ModalFloating />
    </div>

  );
}

export default App;
