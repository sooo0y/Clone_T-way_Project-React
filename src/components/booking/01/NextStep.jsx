import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import left from "../../../assert/booking/left.png";
import right from "../../../assert/booking/right.png";

const NextStep = () => {

  const navigate = useNavigate();

  return (
    <St>
      <StNextStep>
          <Info>
            <div>
              <Span1>항공운임 등 총액</Span1>
              <Span2>KRW</Span2>
              <Span3>0</Span3>
            </div>
            <Buttons>
              <Button1
                  onClick={() => navigate('/')}>이전 단계</Button1>
              <Button2
              onClick={() => navigate('/detail')}>다음 단계</Button2>
            </Buttons>
          </Info>
      </StNextStep>
    </St>
  );
};

export default NextStep;

const St = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0px auto;
  width: 100%;
`;

const StNextStep = styled.div`
  width: 100%;
  display: inline-block;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 15px;
  position: relative;
  background-color: white;

  & div {
    height: 30px;
    position: relative;
  }
`;

const Info = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0 auto;
`;

const Span1 = styled.span`
  line-height: 33px;
  margin-right: 25px;
  font-size: 18px;
  vertical-align: top;
  display: inline-block;
`;

const Span2 = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: rgb(210, 44, 38);
  line-height: 45px;
  vertical-align: top;
  display: inline-block;
`;

const Span3 = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: rgb(210, 44, 38);
  vertical-align: top;
  display: inline-block;
`;

const Buttons = styled.div`
  position: absolute;
  top: -15px;
`;

const Button1 = styled.button`
  display: inline-block;
  background-image: url(${left});
  background-repeat: no-repeat;
  background-size: 9px 16px;
  background-position: left 20px center;
  border: none;
  border-radius: 0px;
  font-size: 18px;
  font-weight: bold;
  padding: 21px 50px;
  color: rgb(26, 26, 26);
  background-color: rgb(245, 245, 245);
  min-width: 170px;
  min-height: 60px;
  text-align: center;
  line-height: 1.1;
  box-sizing: border-box;
  cursor: pointer;
`;

const Button2 = styled.button`
  display: inline-block;
  background-image: url(${right});
  background-repeat: no-repeat;
  background-size: 9px 16px;
  background-position: right 20px center;
  border: none;
  border-radius: 0px;
  font-size: 18px;
  font-weight: bold;
  padding: 22px 50px;
  background-color: rgb(210, 44, 38);
  color: rgb(255, 255, 255) !important;
  min-width: 170px;
  min-height: 60px;
  text-align: center;
  line-height: 1.1;
  box-sizing: border-box;
  vertical-align: middle;
  cursor: pointer;
`;
