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


// for (let i = 0; i < badWords.length; i++) {
//     javascriptDummy = javascriptDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     jobsearchDummy = jobsearchDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     reactDummy = reactDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     htmlCssDummy = htmlCssDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     vueDummy = vueDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     springDummy = springDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     javaDummy = javaDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
//     pythonDummy = pythonDummy.filter(
//         (el) => el["내용"].indexOf(badWords[i]) === -1 && (el["리트윗수"] > 20 || el["좋아요수"] > 80)
//     );
// }

const allDummy = [
    ...javascriptDummy,
    // ...jobsearchDummy,
    // ...reactDummy,
    // ...vueDummy,
    // ...htmlCssDummy,
    // ...springDummy,
    // ...javaDummy,
    // ...pythonDummy,
];
const descAllDummy = [...allDummy].sort((a, b) => b["리트윗수"] - a["리트윗수"]);

// 내림차순 정렬
// const LikesDesc = () => {
//   allDummy = allDummy.sort((a,b) => b["좋아요수"] - a["좋아요수"])
// }

// 날짜별 정렬 (완료안됨)
// const TodayDummy = [...allDummy].sort((a, b) => b.value9 - a.value9);


// export {
//     descAllDummy, javascriptDummy, jobsearchDummy,
//     reactDummy,
//     vueDummy,
//     htmlCSSDummy,
//     springDummy,
//     javaDummy,
//     pythonDummy
// }

export { descAllDummy }