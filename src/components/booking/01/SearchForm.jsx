import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import location from "../../../assert/booking/01/location.png";
import img1 from "../../../assert/booking/01/img1.png";
import img2 from "../../../assert/booking/01/img2.png";
import img3 from "../../../assert/booking/01/img3.png";
import img4 from "../../../assert/booking/01/img4.png";
import img5 from "../../../assert/booking/01/img5.png";
import plus from "../../../assert/booking/01/-.png";
import minus from "../../../assert/booking/01/+.png";
// import StartPoint from "./modal/StartPoint";
// import EndPoint from "./modal/EndPoint";
// import BoardingDate from "./modal/BoardingDate";
import select from "../../../assert/booking/03/select.png";
import { setCookie } from "../../../shared/Cookie";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  // Counter
  // const [adult, setAdult] = useState(0);
  // const [infant, setInfant] = useState(0);
  // const [child, setChild] = useState(0);

  const countPlusHandler = () => {
    setCount(count + 1);
  };
  const countMinusHandler = () => {
    setCount(count - 1);
  };

  // const infantPlusHandler = () => {
  //   setInfant(infant +1);
  // }
  // const infantMinusHandler = () => {
  //   setInfant(infant - 1)
  // }
  // const childPlusHandler = () => {
  //   setChild(child +1);
  // }
  // const childMinusHandler = () => {
  //   setChild(child - 1)
  // }

  // 출발지, 도착지, 날짜 각각 모달

  // const [startModal, setStartModal] = useState(false);
  // const [endModal, setEndModal] = useState(false);
  // const [dateModal, setDateModal] = useState(false);

  // const onStartModalHandler = () => {
  //   setStartModal(!startModal);
  // };

  // const onEndModalHandler = () => {
  //   setEndModal(!endModal);
  // };

  // const onDateModalHandler = () => {
  //   setDateModal(!dateModal);
  // };

  // 출발지, 도착지 모달 열어서 선택했을 때 값 띄우기
  // const startOptions = [
  //   { value: 0, name: "도시/공항" },
  //   { value: 1, name: "여수 PSU" },
  //   { value: 2, name: "김포 GMP" },
  //   { value: 3, name: "대구 TAE" },
  //   { value: 4, name: "청주 CJJ" },
  // ];

  // const endOptions = [
  //   { value: 0, name: "도시/공항" },
  //   { value: 1, name: "제주 CJU" },
  // ];

  // const [startNumber, setStartNumber] = useState(0);
  // const [endNumber, setEndNumber] = useState(0);

  // const initialState = {
  //   count: 0,
  //   flyNum: "",
  //   startPoint: "",
  //   endPoint: "",
  //   startTime: "",
  //   endTime: "",
  //   takeTime: "",
  //   charge: "",
  //   startDay: "",
  //   // passenger: [
  //   //   {
  //   //     gender: "",
  //   //     country: "",
  //   //     name: "",
  //   //     birth: "",
  //   //     email: "",
  //   //     number: "",
  //   //   },
  //   // ],
  // };

  // const [schedule, setSchedule] = useState(initialState);

  const [count, setCount] = useState(0);
  const [endPoint, setEndPoint] = useState("");
  const [startDay, setStartDay] = useState("");
  const [startPoint, setStartPoint] = useState("");

  const onCountChangeHandler = (e) => {
    setCount(e.target.value);
  };
  const onEndPointChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };
  const onStartDayChangeHandler = (e) => {
    // 2022-09-22로 들어오는 데이터를 20220922로 변경
    const day = e.target.value.replace(/-/g, "");
    setStartDay(day);
  };
  const onStartPointChangeHandler = (e) => {
    setStartPoint(e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // setSchedule(initialState);
    setCookie("count", count);
    setCookie("startPoint", startPoint);
    setCookie("endPoint", endPoint);
    setCookie("startDay", startDay);
    navigate('/detail');
  };

  return (
    <StSearchForm onSubmit={onSubmitHandler}>
      <Ui1>
        <Form1>
          <p />
          <div>
            <label>출발지</label>
            <Select
              name="startPoint"
              // value={schedule.startPoint}
              onChange={onStartPointChangeHandler}
              required
            >
              <option value="">도시/ 공항</option>
              <option value="NAARKJY">여수 PSU</option>
              <option value="NAARKSS">김포 GMP</option>
              <option value="NAARKTN">대구 TAE</option>
              <option value="NAARKTU">청주 CJJ</option>
            </Select>
            {/* <input
              name="startPoint"
              value={schedule.startPoint}
              onChange={onChangeHandler}
            />
            <a onClick={onStartModalHandler} />
            {startModal == true ? (
              <StartPoint
                setStartModal={setStartModal}
                setStartNumber={setStartNumber}
              />
            ) : null} */}
          </div>
        </Form1>

        <Form2>
          <p />
          <div>
            <label>도착지</label>
            <Select
              name="endPoint"
              // value={schedule.endpoint}
              onChange={onEndPointChangeHandler}
              required
            >
              <option value="">도시/ 공항</option>
              <option value="제주">제주 CJU</option>
            </Select>
            {/* <input
              value={endOptions[endNumber].name}
              onChange={onChangeHandler}
            />
            <a onClick={onEndModalHandler} />
            {endModal == true ? (
              <EndPoint setEndModal={setEndModal} setEndNumber={setEndNumber} />
            ) : null} */}
          </div>
        </Form2>

        <Form3>
          <p />
          <div>
            <label>탑승일</label>
            <Date
              type="date"
              name="startDay"
              // value={schedule.startDay}
              onChange={onStartDayChangeHandler}
              placeholder="YYYY-MM-DD"
              required
              min="2022-09-15"
              max="2022-10-15"
            />
            {/* <input placeholder="YYYY-MM-DD" />
            <a onClick={onDateModalHandler} />
            {dateModal == true ? (
              <BoardingDate
                setDateModal={setDateModal}
                onEndModalHandler={onDateModalHandler}
              />
            ) : null}*/}
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
                <Plus onClick={countMinusHandler} />
                <input
                  type="number"
                  name="count"
                  value={count}
                  onChange={onCountChangeHandler}
                  required
                  min="1"
                />
                <Minus onClick={countPlusHandler} />
              </div>
            </div>

            {/* <div>
              <label>소아</label>
              <div>
                <Plus
                onClick={infantMinusHandler}
                />
                <input value={infant} />
                <Minus
                onClick={infantPlusHandler}
                />
              </div>
            </div>
            <div>
              <label>유아</label>
              <div>
                <Plus
                onClick={childMinusHandler}
                />
                <input value={child} />
                <Minus
                 onClick={childPlusHandler}
                />
              </div>
            </div> */}
          </div>
        </Form4>
      </Ui2>
      <button>예매하기</button>
    </StSearchForm>
  );
};

export default SearchForm;

const StSearchForm = styled.form`
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
    width: 19px;
    height: 55px;
    text-indent: -9999px;
    z-index: 1;
    transform: translateX(-23px);
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
    margin-left: 13px;
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
  cursor: pointer;
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

const Select = styled.select`
  padding: 0px 30px 0px 15px;
  margin-top: 10px;
  height: 46px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  appearance: none;
  width: 250px;
  vertical-align: middle;
  line-height: 1.5;
  background: url(${select}) right 15px center no-repeat;
  cursor: pointer;
`;

const Date = styled.input`
  padding: 0px 30px 0px 15px;
  margin-top: 10px;
  height: 46px;
  font-size: 16px;
  color: rgb(130, 130, 130);
  border: 1px solid rgb(204, 204, 204);
  /* background-color: rgb(255, 255, 255); */
  box-sizing: border-box;
  appearance: none;
  width: 250px;
  vertical-align: middle;
  line-height: 1.5;
  background: url(${img4}) right 15px center no-repeat;
  cursor: pointer;
`;
