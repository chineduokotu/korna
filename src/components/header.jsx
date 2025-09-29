import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FaBars, FaPen, FaBell } from "react-icons/fa";

const HeaderWrap = styled.header`
  background: white;
  color: black;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SearchBar = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 200px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

export default function Header() {
  const theme = useContext(ThemeContext);
  console.log('Header theme:', theme);
  return (
    <HeaderWrap>
      <LeftSection>
        <MenuIcon><FaBars /></MenuIcon>
        <Title>Medium</Title>
      </LeftSection>
      <SearchBar type="text" placeholder="Search..." />
      <RightSection>
        <Icon><FaPen /></Icon>
        <Icon><FaBell /></Icon>
      </RightSection>
    </HeaderWrap>
  );
}
