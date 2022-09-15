import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../../assert/booking/02/img.png";
import fly from "../../../assert/booking/02/fly.png";

const DetailSearchList = ({ ticket }) => {
  const navigate = useNavigate();

  // 202209111930 으로 받아오는 데이터를 19:30으로 변환
  const startTime = `${ticket.startTime.slice(8,10)}:${ticket.startTime.slice(10,12)}`
  const endTime = `${ticket.endTime.slice(8,10)}:${ticket.endTime.slice(10,12)}`

  // 71900 이라는 숫자로 받아오는 데이터를 문자열로 변환 후 천단위 콤마 추가
  // const charge = `${String(ticket.charge).slice(0,2)},${String(ticket.charge).slice(2)}`
  const charge = ticket.charge.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Ul>
      <li onClick={() => navigate("/passenger")}>
        <SelectInfo>
          <ServiceSectionBox>
            <PlanType>
              <Btn1>{ticket.flyNum}</Btn1>
              <Btn2>B737-800</Btn2>
            </PlanType>

            <FirstService>
              <strong>{startTime}</strong>
              <span>SMP</span>
            </FirstService>

            <ServiceExp>
              <P1>{ticket.takeTime}</P1>
              <P2>
                <span>직항</span>
              </P2>
            </ServiceExp>

            <LastService>
              <strong>{endTime}</strong>
              <span>PUS</span>
            </LastService>

            <PriceInfo>
              <div>비즈니스</div>
              <span>KRW</span>
              <strong>{charge}</strong>
            </PriceInfo>
          </ServiceSectionBox>
        </SelectInfo>
      </li>
    </Ul>
  );
};

export default DetailSearchList;

const SelectInfo = styled.div`
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  justify-content: stretch;
`;

const Ul = styled.ul`
padding: 0;
`;

const ServiceSectionBox = styled.div`
  flex: 1;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: center;
`;

const PlanType = styled.div`
  display: inline-block;
  padding-top: 9px;
`;

const Btn1 = styled.div`
  color: #1a1a1a;
  font-size: 16px;
  background: url(${img}) no-repeat 0 0;
  display: block;
  text-decoration: underline;
  padding-left: 25px;
  line-height: 20px;
  cursor: pointer;
`;

const Btn2 = styled.div`
  display: block;
  font-size: 14px;
  text-decoration: underline;
  padding-left: 25px;
  color: #4d4d4d;
  line-height: 20px;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`;

const FirstService = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    font-size: 35px;
    display: block;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    line-height: 36px;
  }

  & span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: center;
    line-height: 20px;
  }
`;

const ServiceExp = styled.div`
  width: 155px;
  height: 55px;
  background: url(${fly}) no-repeat 100% 35%;
  vertical-align: top;
  display: inline-block;
`;

const P1 = styled.div`
  font-size: 14px;
  color: #4d4d4d;
`;

const P2 = styled.div`
  margin-top: 17px;
  font-size: 14px;
  color: #4d4d4d;
`;

const LastService = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    font-size: 35px;
    display: block;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    line-height: 36px;
  }

  & span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: center;
    line-height: 20px;
  }
`;

const PriceInfo = styled.div`
  width: 350px;
  border-left: 1px dashed rgb(204, 204, 204);
  text-align: center;
  position: relative;
  font-size: 14px;
  color: rgb(26, 26, 26);
  display: block;

  & div {
    color: rgb(115, 155, 71);
    font-size: 16px;
    font-weight: bold;
  }

  & span {
    margin: -20px;
  }

  & strong {
    font-size: 30px;
    font-weight: bold;
    color: rgb(26, 26, 26);
  }
`;
