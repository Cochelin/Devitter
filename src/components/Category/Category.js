import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const CategoryBox = styled.aside`
  width: 280px;
  height: 940px;
  padding: 48px;
`;

const Category = () => {
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

  return (
    <CategoryBox>
      {menu.map((el, idx) => {
        const key = Object.keys(el);
        const value = Object.values(el);
        return (
          <>
            <Accordion summary={key}>{value}</Accordion>
          </>
        );
      })}
    </CategoryBox>
  );
};

export default Category;
