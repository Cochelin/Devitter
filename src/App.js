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
import { useAxios } from './util/useAxios';
function App() {
  //패이지 active 를 위한 재랜더링
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])
  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/twitter?api_key=83d5785b7a7dafae360f68e66aceda9c&keyword="자바스크립트"&max_count=10`,
    withCredentials: true,
  });

  response && loading && console.log(response)
  error && console.log(error)
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
