import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

import * as A from './Category.style';

const Accordion = (props) => {
  let { summary, children, nowCategory, setNowCategory, open, toggle } = props;
  // const [highCategory, setHighCategory] = useState('인기트윗');

  const handleClick = (e) => {
    setNowCategory(e.target.innerText);
    toggle(e.target.innerText);
    // if (summary === '인기트윗') {
    //   setHighCategory(summary);
    // }
  };

  // const handleContent = (e) => {
  //   if (e.target.innerText.split('\n').length > 1) return;
  //   const category = e.target.innerText;
  //   setNowCategory(category);
  //   if (['취업', '블로깅'].includes(category)) {
  //     if (summary === 'For Junior') setHighCategory(summary);
  //     else setHighCategory(null);
  //   } else if (
  //     ['JavaScript', 'React', 'Vue.js', 'HTML/CSS'].includes(category)
  //   ) {
  //     if (summary === 'Front') setHighCategory(summary);
  //     else setHighCategory(null);
  //   } else if (['Spring', 'Java', 'Python'].includes(category)) {
  //     if (summary === 'Back') setHighCategory(summary);
  //     else setHighCategory(null);
  //   }
  // };
  const params = useParams()
  function isActive(summary) {
    let nowSummery
    if (params.categoryName === '취업' || params.categoryName === '블로깅') { nowSummery = 'For Junior' }
    if (params.categoryName === 'JavaScript' || params.categoryName === 'React' || params.categoryName === 'Vue.js' || params.categoryName === 'HTML&CSS') { nowSummery = 'Front' }
    if (params.categoryName === 'Spring' || params.categoryName === 'Java' || params.categoryName === 'Python') { nowSummery = 'Back' }
    if (params.categoryName === undefined) { nowSummery = '인기트윗' }

    return nowSummery === summary
  }
  return (
    <A.AccordionBox
      key={summary}
      initial={summary === '인기트윗'}
      height={
        summary === '인기트윗' ? 63 : open ? 63 + 22 + 35 * children.length : 63
      }
    >
      <A.Detail>
        <A.Summary onClick={handleClick} active={isActive(summary)}>
          <span  >{summary === '인기트윗' ? <Link to='/' >{summary}</Link> : summary}</span>
          {summary === '인기트윗' ? (
            <></>
          ) : open ? (
            <A.ArrowOpen />
          ) : (
            <A.ArrowClose />
          )}
        </A.Summary>
        <A.ContentBox>
          <A.Content>
            {children.map((el) => {
              return (
                <div key={el} className={nowCategory === el ? 'green' : null}> <NavLink to={`/${el}`}>
                  {el}

                </NavLink>
                </div>
              );
            })}
          </A.Content>
        </A.ContentBox>
      </A.Detail>
    </A.AccordionBox>
  );
};

export default Accordion;
