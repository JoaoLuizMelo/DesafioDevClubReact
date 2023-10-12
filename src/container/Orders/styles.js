import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;

`;

export const Container = styled.div`
width: 414px;

background: #0A0A10;
display: flex;
flex-direction:column;
padding:10px 36px;

li{
    color: white;
}
`;

export const Tittle = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
color: #FFFFFF;
text-align:center;
margin-bottom:75px;
margin-top:30px;
`;


export const Button = styled.button`
margin-top:50px;
width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;
border: none;


cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: .5;
    }

`;

export const Img = styled.img`

`;

export const List = styled.li`
width: 342px;
height: 101px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
list-style-type: none;
padding: 13px 27px;
display: flex;
flex-direction:row;
justify-content: space-between;


margin:10px 0 ;

button{
    background:transparent;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
    &:active{
        opacity: .5;
    }

    
}

div{
    display: flex;
    flex-direction:column;
    gap:29px;
}

`;
