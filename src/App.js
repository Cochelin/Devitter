import Gnb from "./components/Gnb";
import Header from "./components/Header";
import './style/common.css'
import LoadingPage from "./components/Loading/LoadingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Practice from "./components/popup/Practice";
function App() {

  return (
    <div>
      <BrowserRouter>
        <LoadingPage />
        <Header />
        <Gnb />
        <Routes>
          <Route path="/" element={<Practice />}> </Route>
        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
