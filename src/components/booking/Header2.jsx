import React from "react";
import styled from "styled-components";
import logo from "../../assert//booking/logo.png";
import logoBar from "../../assert//booking/logobar.png";

const Header2 = () => {

  return (
    <StHeader2>
      <div>
        <a href="/">
          <h1>t'way</h1>
        </a>
      </div>
    </StHeader2>
  );
};

export default Header2;

const StHeader2 = styled.div`
  margin: 0 auto;
  height: 55px;
  background-image: url(${logoBar});
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-position: 100% 0px;
  border-bottom: 1px solid rgb(227, 227, 227);

  & div {
    width: 1200px;
    margin: 0 auto;
  }
  
  & a {
    color: rgb(49, 49, 49);
    text-decoration: none;
    cursor: pointer;
    float: left;
  }
  /* & h1 {
    cursor: pointer;
    text-indent: -9999px;
    margin-top: 25px;
    width: 75px ;
    height: 30px ;
    background: url(${logo}); 
  } */

  & h1 {
    margin-top: 14px ;
    margin-left: 0 ;
    width: 74px ;
    height: 30px ;
    background: url(${logo}) no-repeat 0 0 ;
    text-indent: -9999px;
  }
`;
