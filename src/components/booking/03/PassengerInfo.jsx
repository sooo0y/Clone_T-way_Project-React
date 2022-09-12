import React from "react";
import styled from "styled-components";

const PassengerInfo = () => {
  return (
    <StPassengerInfo>
      <h3>탑승자 정보</h3>
      <div>
        <span>신분증에 기재된 이름, 생년월일을 작성하세요.</span>
      </div>
    </StPassengerInfo>
  );
};

export default PassengerInfo;

const StPassengerInfo = styled.div`
  display: block;
  margin: 0 auto;
  width: 90%;
  padding-bottom: 30px;

  & h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 30px;
    color: rgb(26, 26, 26);
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  & span {
    margin-top: -15px;
    display: block;
    float: left;
    font-size: 14px;
    color: rgb(26, 26, 26);
  }
`;