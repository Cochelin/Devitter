import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const CategoryBox = styled.aside`
  min-width: 280px;
  height: 940px;
  padding: 48px;
`;

// props drilling TT
const Category = ({ nowCategory, setNowCategory }) => {
  const [openkey, setOpenkey] = useState('');
  const menu = [
    {
      인기트윗: [],
    },
    {
      'For Junior': ['취업', '블로깅'],
    },
    {
      Front: ['JavaScript', 'React', 'Vue.js', 'HTML/CSS'],
    },
    {
      Back: ['Spring', 'Java', 'Python'],
    },
  ];

  const handleAccordian = (key) => {
    console.log(key + '클릭!');
    setOpenkey(openkey !== key ? key : null);
    console.log(key, openkey);
  };

  return (
    <CategoryBox>
      {menu.map((el, idx) => {
        const key = Object.keys(el);
        const value = Object.values(el);
        return (
          <Accordion
            nowCategory={nowCategory}
            setNowCategory={setNowCategory}
            summary={key[0]}
            toggle={handleAccordian}
            open={openkey === key[0]}
          >
            {value[0]}
          </Accordion>
        );
      })}
    </CategoryBox>
  );
};

export default Category;
