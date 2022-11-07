import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Gnb from './components/Gnb';
import Header from './components/Header';
import './style/common.css';
import LoadingPage from './components/Loading/LoadingPage';
import Bookmark from './pages/Bookmark';
import BookMarkContainer from './components/BookMarkContainer';
import TwittCompo from './pages/TwittCompo';
import { useCallback, useState } from 'react';
function App() {
  //패이지 active 를 위한 재랜더링
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  return (
    <BrowserRouter>
      <LoadingPage />
      <Header forceUpdate={forceUpdate} />
      <Gnb forceUpdate={forceUpdate} />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<TwittCompo />} />
          <Route path=':categoryName' element={<TwittCompo />} />
        </Route>
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
