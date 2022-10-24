import styled from 'styled-components';

export const Box = styled.div`
margin: 20px;
margin-bottom: 10px;
min-width: 350px;
max-width: 350px;
grid-column-end: span 3;
height: max-content;
border-radius: 24px;
padding: 13px;
box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
display: flex;
flex-direction: row;
`;

export const Profile = styled.div`
margin: 0 20px 0 3px;
width: 48px;
height: 48px;
border-radius: 50%;
background: ${(props) => props.background};
`;

export const NameSpace = styled.div`
display: flex;
flex-direction: column;
width: calc(100% - 92px);
.name {
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
}
.id {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}
`;

export const BookMarkContianer = styled.span`
display: flex;
justify-content: flex-end;
width: 20px;
margin: 2px 2px 0 0;
cursor: pointer;
`;

export const Contents = styled.div`
margin: 16px 0 9px 7px;
line-height: 150%;
`;

export const Bottom = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-right: 12px;
`;

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 14px;
`;

export const Number = styled.span`
margin: 0 0 1.5px 4.5px;
font-size: 11px;
`;

export const LinkIconA = styled.a`
display: block;
height: 13px;
width: 13px;
background-position: 100% 100%;
background-repeat: no-repeat;
`;
