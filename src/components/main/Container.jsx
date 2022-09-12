import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
const Container = () => {
    return (
        <>
            <StService>
                <StTitle>
                    <h1>부가서비스</h1>
                </StTitle>
                <div>
                    <StServiceBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv01.png" alt="" />
                            <p>부가서비스번들</p>
                        </StImg>
                        </StBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv02.png" alt="" />
                            <p>수하물 추가구매</p></StImg>
                        </StBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv03.png" alt="" />
                            <p>사전좌석구매</p></StImg></StBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv04.png" alt="" />
                            <p>기내식 사전주문</p></StImg></StBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv05.png" alt="" />
                            <p>면세품 & t`shop</p></StImg></StBox>
                        <StBox><StImg><StIm src="https://contents-image.twayair.com/homepage/images/main/img_srv07.png" alt="" />
                            <p>원클릭 여행보험</p></StImg>
                        </StBox>
                    </StServiceBox>
                </div>
            </StService>
            <StServices>
                <StInner>
                    <StTitle>
                        <h1>제휴서비스</h1>
                    </StTitle>
                    <div>
                        <StJaFlex>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff01.png" alt="" /></StJaImg>
                                <h3>호텔</h3>
                            </StLiBox>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff02.png" alt="" /></StJaImg>
                                <h3>렌터카</h3>
                            </StLiBox>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff03.png" alt="" /></StJaImg>
                                <h3>쇼핑 편의</h3>
                            </StLiBox>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff04.png" alt="" /></StJaImg>
                                <h3>액티비티</h3>
                            </StLiBox>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff05.png" alt="" /></StJaImg>
                                <h3>금융 여행자보험</h3>
                            </StLiBox>
                            <StLiBox><StJaImg><img src="https://contents-image.twayair.com/homepage/images/main/ico_main_aff06.png" alt="" /></StJaImg>
                                <h3>와이파이</h3>
                            </StLiBox>

                        </StJaFlex>
                    </div>
                    <StSlide>
                        <div>
                            <img src="https://contents-image.twayair.com/contents/2022/0224/386844ba-b61d-448e-947a-eb7db24562a1.png" alt="" />
                        </div>
                        <StImgInner>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay
                                spaceBetween={0}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide><StEffect><img src="https://contents-image.twayair.com/contents/2020/0408/ae4f9b7e-cedf-41d2-a8e0-c5abf3af2879.jpg" alt="" />
                                    <StSlideTit>제주 렌트카</StSlideTit>
                                    <p>제주지역 차량 보유대수 1위! 똑똑한 선택! 즐거운 여행!</p>
                                </StEffect></SwiperSlide>
                                <SwiperSlide><StEffect><img src="https://contents-image.twayair.com/contents/2020/0408/ae4f9b7e-cedf-41d2-a8e0-c5abf3af2879.jpg" alt="" />
                                    <StSlideTit>제주 렌트카</StSlideTit>
                                    <p>제주지역 차량 보유대수 1위! 똑똑한 선택! 즐거운 여행!</p>
                                </StEffect></SwiperSlide>
                                <SwiperSlide><StEffect><img src="https://contents-image.twayair.com/contents/2020/0408/ae4f9b7e-cedf-41d2-a8e0-c5abf3af2879.jpg" alt="" />
                                    <StSlideTit>제주 렌트카</StSlideTit>
                                    <p>제주지역 차량 보유대수 1위! 똑똑한 선택! 즐거운 여행!</p>
                                </StEffect></SwiperSlide>
                                <SwiperSlide><StEffect><img src="https://contents-image.twayair.com/contents/2020/0408/ae4f9b7e-cedf-41d2-a8e0-c5abf3af2879.jpg" alt="" />
                                    <StSlideTit>제주 렌트카</StSlideTit>
                                    <p>제주지역 차량 보유대수 1위! 똑똑한 선택! 즐거운 여행!</p>
                                </StEffect></SwiperSlide>

                            </Swiper>
                        </StImgInner>
                    </StSlide>
                </StInner>
            </StServices>
        </>
    )
}

export default Container

const StService = styled.div`
    width: 100%;
    padding: 50px 0;
    
`
const StTitle = styled.div`
    width: 1200px;
    margin: 0 auto;
    text-align: center;
`
const StServiceBox = styled.ul`
    width: 1200px;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    list-style:none;
    position: relative;
`
const StBox = styled.li`
    width: 180px;
    height: 245px;
    display: flex;
    align-items: center;
    list-style:none ;
    align-items: center;
`
const StImg = styled.div`
    width: 100%;
    height: 200px;
    
    background-color: #f3f3f3;
    text-align: center;
    transition: all 0.3s;
    :hover{
        padding: 30px 0px;
        background-color: #d22c26;
        color: #fff;
    }
    
`
const StIm = styled.img`
    padding-top: 35px;
`
const StServices = styled.div`
    width: 100%;
    padding: 50px 0;
    background-color: #eee;
`
const StSlide = styled.div`
    display: flex;
    gap: 30px;
`
const StInner = styled.div`
    width: 1200px;
    margin:  0 auto;
`
const StImgInner = styled.div`
border-top: 2px solid #000;
width: 852px;
    padding-top: 50px;
`
const StEffect = styled.div`
width: 380px;
    transition: all 0.3s;
    :hover{
        border: 5px solid #d22c26;
        border-radius: 10px;
    }
`
const StSlideTit = styled.strong`
    display: block;
    color: #222;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 900;
`
const StJaImg = styled.div`
padding: 20px;
    border-radius: 50%;
    background-color: #fff;
    :hover{
        background-color:#d22c26 ;
    }
`
const StJaFlex = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
`
const StLiBox = styled.li`
    text-align: center;
    list-style: none;
`
