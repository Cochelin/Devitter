import styled, { css } from 'styled-components';

export const AccordionBox = styled.div`
  border-top: ${(props) => (props.initial ? 0 : 1)}px solid #d6d6d6;
  width: 100%;
  height: ${(props) => props.height}px;
  overflow: hidden;
  transition: height 0.3s;
  padding: 22px 0;
`;

export const HotBox = styled.div`
  width: 100%;
  height: 19px;
  transition: height 0.3s;
  padding: 22px 0;
`;

export const Detail = styled.details`
  cursor: pointer;
`;

export const Summary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
  > .green {
    color: var(--point-green-color);
  }

  & a{
    text-decoration: none;

    ${(p) =>
    p.active &&
    css`
     color: var(--point-green-color);
     `
  }
  }
  & a.active{
    color: var(--point-green-color);
  }

  & span{
    ${(p) =>
    p.active &&
    css`
     color: var(--point-green-color);
     `
  }
  }
`;

// TODO: open/close animation 수정 필요(text, arrow)
export const ContentBox = styled.div`
  transition: opacity 0.3s;
  /* visibility: ${(props) => (props.shown ? 'visible' : 'hidden')}; */
  overflow: hidden;
  /* opacity: ${(props) => props.opacity}; */
  margin-top: 22px;
`;

export const Content = styled.div`
  font-size: 15px;
  > div {
    display: flex;
    flex-direction: column;
    padding: 10px 2px;
  }
  .green {
    color: var(--point-green-color);
  }

  & a{
    text-decoration: none;
  }
  & a.active{
     color: var(--point-green-color);
  }
`;

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border-top: 2px solid black;
  border-right: 2px solid black;
`;

export const ArrowOpen = styled(Arrow)`
  transform: rotate(315deg);
`;
export const ArrowClose = styled(Arrow)`
  transform: rotate(135deg);
`;
