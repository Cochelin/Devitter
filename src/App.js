import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Gnb from './components/Gnb';
import Header from './components/Header';
import './style/common.css';
import LoadingPage from './components/Loading/LoadingPage';
import Bookmark from './pages/Bookmark';
import BookMarkContainer from './components/BookMarkContainer';

function App() {
  return (
    <BrowserRouter>
      <LoadingPage />
      <Header />
      <Gnb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/" element={<Navigate replace to="/" />} />
        <Route path='/Bookmark' element={<Bookmark />} >
          <Route path=":mainId/:subId" element={<BookMarkContainer />} />
        </Route>

        {/* <Route path='/' element={<Navigate to='/' />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
