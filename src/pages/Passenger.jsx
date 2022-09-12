import React from "react";
import styled from "styled-components";
import Header2 from "../components/booking/Header2.jsx";
import Footer2 from "../components/booking/Footer2.jsx";
import BookingTitle3 from "../components/booking/03/BookingTitle3.jsx";
import PassengerInfo from "../components/booking/03/PassengerInfo.jsx";
import PassengerForm from "../components/booking/03/PassengerForm.jsx";
import NextStep from "../components/booking/03/NextStep.jsx";

const Passenger = () => {
  return (
    <>
      <Header2 />
      <StPassenger>
        <BookingTitle3 />
        <PassengerInfo />
        <PassengerForm />
      </StPassenger>
      <Footer2 />
      <NextStep/>
    </>
  );
};

export default Passenger;

const StPassenger = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
