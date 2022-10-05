import React from 'react';
import styled from 'styled-components';

const SelectWarp = styled.div`
padding: 0 15px;    
margin-top: 25px;
`
const SelectDiv = styled.select`
width: 100%;
padding: 0 15px;
height: 40px;
background-color: #F2F2F2;
border: 1px solid var(--point-green-color);
border-radius: 3px;
`

const Select = () => {
    return (
        <SelectWarp>
            <SelectDiv name="bookMark" id="bookmark-select">

                <option value="">북마크 추가할 곳을 선택해주세요.</option>
                <optgroup label="For Junior">
                    <option value="employment">취업</option>
                    <option value="blogging">블로깅</option>
                </optgroup>
                <optgroup label="Front">
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="vueJs">Vue.js</option>
                    <option value="htmlCss">HTML / CSS</option>
                </optgroup>
                <optgroup label="Back">
                    <option value="nodeJs">NodeJS</option>
                    <option value="java">JAVA</option>
                </optgroup>
            </SelectDiv>
        </SelectWarp>

    );
};

export default Select;