import React, { useState } from 'react';
import * as A from './Category.style';

const Accordion = (props) => {
  let { summary, children } = props;
  children = children[0];
  const [open, setOpen] = useState(false);

  // TODO: 카테고리 선택 시 컬러

  const handleClick = (e) => {
    if (e.target.innerText === '인기트윗') {
      return;
    }
    setOpen(!open);
  };

  const handleContent = (e) => {
    if (e.target.innerText.split('\n').length > 1) return;
  };

  return (
    <>
      <A.AccordionBox
        initial={summary[0] === '인기트윗'}
        height={
          summary[0] === '인기트윗'
            ? 19
            : open
            ? 19 + 22 + 33 * children.length
            : 19
        }
      >
        <A.Detail>
          <A.Summary onClick={handleClick}>
            <span>{summary}</span>
            {summary[0] === '인기트윗' ? (
              <></>
            ) : open ? (
              <A.ArrowOpen />
            ) : (
              <A.ArrowClose />
            )}
          </A.Summary>
          <A.ContentBox shown={open} opacity={open ? 1 : 0}>
            <A.Content>
              {children.map((el) => (
                <div onClick={handleContent}>{el}</div>
              ))}
            </A.Content>
          </A.ContentBox>
        </A.Detail>
      </A.AccordionBox>
    </>
  );
};

export default Accordion;
