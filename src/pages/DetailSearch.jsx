import React from "react";
import styled from "styled-components";
import Header2 from "../components/booking/Header2";
import Footer2 from "../components/booking/Footer2";
import BookingTitle2 from "../components/booking/02/BookingTitle2";
import DetailSearchForm from "../components/booking/02/DetailSearchForm";
import NextStep from "../components/booking/02/NextStep";
import Notice from "../components/booking/03/Notice";

const DetailSearch = () => {
  return (
    <>
      <Header2 />
      <StDetailSearch>
        <BookingTitle2 />
        <DetailSearchForm />
        <Notice />
      </StDetailSearch>
      <Footer2 />
      <NextStep />
    </>
  );
};

export default DetailSearch;

const StDetailSearch = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
