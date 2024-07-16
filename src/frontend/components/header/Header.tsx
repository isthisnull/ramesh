"use client";
import React from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";

const ContainerEl = styled(Row)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  justify-content: center;
  height: 35px;
`;
const HeaderCon = styled(Row)`
  min-width: 400px;
  width: 700px;
  background-color: red;
  justify-content: space-between;
  align-items: center;
`;
const LinkEl = styled(Row)``;
const RameshEl = styled(Row)`
  cursor: pointer;
`;
const HomeEl = styled(Row)`
  cursor: pointer;
`;
const AboutEl = styled(Row)`
  cursor: pointer;
`;
const LoginEl = styled(Row)`
  cursor: pointer;
`;
const HomeCon = styled(Row)`
  gap: 4px;
`;
function Header() {
  return (
    <ContainerEl>
      <HeaderCon>
        <LinkEl>
          <Link href="#">
            <HomeCon>
              <RameshEl>Ramesh Logo</RameshEl>
              <HomeEl>Home</HomeEl>
            </HomeCon>
          </Link>
        </LinkEl>
        <LinkEl>
          <Link href="#">
            <AboutEl>About Us</AboutEl>
          </Link>
        </LinkEl>
        <LinkEl>
          <Link href="#">
            <LoginEl>Login Pic</LoginEl>
          </Link>
        </LinkEl>
      </HeaderCon>
    </ContainerEl>
  );
}

export default Header;
