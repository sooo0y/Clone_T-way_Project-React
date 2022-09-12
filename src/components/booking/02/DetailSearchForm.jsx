import React from "react";
import styled from "styled-components";
import fly from "../../../assert/booking/02/fly.png";
import check from "../../../assert/booking/02/check_.png";
import img from "../../../assert/booking/02/img.png";
import { useNavigate } from "react-router-dom";

const DetailSearchForm = () => {

  const navigate = useNavigate();

  return (
    <StDetailSearchForm>
      <PointContainer>
        <PointBox>
          <Point>
            <Box>
              <Start>
                <strong>GMP</strong>
                <span>서울/김포</span>
              </Start>
              <Img />
              <End>
                <strong>PUS</strong>
                <span>부산</span>
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
          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>

          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>

          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>

          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>

          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>

          <ui>
            <li onClick={() => navigate('/passenger')}>
              <SelectInfo>
                <ServiceSectionBox>
                  <PlanType>
                    <Btn1>TW9525</Btn1>
                    <Btn2>B737-800</Btn2>
                  </PlanType>

                  <FirstService>
                    <strong>07:55</strong>
                    <span>SMP</span>
                  </FirstService>

                  <ServiceExp>
                    <P1>01h 05m</P1>
                    <P2>
                      <span>직항</span>
                    </P2>
                  </ServiceExp>

                  <LastService>
                    <strong>09:00</strong>
                    <span>PUS</span>
                  </LastService>

                  <PriceInfo>
                    <div>이코노미</div>
                    <span>KRW</span>
                    <strong>24,000</strong>
                  </PriceInfo>
                </ServiceSectionBox>

              </SelectInfo>
            </li>
          </ui>
          
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

const SelectInfo = styled.div`
  /* padding: 15px 20px; */
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  justify-content: stretch;
`;

const ServiceSectionBox = styled.div`
  flex: 1;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-align: center;
`;

const PlanType = styled.div`
  display: inline-block;
  padding-top: 9px;
`;

const Btn1 = styled.div`
  color: #1a1a1a;
  font-size: 16px;
  background: url(${img}) no-repeat 0 0;
  display: block;
  text-decoration: underline;
  padding-left: 25px;
  line-height: 20px;
  cursor: pointer;
`;

const Btn2 = styled.div`
  display: block;
  font-size: 14px;
  text-decoration: underline;
  padding-left: 25px;
  color: #4d4d4d;
  line-height: 20px;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`;

const FirstService = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    font-size: 35px;
    display: block;
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

const ServiceExp = styled.div`
  width: 155px;
  height: 55px;
  background: url(${fly}) no-repeat 100% 35%;
  vertical-align: top;
  display: inline-block;
`;

const P1 = styled.div`
  font-size: 14px;
  color: #4d4d4d;
`;

const P2 = styled.div`
  margin-top: 17px;
  font-size: 14px;
  color: #4d4d4d;
`;

const LastService = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;
  width: 150px;

  & strong {
    font-size: 35px;
    display: block;
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

const PriceInfo = styled.div`
  width: 350px;
  border-left: 1px dashed rgb(204, 204, 204);
  text-align: center;
  position: relative;
  font-size: 14px;
  color: rgb(26, 26, 26);
  display: block;

  & div {
    color: rgb(115, 155, 71);
    font-size: 16px;
    font-weight: bold;
  }

  & span {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  & strong {
    font-size: 30px;
    font-weight: bold;
    color: rgb(26, 26, 26);
  }
`;
