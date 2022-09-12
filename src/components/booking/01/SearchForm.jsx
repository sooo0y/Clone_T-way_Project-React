import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import location from "../../../assert/booking/01/location.png";
import img1 from "../../../assert/booking/01/img1.png";
import img2 from "../../../assert/booking/01/img2.png";
import img3 from "../../../assert/booking/01/img3.png";
import img4 from "../../../assert/booking/01/img4.png";
import img5 from "../../../assert/booking/01/img5.png";
import plus from "../../../assert/booking/01/-.png";
import minus from "../../../assert/booking/01/+.png";

const SearchForm = () => {
  const navigate = useNavigate();

  return (
    <StSearchForm>
      <Ui1>
        <Form1>
          <p />
          <div>
            <label>출발지</label>
            <input placeholder="도시/공항" />
            <a />
          </div>
        </Form1>

        <Form2>
          <p />
          <div>
            <label>도착지</label>
            <input placeholder="도시/공항" />
            <a />
          </div>
        </Form2>

        <Form3>
          <p />
          <div>
            <label>탑승일</label>
            <input placeholder="YYYY-MM-DD" />
            <a />
          </div>
        </Form3>
      </Ui1>

      <Ui2>
        <Form4>
          <p />
          <div>
            <div>
              <label>성인</label>
              <div>
                <Plus />
                <input value="1" />
                <Minus />
              </div>
            </div>

            <div>
              <label>소아</label>
              <div>
                <Plus />
                <input value="1" />
                <Minus />
              </div>
            </div>
            <div>
              <label>유아</label>
              <div>
                <Plus />
                <input value="1" />
                <Minus />
              </div>
            </div>
          </div>
        </Form4>
      </Ui2>

      {/* <button onClick={() => navigate("/detail")}>예매하기</button> */}
    </StSearchForm>
  );
};

export default SearchForm;

const StSearchForm = styled.div`
  margin: 0 auto;
  width: 1200px;
  margin-top: 40px;
  list-style: none;

  & label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(51, 51, 51);
  }

  & input {
    padding: 0px;
    width: 260px;
    height: 36px;
    font-size: 20px;
    background: none;
    vertical-align: middle;
    line-height: 1.5;
    border: none;
    border-bottom: 1px solid gray;
  }

  & span {
    position: absolute;
    width: 20px;
    height: 20px;
    color: rgb(49, 49, 49);
    cursor: pointer;
    left: 350px;
  }

  & p {
    display: inline-block;
    top: 0px;
    left: 0px;
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: rgb(204, 204, 204);
    border-radius: 50%;
  }

  & button {
    text-align: center;
    padding: 17px 40px;
    min-width: 170px;
    min-height: 60px;
    font-size: 20px;
    border-radius: 3px;
    background-color: rgb(210, 44, 38);
    border: 1px solid rgb(210, 44, 38);
    color: rgb(255, 255, 255);
    cursor: pointer;
    margin-left: 550px;
    margin-top: 80px;
  }
`;

const Ui1 = styled.div`
  display: flex;
  gap: 25px;
  border-top: 1px solid rgb(204, 204, 204);
  padding-top: 60px;

  & div {
    margin-left: 20px;
  }
`;

const Ui2 = styled.div`
  display: flex;
  gap: 50px;
  border-bottom: 1px solid rgb(204, 204, 204);
  padding-bottom: 60px;
  margin-left: 20px;
`;

const Form1 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  & a {
    background: url(${location}) 50% 50% no-repeat;
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 1;
    transform: translateY(5px);
    transform: translateX(-20px);
    color: rgb(49, 49, 49);
    cursor: pointer;
  }

  & p {
    background-image: url(${img1});

    & clicked {
      
    }
  }
`;

const Form2 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  & a {
    background: url(${location}) 50% 50% no-repeat;
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    text-indent: -9999px;
    z-index: 1;
    transform: translateY(0px);
    transform: translateX(-20px);
    color: rgb(49, 49, 49);
    text-decoration: none;
    cursor: pointer;
  }

  & p {
    background-image: url(${img2});
  }
`;

const Form3 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  & a {
    background: url(${img4}) 50% 50% no-repeat;
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    text-indent: -9999px;
    z-index: 1;
    transform: translateY(0px);
    transform: translateX(-20px);
    color: rgb(49, 49, 49);
    text-decoration: none;
    cursor: pointer;
  }

  & p {
    background-image: url(${img3});
  }
`;

const Form4 = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  margin-top: 20px;

  & p {
    background-image: url(${img5});
    /* background-color: rgb(210, 44, 38); */
  }

  & input {
    padding: 0px;
    width: 75px;
    height: 30px;
    font-size: 20px;
    color: rgb(128, 128, 128);
    text-align: center;
    border: 0px;
  }

  & div {
    display: flex;
    gap: 15px;
  }

  & div > div {
    display: inline-block;
  }

  & div > div > div {
    margin-top: 10px;
    width: 150px;
    height: 30px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 3px;
  }
`;

const Plus = styled.a`
  display: inline-block;
  width: 36px;
  height: 30px;
  vertical-align: middle;
  background: url(${minus}) 50% 50% no-repeat;
  border-right: 1px solid rgb(204, 204, 204);
  text-indent: -9999px;
`;

const Minus = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  border-left: 1px solid rgb(204, 204, 204);
  background: url(${plus}) 50% 50% no-repeat;
  text-indent: -9999px;
  color: rgb(49, 49, 49);
  text-decoration: none;
  cursor: pointer;
`;
