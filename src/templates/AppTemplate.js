import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 10px;

  @media only screen and (min-width: 1000px) {
    margin: 20px 70px;
  }
`;

export const AppTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};
