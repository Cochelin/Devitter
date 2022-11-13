import styled, { css } from "styled-components"
import OpenFolder from './../../assets/img/opend_folder_icon.png'
import CloseFolder from './../../assets/img/folder_icon.png'
export const BookMarkWarp = styled.div`
& .lastBtn {
    background-color: var(--point-green-color);
    color: white;
    display: block;
    margin: 5px auto 0;
}
`
export const Ul = styled.ul`

margin-top: 25px;
padding-bottom:10px;
border-bottom: 1px solid var(--dark-gray-color);
& p span{
    width: 25px;
    height: 24px;
    display: block;
    font-size: 0;
background-image: url(${CloseFolder});
margin-right: 8px;    
}
& button {
    background-color: transparent;
    border: 1px solid darkgray;
    border-radius: 3px;
    padding:  4px 8px;
    margin-left: auto;
    font-size: 12px;
    text-align: center;
    display: block;
}
& p {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 20px;
    justify-content: space-between;
    
    & div{ 
        display: flex;
        align-items: center;
    }
    ${(p) =>

        p.active &&
        css`
            & div {
                color: var(--point-green-color);
            }
     & div span{
        background-image: url(${OpenFolder});
     }
     `
    }

    & input{
        height: 30px;
    }
}






`
export const Li = styled.li`
font-size: 15px;
font-weight: 400;
margin-bottom: 16px;
margin-left: 25px;
display: flex;
justify-content: space-between;
align-items: center;
& .active{
    color: var( --point-green-color);
}
& .active span {
    background-image: url(${OpenFolder});
}
& span {
    width: 25px;
    height: 24px;
    display: block;
    font-size: 0;
background-image: url(${CloseFolder});
margin-right: 8px;
}
& a {
    display: flex;
    align-items: center;
    text-decoration: none;
}
& img{
    width: 13px;
    height: 12px;

}
& input{
    width: 125px;
    height: 30px;
}
& .buttoninput{
    width: 80px;
}

& button.deleteBtn{
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
}
`

export const Cutombutton = styled.button`
cursor: pointer;
background-color: transparent;
border: 1px solid var(--point-green-color);
padding: 4px 8px;
margin-top: 10px;
`