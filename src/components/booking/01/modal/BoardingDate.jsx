import React from "react";
import styled from "styled-components";

const BoardingDate = () => {

  return (
    <StBoardingDate>
    <input type="date"/>
    </StBoardingDate>
  );
}

export default BoardingDate;

const StBoardingDate = styled.div`
  position: absolute;
`;