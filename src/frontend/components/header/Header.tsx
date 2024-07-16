"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)<{ hover?: string }>`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: absolute;
  z-index: 1;
`;
const HeaderCon = styled(Row)`
  min-width: 400px;
  width: 100%;
  /* padding-right: 40px; */
  /* max-width: 700px; */
  font-weight: 300;
  justify-content: space-evenly;
  align-items: center;
  height: 36px;
  background-color: purple;
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
  background-color: blue;
`;
const LoginConEl = styled(Row)``;
const LoginEl = styled(Row)<{ hover?: string }>`
  cursor: pointer;
`;
const LoginHoverEl = styled(Row)<{ hover?: string }>`
  color: black;
  width: 100%;
  z-index: 1;
  background-color: rgb(243, 52, 52);
  height: ${(e) => (e.hover === "ok" ? "220px" : "0px")};
  transition: ease-out 400ms all;
`;
const HomeCon = styled(Row)`
  z-index: 3;
  gap: 4px;
`;
function Header() {
  const [hovered, sethovered] = useState("asas");
  return (
    <ContainerEl onMouseEnter={() => sethovered(`${hovered}`)}>
      <HeaderCon onMouseEnter={() => sethovered(`${hovered}`)}>
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
        onMouseLeave={() => sethovered("o2k")}
        hover={hovered}
      ></LoginHoverEl>
    </ContainerEl>
  );
}

export default Header;
