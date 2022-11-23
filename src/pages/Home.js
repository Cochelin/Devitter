import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as Styled from './Home.style'


import Category from './../components/Category/Category';
import { Tweet } from './../components/Tweet';
import { Outlet } from 'react-router-dom';


const Home = () => {


  // category 클릭시 useState update
  const [nowCategory, setNowCategory] = useState('인기트윗');


  return (
    <Styled.Section>
      <Category nowCategory={nowCategory} setNowCategory={setNowCategory} />
      <Outlet />
    </Styled.Section>
  );
};

export default Home;
