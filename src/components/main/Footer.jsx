import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <div>
        <StFooterContainer>
            <h1><img src="https://contents-image.twayair.com/homepage/images/common/f_logo.png" alt="" /></h1>
            <div>
                <StMiddleBox>
                    <p>대표이사. 정홍근</p>
                    <p>사업자등록번호. 101-81-94800</p>
                    <p>주소. 서울시 강서구 하늘길 210 국제화물청사 3층</p>
                </StMiddleBox>
                <StMiddleBox>
                    <p>통신판매업신고번호. 2017-서울강서-1292</p>
                    <p>개인정보 관리책임자. 경영본부장 김형이</p>
                </StMiddleBox>
                <p>Copyright ⓒ 2019 t’way Air. All Rights Reserved.</p>
            </div>
            <StImgBox>
                <StImg1 src="http://contents-image.twayair.com/homepage/images/common/WA.png" alt="" />
                <StImg src="http://contents-image.twayair.com/homepage/images/common/ISMS.png" alt="" />
            </StImgBox>
        </StFooterContainer>
    </div>
  )
}

export default Footer

const StFooterContainer = styled.div`
padding-top: 30px;
width: 1200px;
gap: 60px;
margin:  0 auto;
    display: flex;
    justify-content: space-between;
`
const StImgBox = styled.div`
    display: flex;
    align-items: center;
    
`
const StImg = styled.img`
    width: 100px;
    height: 100px;
   
`
const StImg1 = styled.img`
    width: 100px;
    height: 69px;
   
`
const StMiddleBox = styled.div`
    display: flex;
    gap: 30px;
    font-size: 14px;
`