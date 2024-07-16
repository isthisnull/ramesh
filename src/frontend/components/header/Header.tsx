"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  flex-direction: column;
  align-items: center;
  height: 700px;
`;
const HeaderCon = styled(Row)`
  min-width: 400px;
  width: 700px;
  font-weight: 300;
  justify-content: space-between;
  align-items: center;
  background-color: peru;
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
const LoginConEl = styled(Row)``;
const LoginEl = styled(Row)<{ hover?: string }>`
  z-index: 3;
  cursor: pointer;
  width: 200px;
  background-color: ${(e) => (e.hover === "ok" ? "red" : "purple")};
`;
const LoginHoverEl = styled(Row)<{ hover?: string }>`
  color: black;
  width: 100%;
  z-index: ${(e) => (e.hover === "ok" ? "-1" : "-1")};
  left: 0;
  top: 0;
  background-color: rgb(243, 52, 52);
  height: ${(e) => (e.hover === "ok" ? "300px" : "00px")};
  /* transition: 600ms all; */
`;
const HomeCon = styled(Row)`
  z-index: 3;
  gap: 4px;
`;
function Header() {
  const [hovered, sethovered] = useState("");
  return (
    <>
      <ContainerEl>
        <HeaderCon onMouseEnter={() => sethovered("ok")}>
          <LinkEl>
            <Link href="#">
              <HomeCon>
                <RameshEl>Ramesh Logo</RameshEl>
                <HomeEl>Home</HomeEl>
              </HomeCon>
            </Link>
          </LinkEl>
          <LinkEl>
            <Link href="/about">
              <AboutEl onMouseEnter={() => sethovered("o2k")}>About Us</AboutEl>
            </Link>
          </LinkEl>
          <LinkEl>
            <Link href="#">
              <LoginConEl>
                <LoginEl onMouseEnter={() => sethovered("ok")} hover={hovered}>
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </LoginEl>
              </LoginConEl>
            </Link>
          </LinkEl>
        </HeaderCon>
        <LoginHoverEl
          onMouseLeave={() => sethovered("ok")}
          hover={hovered}
        ></LoginHoverEl>
      </ContainerEl>
      <HeaderCon>as</HeaderCon>
    </>
  );
}

export default Header;
