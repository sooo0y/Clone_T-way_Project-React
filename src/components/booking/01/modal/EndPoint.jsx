import React from "react";
import styled from "styled-components";

const EndPoint = ({ setEndNumber }) => {
  return (
    <StEndPoint>
      <div onClick={() => setEndNumber(1)}>
        <h3 value="1">제주</h3>
        <h3>CJU</h3>
      </div>
    </StEndPoint>
  );
};

export default EndPoint;

const StEndPoint = styled.div`
  width: 350px;
  padding: 30px 40px 35px 5px;
  height: 450px;
  position: absolute;
  box-shadow: rgb(255 255 255) 1px 1px 15px;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;

  & div {
    margin: 15px;
    padding: 0 20px;
    background-color: rgb(242, 246, 249);
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-sizing: border-box;
    color: #313131;
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    & h3 {
      padding: 0 30px;
    }
  }
`;
