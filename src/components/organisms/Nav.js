import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  max-height: 90px;
  height: 90px;
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #53d6fa;
  font-family: "Montserrat";

  @media only screen and (min-width: 1000px) {
    padding: 10px 70px;
  }
`;

const HeaderTitle = styled.h2`
  margin: 0;
  align-self: center;

  @media only screen and (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const NavItem = styled(Link)`
  font-size: 1.2rem;
  padding-left: 10px;
  padding-right: 10px;
  color: black;

  @media only screen and (min-width: 1000px) {
    font-size: 1.6rem;
  }
`;

export const Nav: React.FC = () => {
  return (
    <MenuWrapper>
      <HeaderTitle> Calendar</HeaderTitle>
      <NavMenu>
        <NavItem to="/scheduler">Scheduler</NavItem>
        <NavItem to="/expenses">Expenses</NavItem>
      </NavMenu>
    </MenuWrapper>
  );
};
