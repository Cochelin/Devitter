import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Gnb from './components/Gnb';
import Header from './components/Header';
import './style/common.css';
import LoadingPage from './components/Loading/LoadingPage';

function App() {
  return (
    <BrowserRouter>
      <LoadingPage />
      <Header />
      <Gnb />
      <Routes>
        <Route path='/' element={<Home />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
