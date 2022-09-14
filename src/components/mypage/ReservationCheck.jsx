import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { __getReservationCheck } from '../../redux/config/module/mypagecheck'
const ReservationCheck = () => {
  const data = useSelector((state)=> state.ReservationCheck.data)

  console.log(data)
  const dispatch = useDispatch()
  const [number, setNumber] = useState()
  const onChangeHandler = (event) => {
    const comm = event.target.value;
    setNumber(comm)

  };
  console.log(number)
  return (
    <StContainer >
      <StTit><h1>마이 페이지</h1></StTit>
      <div>
        <StCheck>예약 조회</StCheck>
        <tbody>
          <tr>
            <StTh >예약 번호</StTh>
            <StTd>

              <StInput maxlength="22" name="pnrNumber" type="text" placeholder="예약 번호를 입력하세요.(6자리)" title="예약 번호를 입력하세요.(6자리)" onChange={onChangeHandler} />

            </StTd>
          </tr>
        </tbody>
        <StButtonWrap>
          <StButton type="button">초기화</StButton>
          <StButton1 onClick={() => {
            dispatch(__getReservationCheck(number))
          }} type="button">예약 조회</StButton1>
        </StButtonWrap>
        <div >


          <img alt="더라운지_비행기탑승대기시간 현명하게 보내는 방법" src="https://contents-image.twayair.com/contents/2022/0706/82f7802c-0a0c-4de9-8203-d72869600768.png" />

        </div>
        <div >
          <StSubDesc >여행사/소셜커머스/예약센터/공항에서 예약한 내역조회는 <Sta >예약 정보로 찾기</Sta>에서 조회해 주시기 바랍니다.</StSubDesc>
          <StTable >
            {/* <caption>예약조회 - 예약번호, 탑승일, 노선, 출발 시간, 도착 시간, 총 탑승객,
									상태로 구성되었습니다. 선택한 목록의 상세내역을 보실려면 스페이바를 이용해 주세요.</caption> */}
            <colgroup>
              <col style={{ width: "130px" }} />
              <col style={{ width: "150px" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "130px" }} />
              <col style={{ width: "130px" }} />
              <col style={{ width: "130px" }} />
              <col style={{ width: "130px" }} />
            </colgroup>
            <StCheckTr>
              <tr>
                <StCheckTh >예약 번호</StCheckTh>
                <StCheckTh >탑승일</StCheckTh>
                <StCheckTh >노선</StCheckTh>
                <StCheckTh >출발</StCheckTh>
                <StCheckTh >도착</StCheckTh>
                <StCheckTh >총 탑승객</StCheckTh>
                <StCheckTh >상태</StCheckTh>
              </tr>
            </StCheckTr>
            <tbody>
              <tr>
                <StTbody colspan="1">{data.bookingNum}</StTbody>
                <StTbody colspan="2">조회 결과가 없습니다.</StTbody>
                <StTbody colspan="3">{data.flyNum}</StTbody>
                <StTbody colspan="4">{data.startPoint}</StTbody>
                <StTbody colspan="5">{data.endPoint}</StTbody>
                <StTbody colspan="6"></StTbody>
                <StTbody colspan="7">조회 결과가 없습니다.</StTbody>
              </tr>
            </tbody>
          </StTable>
        </div>
      </div>
    </StContainer >
  )
}

export default ReservationCheck

const StContainer = styled.div`
  width: 1200px;
  margin:  0 auto;
`
const StTit = styled.div`
  text-align: center;
  font-size: 22px;
  padding: 30px 0;
`
const StCheck = styled.div`
width: 100%;
  background-color: #fff;
    border-top: 4px solid #d22c26;
    border-left: 1px solid #ccc;
    border-bottom: 0;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 50px;
`
const StTh = styled.th`
  padding: 20px 30px;
    font-size: 16px;
    font-weight: normal;
    color: #4d4d4d;
    text-align: left;
    vertical-align: middle;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
`
const StTd = styled.td`
width: 90%;
  position: relative;
    padding: 14px 20px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: left;
    border-top: 1px solid #313131;
    vertical-align: middle;
    border-bottom: 1px solid #e0e0e0;
`
const StInput = styled.input`
width: 500px;
  padding: 0 20px;
    height: 46px;
    font-size: 16px;
    color: #1a1a1a;
    border: 1px solid #ccc;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

`
const StButtonWrap = styled.div`
  position: relative;
    margin-top: 40px;
    text-align: center;
    margin-bottom: 40px;
`
const StButton = styled.button`
  padding: 15px 40px;
    min-width: 150px;
    min-height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 1.1;
    background-color: #fff;
    border: 1px solid #b0b0b0;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    margin: 5px;
`
const StButton1 = styled.button`
  padding: 15px 40px;
    min-width: 150px;
    min-height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 1.1;
    color: #fff;
    background-color: #7d756d;
    border: 1px solid #7d756d;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    margin: 5px;
`
const StTable = styled.table`
  width: 100%;
    border-top: 1px solid #1a1a1a;
    
`
const StCheckTh = styled.th`
  padding: 20px 14px;
    font-size: 16px;
    font-weight: normal;
    color: #4d4d4d;
    text-align: center;
    vertical-align: middle;
    letter-spacing: -1px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
`
const StCheckTr = styled.thead`
    border-bottom: 1px solid #e0e0e0;
    background-color: #f5f5f5;
`
const StTbody = styled.td`
  padding: 20px 14px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: center;
    vertical-align: middle;
    line-height: 24px;
    letter-spacing: -1px;
border-bottom: 1px solid #eee;
    background-color: #fff;
`
const Sta = styled.a`
  display: inline-block;
    color: #d22c26;
    text-decoration: none;
    border-bottom: 1px solid #d22c26;
`
const StSubDesc = styled.p`
  font-size: 14px;
  color: #313131;
  margin-top: 60px;
`