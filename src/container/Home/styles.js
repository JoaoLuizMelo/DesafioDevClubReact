import styled from "styled-components";

export const Body = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
padding-top:100px;

`;

export const Container = styled.div`
width: 414px;
height: 896px;
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

export const Legend = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left:15px;

`;


export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
margin-bottom: 25px ;
padding: 15px;
outline:none
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
border: none;
outline: none;
`;

export const Button = styled.button`
margin-top:50px;
width: 342px;
height: 68px;
background: #D93856;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;


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
