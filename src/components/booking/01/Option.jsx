import React from "react";
import styled from "styled-components";

const Option = () => {
  return (
    <StOption>
      <ui>
        <Li>
          <label>왕복</label>
        </Li>
        <Li2>
          <label><b>편도</b></label>
        </Li2>
        <Li3>
          <label>다구간</label>
        </Li3>
      </ui>
    </StOption>
  );
};

export default Option;

const StOption = styled.div`
  display: flex;
  margin: 0 auto;
    width: 1200px;
  & ui {
    display: inline-block;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 30px;
  }
  & label {
    margin: 0px;
    padding: 0px;
    height: auto;
  }
`;

const Li = styled.li`
  float: left;
  position: relative;
  padding: 15px 20px;
  min-width: 120px;
  text-align: center;
  box-sizing: border-box;
  list-style: none;
`;

const Li2 = styled.li`
  background-color: rgb(210, 44, 38);
  color: rgb(255, 255, 255);
  border-radius: 30px;
  list-style: none;
  float: left;
  position: relative;
  padding: 15px 20px;
  min-width: 120px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  & label {
    cursor: pointer;
  }
`;

const Li3 = styled.li`
  float: right;
  position: relative;
  padding: 15px 20px;
  min-width: 120px;
  text-align: center;
  box-sizing: border-box;
  list-style: none;
`;
