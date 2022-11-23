import styled from "styled-components";

export const Section = styled.section`
display: flex;
padding-top: 142px;
flex-direction: row;
font-family: "IBMPlexSansKR-Regular", Arial, Helvetica, sans-serif;
`;

export const Article = styled.article`
display: flex;
width: 100%;
flex-direction: column;
padding-left: 280px;
`;

export const ArticleInfo = styled.div`
display: flex;
flex-direction: column;
height: 60px;
margin: 40px 0 0 32px;
.route {
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
}
.category {
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;
}
`;

export const TwitContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
grid-auto-flow: dense;
grid-auto-rows: 200;
`;