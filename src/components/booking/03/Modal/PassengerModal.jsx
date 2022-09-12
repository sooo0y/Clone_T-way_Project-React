import React from "react";
import styled from "styled-components";
import img3_1 from "../../../../assert/booking/03/img3-1.png";
import select from "../../../../assert/booking/03/select.png";
import star from "../../../../assert/booking/star.png";

const Modal = (props) => {
  return (
    <StPassengerForm>
      <TypeFocus onClick={props.onModalHandler}>
        <span>
          <em>성인 1</em>
          <em> : 김/소연</em>
        </span>
      </TypeFocus>

      <PassengerInfoWrap>
        <TopWrap>
          <Top>
            <input type="checkbox" />
            {/* <label> */}
            <Span1> 회원 본인 탑승</Span1>
            {/* </label> */}
          </Top>
          <Span2>은 필수 입력 항목입니다.</Span2>
        </TopWrap>
      </PassengerInfoWrap>

      <Info>
        <table>
          <colgroup></colgroup>
          <tbody>
            <tr>
              <th>
                성별
                <Star />
              </th>
              <Td1>
                <div>
                  <ul>
                    <Li1>
                      <input type="radio" name="gender" value="male" />
                      <label>남</label>
                    </Li1>
                    <Li2>
                      <input type="radio" name="gender" value="female" />
                      <label>여</label>
                    </Li2>
                  </ul>
                </div>
              </Td1>
            </tr>

            <tr>
              <th>국적</th>
              <Td2>
                <input placeholder="대한민국" />
                <button>국적 검색</button>
              </Td2>
            </tr>

            <tr>
              <th>
                이름
                <Star />
              </th>
              <Td3>
                <input placeholder="성 (Last Name)" />
                <input placeholder="이름 (First Name)" />
                <span>
                  신분증에 기재된 이름과 일치해야 합니다. 영문이름으로 예약시,
                  여권을 지참하시기 바랍니다.
                </span>
              </Td3>
            </tr>

            <tr>
              <th>생년월일</th>
              <Td4>
                <div>
                  <span>
                    <Select1>
                      <option>YYYY</option>
                    </Select1>
                  </span>
                  <span>
                    <Select2>
                      <option>MM</option>
                    </Select2>
                  </span>
                  <span>
                    <Select2>
                      <option>DD</option>
                    </Select2>
                  </span>
                </div>
              </Td4>
            </tr>

            <tr>
              <th>
                이메일
                <Star />
              </th>
              <Td5>
                <span>
                  <input placeholder="이메일 주소 (기재한 메일로 예약 정보 안내)" />
                </span>
              </Td5>
            </tr>

            <tr>
              <th>
                휴대전화
                <Star />
              </th>
              <Td6>
                <div>
                  <span>
                    <select>
                      <option>대한민국 (+82)</option>
                    </select>
                  </span>
                  <span>
                    <input placeholder="휴대전화 번호 입력" />
                  </span>
                </div>
              </Td6>
            </tr>
          </tbody>
        </table>
      </Info>
    </StPassengerForm>
  );
};

export default Modal;

const StPassengerForm = styled.div`
  width: 90%;
  border: 1px solid #ccc;
  list-style: none;
  margin: 0 auto;
`;

const TypeFocus = styled.a`
  font-size: 18px;
  color: rgb(26, 26, 26);
  font-weight: 700;
  background-color: rgb(254, 244, 243);
  display: block;
  padding: 30px 40px;
  text-decoration: none;
  cursor: pointer;
  & span {
    display: block;
    background: url(${img3_1}) right top no-repeat;
  }
`;

const PassengerInfoWrap = styled.div`
  display: block;
  padding: 39px 39px;
  box-sizing: border-box;
`;

const TopWrap = styled.div`
  margin-bottom: 10px;
`;

const Top = styled.span`
  float: left;
  display: block;

  & label {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    padding-left: 32px;
    min-height: 22px;
    vertical-align: middle;
    line-height: 1.4;
    cursor: pointer;
  }
`;

const Span1 = styled.span`
  /* width: 22px;
  height: 22px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0px;
  margin-top: -11px;
  font-size: 0;
  background: url(//contents-image.twayair.com/homepage/images/ico/ico_checkbox.png)
    no-repeat 0 0; */
`;

const Span2 = styled.span`
  float: right;
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
  color: #d22c26;
  background: url(//contents-image.twayair.com/homepage/images/customer/bg_required.png)
    no-repeat left 49%;
  vertical-align: middle;
  margin-top: 3px !important;
`;

const Info = styled.div`
  margin-bottom: 60px;
  padding: 0px 39px;

  & table {
    width: 100%;
    border-top: 1px solid #1a1a1a;
  }

  & th {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    text-align: left;
    vertical-align: middle;
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 30px;
    font-size: 16px;
    font-weight: normal;
    color: #4d4d4d;
    display: table-cell;
    width: 150px;
  }
`;

const Star = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  padding-right: 8px;
  margin-left: 6px;
  background: url(${star}) no-repeat 0 0;
  text-indent: -9999px;
  font-size: 0;
  vertical-align: middle;
`;

const Td1 = styled.td`
  position: relative;
  padding: 0 20px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: table-cell;
  border-collapse: collapse;
  text-indent: initial;

  & div {
    position: relative;
    display: block;
    font-size: 16px;
  }

  & ul {
    float: left !important;
    display: block;
    padding-inline-start: 40px;
  }
`;

const Li1 = styled.li`
  margin-left: -40px;
  float: left;
  position: relative;
  display: list-item;
  list-style: none;

  & input {
    position: absolute;
    width: 120px;
    height: 46px;
    box-sizing: border-box;
    vertical-align: middle;
    margin: 0px;
    padding: 0px;
    color: rgb(49, 49, 49);
    font-size: 14px;
    line-height: 1.5;
    background-color: initial;
    cursor: default;
    appearance: auto;
  }

  & label {
    border-radius: 5px 0px 0px 5px;
    display: inline-block;
    min-width: 120px;
    height: 46px;
    font-size: 16px;
    color: rgb(77, 77, 77);
    text-align: center;
    line-height: 46px;
    border-image: initial;
    margin-right: 0px;
    padding: 0px 10px;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    border: 1px solid rgb(204, 204, 204);
    background-color: white;

    & ~ checked {
      border-color: rgb(125, 117, 109);
      background-color: rgb(125, 117, 109);
    }
  }
`;

const Li2 = styled.li`
  margin-left: -1px;
  float: left;
  position: relative;
  display: list-item;
  list-style: none;

  & input {
    position: absolute;
    width: 120px;
    height: 46px;
    box-sizing: border-box;
    vertical-align: middle;
    margin: 0px;
    padding: 0px;
    color: rgb(49, 49, 49);
    font-size: 14px;
    line-height: 1.5;
    background-color: initial;
    cursor: default;
    appearance: auto;
  }

  & label {
    border-radius: 0 5px 5px 0;
    display: inline-block;
    min-width: 120px;
    height: 46px;
    font-size: 16px;
    text-align: center;
    line-height: 46px;
    border-image: initial;
    margin-right: 0px;
    padding: 0px 10px;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;

    color: rgb(255, 255, 255);
    border-color: rgb(125, 117, 109);
    background-color: rgb(125, 117, 109);
  }
`;

const Td2 = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: #1a1a1a;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #e0e0e0;
  display: table-cell;
  border-collapse: collapse;
  text-indent: initial;

  & input {
    background-color: #f5f5f5;
    color: #1a1a1a;
    padding: 0 20px;
    height: 46px;
    font-size: 16px;
    border: 1px solid #ccc;
    width: 200px;
    vertical-align: middle;
    margin: 0;
    line-height: 1.5;
  }

  & button {
    display: inline-block;
    padding: 12px 20px;
    min-width: 80px;
    min-height: 46px;
    font-size: 16px;
    color: rgb(26, 26, 26);
    text-align: center;
    line-height: 1.1;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(128, 128, 128);
    border-radius: 3px;
    box-sizing: border-box;
    vertical-align: middle;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const Td3 = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid rgb(224, 224, 224);

  & input {
    color: #1a1a1a;
    padding: 0 20px;
    height: 46px;
    font-size: 16px;
    border: 1px solid #ccc;
    width: 200px;
    vertical-align: middle;
    line-height: 1.5;
    margin-right: 5px;
  }

  & span {
    display: inline-block;
    padding-left: 10px;
    font-size: 14px;
    color: rgb(210, 44, 38);
    vertical-align: middle;
    margin-top: 3px;
    background: url(${star}) left 49% no-repeat;
  }
`;

const Td4 = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: table-cell;
  border-collapse: collapse;
  border-spacing: 0px;
  text-indent: initial;

  & span {
    margin-right: 10px !important;
    display: inline-block;
    position: relative;
    min-width: 100px;
  }
`;

const Select1 = styled.select`
  padding: 0px 30px 0px 15px;
  height: 46px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  appearance: none;
  width: 170px;
  vertical-align: middle;
  line-height: 1.5;
  background: url(${select}) right 15px center no-repeat;
`;

const Select2 = styled.select`
  width: 150px;
  padding: 0px 30px 0px 15px;
  height: 46px;
  font-size: 16px;
  color: rgb(26, 26, 26);
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  appearance: none;
  vertical-align: middle;
  line-height: 1.5;
  background: url(${select}) right 15px center no-repeat;
`;

const Td5 = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: #1a1a1a;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #e0e0e0;
  display: table-cell;
  border-collapse: collapse;
  text-indent: initial;

  & span {
    display: inline-block;
    vertical-align: middle;
  }

  & input {
    padding: 0 20px;
    height: 46px;
    font-size: 16px;
    color: #1a1a1a;
    border: 1px solid #ccc;
    background-color: #fff;
    box-sizing: border-box;
    width: 490px !important;
    vertical-align: middle;
    line-height: 1.5;
  }
`;

const Td6 = styled.td`
  position: relative;
  padding: 14px 20px;
  font-size: 16px;
  color: #1a1a1a;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #e0e0e0;
  display: table-cell;
  border-collapse: collapse;
  border-spacing: 0;

  & div {
    display: block;
    color: #1a1a1a;
    text-align: left;
    border-collapse: collapse;
    text-indent: initial;
  }

  & span {
    margin-right: 10px !important;
    display: inline-block;
    position: relative;
    min-width: 100px;
    color: #1a1a1a;
    text-align: left;
  }

  & select {
    width: 240px !important;
    padding: 0px 30px 0px 15px;
    height: 46px;
    font-size: 16px;
    color: rgb(26, 26, 26);
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    appearance: none;
    vertical-align: middle;
    margin: 0px;
    line-height: 1.5;
    background: url(${select}) right 15px center no-repeat;
  }

  & input {
    padding: 0px 20px;
    height: 46px;
    font-size: 16px;
    color: rgb(26, 26, 26);
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    width: 240px !important;
    vertical-align: middle;
    margin: 0px;
    line-height: 1.5;
  }
`;
