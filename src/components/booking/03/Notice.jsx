import React from "react";
import styled from "styled-components";
import notice from "../../../assert/booking/03/notice.png";

const Notice = () => {
  return (
    <StNotice>
      <NoticeWrap>
        <a> 알아두세요</a>
        <NoticeCont>
          <ul>
            <li>
              "항공운임 등 총액"은 유류할증료와 세금을 포함한 총 운임으로 구매
              시점과 환율에 따라 변동될 수 있습니다.
            </li>
          </ul>
        </NoticeCont>
      </NoticeWrap>
    </StNotice>
  );
};

export default Notice;

const StNotice = styled.div`
  margin-top: 100px;
  display: block;
`;

const NoticeWrap = styled.div`
  border: 1px solid rgb(204, 204, 204);
  width: 90%;
  margin: 0 auto;

  a {
    display: block;
    padding: 26px 40px 30px 70px;
    font-size: 18px;
    font-weight: 700;
    color: rgb(26, 26, 26);
    background: url(${notice}) 40px 30px no-repeat;
    position: relative;
  }
`;

const NoticeCont = styled.div`
  display: block;
  padding: 20px;
  border-top: 1px solid rgb(204, 204, 204);

  & ul {
    list-style: none;
    padding-inline-start: 40px;
  }

  & li {
    color: rgb(77, 77, 77);
    line-height: 1.5;
  }
`;
