import React from "react";
import styled from "styled-components";
import BookingTitle1 from "../components/booking/01/BookingTitle1";
import Option from "../components/booking/01/Option";
import SearchForm from "../components/booking/01/SearchForm";
import Header2 from "../components/booking/Header2";
import Footer2 from "../components/booking/Footer2";
import NextStep from "../components/booking/01/NextStep";

const Ticket = () => {
  return (
    <>
      <Header2 />
      <StTicket>
        <BookingTitle1 />
        <Option />
        <SearchForm />
      </StTicket>
      <Footer2 />
      <NextStep/>
    </>
  );
};

export default Ticket;

const StTicket = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
