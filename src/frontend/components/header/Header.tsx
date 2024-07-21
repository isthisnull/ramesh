"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, UseDispatch } from "react-redux";
import loginSlice from "../state/slices/loginSlice";
import { login } from "../state/slices/loginSlice";

const ContainerEl = styled(Row)<{ hover?: string }>`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: absolute;
  z-index: 1;
  transition: ease-out 400ms all;
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

const LoginEl = styled(Row)<{ hover?: string }>`
  cursor: pointer;
`;
const HomeEl = styled(Row)`
  cursor: pointer;
`;
const HomeConEl = styled(Row)`
  z-index: 3;
  gap: 4px;
`;
const AboutEl = styled(Row)`
  cursor: pointer;
`;

const LoginHoverEl = styled(Row)<{ hover?: string }>`
  width: 220px;
  right: -0100px;
  top: -80px;
  z-index: -1;
  background-color: rgb(255, 255, 255);
  height: 100px;
  /*   border-radius: 10px;
  border: 1px black solid; */
  transition: ease-out 400ms all;
  position: absolute;
  overflow: hidden;
  /* opacity: 0; */
`;
const LoginConEl = styled(Row)`
  position: relative;
  height: 40px;
  align-items: center;
  &:hover {
    & > ${LoginHoverEl} {
      transform: translateY(120px);
      opacity: 1;
    }
  }
`;
const SignButsConEl = styled(Row)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  gap: 7px;
`;
const SignInButEl = styled(Row)`
  background-color: purple;
  width: 200px;
  padding: 10px 15px;
  justify-content: center;
  border-radius: 19px;
  &:hover {
    background-color: white;
    color: rebeccapurple;
    border: 1px rebeccapurple solid;
    box-shadow: 0px 0px 10px purple;
  }
`;
const SignUpButEl = styled(Row)`
  background-color: purple;
  width: 200px;
  padding: 10px 15px;
  justify-content: center;
  border-radius: 19px;
  &:hover {
    background-color: white;
    color: rebeccapurple;
    border: 1px rebeccapurple solid;
    box-shadow: 0px 0px 10px purple;
  }
`;

function Header() {
  const mamad: boolean = false;
  const [login1, setLogin1] = useState<boolean>(true);
  const [hovered, sethovered] = useState<string>("asas");

  /*  const onClickHandle = dispatch(login(mamad)); */
  return (
    <ContainerEl onMouseEnter={() => sethovered(`${hovered}`)}>
      <HeaderCon onMouseEnter={() => sethovered(`${hovered}`)}>
        <LinkEl>
          <Link href="#">
            <HomeConEl>
              <RameshEl>Ramesh Logo</RameshEl>
              <HomeEl>Home</HomeEl>
            </HomeConEl>
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
              <LoginHoverEl
                onMouseLeave={() => sethovered("o2k")}
                hover={hovered}
              >
                <SignButsConEl>
                  <LinkEl>
                    <Link href="/login">
                      <SignInButEl>Login</SignInButEl>
                    </Link>
                  </LinkEl>
                  <LinkEl>
                    <Link href="/signup">
                      <SignUpButEl>sign up</SignUpButEl>
                    </Link>
                  </LinkEl>
                </SignButsConEl>
              </LoginHoverEl>
            </LoginConEl>
          </Link>
        </LinkEl>
      </HeaderCon>
    </ContainerEl>
  );
}

export default Header;
