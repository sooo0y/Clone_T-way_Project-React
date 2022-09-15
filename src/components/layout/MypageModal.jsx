import React from 'react'
import styled from 'styled-components'


const MypageModal = () => {
    return (
        <StModal>

            <StModalBox>
                <StClose><StCloseButton></StCloseButton></StClose>
                <Stp>이희수 고객님</Stp>
                <Stp1>티웨이항공 홈페이지를 방문해 주셔서 대단히 감사합니다.</Stp1>
                <div>
                <div><StButton>나의 예약</StButton></div>
                <div><StButton1>로그아웃하기</StButton1></div>
                </div>
            </StModalBox>
        </StModal>
    )
}

export default MypageModal

const StModal = styled.div`
width: 100%;
height: 100%;
    position: fixed;
    z-index: 10000;
    background-color: rgba(0,0,0,0.2);
`
const StModalBox = styled.div`
    width: 560px;
    height: 549px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    flex-direction: column;
    margin: 500px auto;
    
    background-color:  #fff;

`
const StButton = styled.button`
    width: 500px;
    height: 60px;
    font-size: 20px;
    background-color: #fff;
    border: 1px solid #b0b0b0;
    cursor: pointer;
    margin-bottom: 10px;

`
const StButton1 = styled.button`
    width: 500px;
    height: 60px;
    color: #fff;
    font-size: 20px;
    background-color: #d22c26;
    border:none;
    cursor: pointer;

`
const Stp = styled.p`
    font-size: 24px;
    font-weight: 500;
`
const Stp1 = styled.p`
    font-size: 20px;
   
`
const StClose = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 100%;
height: 40px;
margin-bottom: 70px;
    
`
const StCloseButton = styled.button`
border: none;
width: 50px;
height: 50px;
margin-right: 10px;
margin-top: 20px;
background-color: transparent;
background: url("//contents-image.twayair.com/homepage/images/ico/ico_layer_close.png") no-repeat center center;
    
`