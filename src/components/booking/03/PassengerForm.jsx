import React, { useState } from "react";
import styled from "styled-components";
import img3_1 from "../../../assert/booking/03/img3-1.png";
import img3_2 from "../../../assert/booking/03/img3-2.png";
import ModalPortal from "../Portal/Portal";
import Modal from "./Modal/PassengerModal";

const PassengerForm = () => {
  const [modal, setModal] = useState(false);

  const onModalHandler = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal == true ? (
        <Modal onModalHandler={onModalHandler} setModal={setModal} />
      ) : (
        <StPassengerForm>
          <TypeFocus onClick={onModalHandler}>
            <span>
              <em>성인 1</em>
              <em> : 김/소연</em>
            </span>
          </TypeFocus>
        </StPassengerForm>
      )}
    </>
  );
};

export default PassengerForm;

const StPassengerForm = styled.div`
  width: 90%;
  border: 1px solid #ccc;
  margin: 0 auto;
`;

const TypeFocus = styled.a`
  font-size: 16px;
  color: rgb(26, 26, 26);
  font-weight: 400;
  /* background-color: rgb(254, 244, 243); */
  display: block;
  padding: 30px 40px;
  text-decoration: none;
  cursor: pointer;
  & span {
    display: block;
    /* background: url(${img3_1}) right top no-repeat; */
    background: url(${img3_2}) right top no-repeat;
  }
`;
