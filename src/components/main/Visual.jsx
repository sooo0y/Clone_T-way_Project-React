import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';

import 'swiper/css/pagination';
const Visual = () => {
    return (
        <div>
            
            <StMainVideo>
                <video autoPlay muted >
                    <source type='video/mp4' src="https://contents-image.twayair.com/contents/2022/0318/44a544c5-d7a8-45c0-b5ad-bbfa574fa09c.mp4" />
                </video>
            </StMainVideo>
        
            <StSwiper>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}

                    autoplay
                    spaceBetween={50}

                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><StImg src="https://contents-image.twayair.com/contents/2022/0826/bbd54eb8-04a3-4cfd-9e68-0fc6bdc78985.png" alt="" /></SwiperSlide>
                    <SwiperSlide><StImg src="https://contents-image.twayair.com/contents/2022/0905/0cc6d99a-d43c-44a2-9407-372cb7835a42.png" alt="" /></SwiperSlide>
                    <SwiperSlide><StImg src="https://contents-image.twayair.com/contents/2022/0525/cc14bfa7-8582-4acf-93fb-ea9ae24bebac.png" alt="" /></SwiperSlide>
                    <SwiperSlide><StImg src="https://contents-image.twayair.com/contents/2022/0826/bbd54eb8-04a3-4cfd-9e68-0fc6bdc78985.png" alt="" /></SwiperSlide>

                </Swiper>
            </StSwiper>
            <StBookingBox>
            <StBoking>7조 팀프로젝트 T-WAY</StBoking>
            </StBookingBox>
        </div>

    )
}

export default Visual

const StMainVideo = styled.div`
    
    width: 100%;
    height: 576px;
    margin:  0 auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    text-align: center;
`
const StSwiper = styled.div`
    width: 1200px;
    
    margin:  0 auto;
`
const StImg = styled.img`
width: 900px;
height: 156px;
margin: 130px auto;
display: block;
  
`
const StBoking = styled.div`
    margin:  0 auto 150px auto;
    padding: 60px 30px 30px 30px;
    width: 1200px;
    background: white url(//contents-image.twayair.com/homepage/images/main/bg_main_booking02.png) no-repeat 0 0;
    border-radius: 18px;
    box-sizing: border-box;
    text-align: center;
    font-size: 36px;
`
const StBookingBox = styled.div`
    width: 100%;
`