import React, { useEffect } from "react";
import styled from "styled-components";
import check from "../../../assert/booking/02/check_.png";
import fly from "../../../assert/booking/02/fly.png";
import { useSelector, useDispatch } from "react-redux";
import { addTicket, __getTicket } from "../../../redux/modules/ticket";
import DetailSearchList from "./DetailSearchList";
import { getCookie } from "../../../shared/Cookie";

const DetailSearchForm = () => {
  const dispatch = useDispatch();

  const startDay = getCookie("startDay");
  const startPoint = getCookie("startPoint");

  const data = {
     startDay:{startDay},
     startPoint:{startPoint}
  }

  const { isLoading, error, tickets } = useSelector((state) => state.ticket);
  console.log(tickets)

  useEffect(() => {
    dispatch(__getTicket(data));
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StDetailSearchForm>
      <PointContainer>
        <PointBox>
          <Point>
            <Box>
              <Start>
                <strong>GMP</strong>
                <span>김포</span>
              </Start>
              <Img />
              <End>
                <strong>CJU</strong>
                <span>제주</span>
              </End>
            </Box>
          </Point>
        </PointBox>
      </PointContainer>

      <ListContainer>
        <div>
          <span>
            <select>
              <option>이른 시간 순</option>
              <option>늦은 시간 순</option>
              <option>가격 순</option>
            </select>
          </span>
        </div>
        <List>
          {tickets?.map((ticket) => {
            return (
              <DetailSearchList
                key={ticket.flyNum}
                tickets={tickets}
                ticket={ticket}
              />
            );
          })}
        </List>
      </ListContainer>
    </StDetailSearchForm>
  );
};

export default DetailSearchForm;

const StDetailSearchForm = styled.div`
  margin-left: 70px;
  list-style: none;
  margin: 0 auto;
  width: 100%;
  padding-left: 50px;
`;

const PointContainer = styled.div`
  position: relative;
  margin-top: 60px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const PointBox = styled.div`
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  box-sizing: border-box;
`;

const Point = styled.div`
  height: 92px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: block;
`;

const Box = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  padding-top: 20px;
`;

const Start = styled.div`
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    display: block;
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    line-height: 36px;
  }

  & span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: center;
    line-height: 20px;
  }
`;

const Img = styled.div`
  display: inline-block;
  width: 250px;
  height: 55px;
  background: url(${fly}) no-repeat 50% 50%;
  box-sizing: border-box;
`;

const End = styled.div`
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    display: block;
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    line-height: 36px;
  }

  & span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #1a1a1a;
    text-align: center;
    line-height: 20px;
  }
`;

const ListContainer = styled.div`
  margin-top: 40px;

  & span {
    margin-right: 12px;
    display: inline-block;
    min-width: 84px;
  }

  & select {
    background: url(${check}) no-repeat 95px 12px;
    padding: 0 24px 0 10px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    width: 100%;
    color: #1a1a1a;
    border: 1px solid #ccc;
    /* background-color: #fff; */
    box-sizing: border-box;
    appearance: none;
    vertical-align: middle;
    cursor: pointer;
  }

  & option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    font-size: 14px;
    line-height: 30px;
    color: #1a1a1a;
  }
`;

const List = styled.div`
  & li {
    display: list-item;
    position: relative;
    margin-top: 10px;
    border: 1px solid #cccccc;
    border-radius: 7px;
    display: inline-block;
    position: relative;
    width: 90%;
    vertical-align: middle;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
