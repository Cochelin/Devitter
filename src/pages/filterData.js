//dummy

import {
    javascriptData,
    reactData,
    vueData,
    cssData,
    cssDataEng,
    htmlData,
    htmlDataEng,
    springData,
    javaData,
    pythonData,
} from '../static/dummyData';

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
let htmlAndCssDummy = [
    ...htmlData,
    ...htmlDataEng,
    ...cssData,
    ...cssDataEng,
]

let javascriptDummy = [...javascriptData]
let reactDummy = [...reactData]
let vueDummy = [...vueData]
let springDummy = [...springData]
let javaDummy = [...javaData]
let pythonDummy = [...pythonData]
for (let i = 0; i < badWords.length; i++) {
    javascriptDummy = javascriptDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    reactDummy = reactDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    htmlAndCssDummy = htmlAndCssDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    vueDummy = vueDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    springDummy = springDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    javaDummy = javaDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
    pythonDummy = pythonDummy.filter(
        (el) => el.value5.indexOf(badWords[i]) === -1 && (el.value6 > 20 || el.value7 > 80)
    );
}

const allDummy = [
    ...javascriptDummy,
    ...reactDummy,
    ...vueDummy,
    ...htmlAndCssDummy,
    ...springDummy,
    ...javaDummy,
    ...pythonDummy,
];
const descAllDummy = [...allDummy].sort((a, b) => b.value6 - a.value6);

// 내림차순 정렬
// const LikesDesc = () => {
//   allDummy = allDummy.sort((a,b) => b.value7 - a.value7)
// }

// 날짜별 정렬 (완료안됨)
const TodayDummy = [...allDummy].sort((a, b) => b.value9 - a.value9);


export { descAllDummy, }