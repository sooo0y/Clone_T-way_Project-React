import React from "react";
import styled from "styled-components";

const Footer2 = () => {
  return (
    <StFooter2>
      <div>
        <Span1>티웨이 항공 예약센터</Span1>
        <Span2>1688 - 8686</Span2>
        <Span3>07:00 ~ 19:00</Span3>
      </div>

      <div>
        <copyright>Copyright ⓒ 2019 t’way Air. All Rights Reserved.</copyright>
      </div>
    </StFooter2>
  );
};

export default Footer2;

const StFooter2 = styled.div`
  border-top: 0px;
  background-color: rgb(245, 245, 245);
  padding-left: 50px;
  clear: both;
  display: block;
  margin: 0 auto;
  margin-top: 100px;

  & div {
    width: 1200px;
    margin: 0 auto;
    padding: 30px;
  }

  & copyright {
    padding: 10px;
  }
`;

const Span1 = styled.span`
  background-color: rgb(255, 255, 255);
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 700;
  color: rgb(26, 26, 26);
  text-align: center;
  border-radius: 30px;
  display: inline-block;
  vertical-align: middle;
`;

const Span2 = styled.span`
  color: rgb(102, 102, 102);
  font-size: 20px;
  margin-left: 15px;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
`;

const Span3 = styled.span`
  margin-left: 20px;
  font-size: 15px;
  color: rgb(26, 26, 26);
  vertical-align: middle;
`;
