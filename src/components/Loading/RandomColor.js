import React from 'react';
import styled from 'styled-components';


const random_rgba = (num) => {
    var o = Math.round, r = Math.random, s = 255, l = 100;
    return num === 1 ? 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')' : 'rgba(' + o(r() * (s)) + ',' + o(r() * (s - l)) + l + ',' + o(r() * (s)) + ',' + 0.3 + ')';
}


const Circle = styled.div`
display: inline-block;
width: 40px;
height: 40px;
border-radius:50%;
background: ${(props) => props.background};
/* background: linear-gradient(180deg, #AAFFE5 0%, rgba(255, 114, 215, 0) 100%); */
`
const RandomColor = () => {
    const arr = [0, 121, 2, 5, 6, 4]

    const gradientMap = () => {
        const gradientarr = []
        const gradient = `linear-gradient(180deg, ${random_rgba(1)} 0%, ${random_rgba(2)} 100%);`
        for (let j = 0; j < arr.length; j++) {
            gradientarr.push(gradient)
        }
        return gradientarr
    }
    return (
        <div>
            {arr.map((el, key) => {
                el = gradientMap()[key]
                return <Circle Circle key={key} background={el} ></Circle>
            })}

        </div >
    );
};

export default RandomColor;