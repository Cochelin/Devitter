//dummy
import htmlCssDummy from '../static/htmlCssDummy';
import javaDummy from '../static/javaDummy';
import javascriptDummy from '../static/javascriptDummy';
import jobsearchDummy from '../static/jobsearchDummy';
import pythonDummy from '../static/pythonDummy';
import reactDummy from '../static/reactDummy';
import springDummy from '../static/springDummy';
import vueDummy from '../static/vueDummy';

const badWords = [
    '지랄',
    '시발',
    '씨발',
    '존나',
    '미쳐',
    '미친',
    '미쳤',
    '개새',
    'fuck',
    '。',
    '혐',
    '개웃',

];
const badUserName = [
    '미스터블루 공식추천봇'
]


let javascriptArray, jobsearchArray, reactArray, htmlCssArray, vueArray, springArray, javaArray, pythonArray;

for (let i = 0; i < badWords.length; i++) {
    javascriptArray = javascriptDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    jobsearchArray = jobsearchDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    reactArray = reactDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    htmlCssArray = htmlCssDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    vueArray = vueDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    springArray = springDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    javaArray = javaDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
    pythonArray = pythonDummy.filter(
        (el) => el["내용"].indexOf(badWords[i]) === -1 && el["유저네임"].indexOf(badUserName[0]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
    );
}

const allDummy = [
    ...javascriptArray,
    ...jobsearchArray,
    ...reactArray,
    ...vueArray,
    ...htmlCssArray,
    ...springArray,
    ...javaArray,
    ...pythonArray,
];
const descAllDummy = [...allDummy].sort((a, b) => b["리트윗수"] - a["리트윗수"]);

// 내림차순 정렬
// const LikesDesc = () => {
//   allDummy = allDummy.sort((a,b) => b["좋아요수"] - a["좋아요수"])
// }

// 날짜별 정렬 (완료안됨)
// const TodayDummy = [...allDummy].sort((a, b) => b["작성일"] - a["작성일"]);


export { descAllDummy, javascriptArray, jobsearchArray, reactArray, htmlCssArray, vueArray, springArray, javaArray, pythonArray  }