"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/mainStore";
import Image from "next/image";

const ContainerEl = styled(Row)`
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
  background-color: #000000;
`;
const LinkEl = styled(Row)``;
const RameshEl = styled(Row)`
  cursor: pointer;
`;
interface LoginElProps {
  hover?: string;
}
const LoginEl = styled(Row)<LoginElProps>`
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
interface LoginHoverProps {
  hover?: string;
}
const LoginHoverEl = styled(Row)<LoginHoverProps>`
  width: 220px;
  right: -100px;
  top: -80px;
  z-index: -1;
  height: 100px;
  transition: ease-out 400ms all;
  position: absolute;
  overflow: hidden;
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
  background-color: black;
  width: 200px;
  padding: 10px 15px;
  justify-content: center;
  border-radius: 19px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px black solid;
    box-shadow: 0px 0px 10px black;
  }
`;
const SignUpButEl = styled(Row)`
  background-color: black;
  width: 200px;
  padding: 10px 15px;
  justify-content: center;
  border-radius: 19px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px black solid;
    box-shadow: 0px 0px 10px black;
  }
`;

interface LoggeninProps {
  logged?: string;
}
interface LoggedoutEl {
  logged?: string;
}
const LinkLoggedinEl = styled(Row)<LoggeninProps>`
  display: ${(e) => (e.logged === "logedin" ? "none" : "flex")};
`;

const LinkLoggedoutEl = styled(Row)<LoggedoutEl>`
  display: ${(e) => (e.logged === "logedout" ? "none" : "flex")};
`;
const ProfileNameEl = styled(Row)`
  gap: 4px;
  align-items: center;
`;
const ImageEl = styled(Row)`
  margin-left: 30px;
  cursor: pointer;
`;
const Username: string = "Kir";
function Header() {
  const [hovered, sethovered] = useState<string>("");
  const isLogged = useSelector((state: RootState) => state.loginSlice.count);

  return (
    <ContainerEl onMouseEnter={() => sethovered(`${hovered}`)}>
      <HeaderCon onMouseEnter={() => sethovered(`${hovered}`)}>
        <LinkEl>
          <Link href="/">
            <HomeConEl>
              <RameshEl>لوگو رامش</RameshEl>
              <HomeEl>خانه</HomeEl>
            </HomeConEl>
          </Link>
        </LinkEl>
        <LinkEl>
          <Link href="/about">
            <AboutEl onMouseEnter={() => sethovered("o2k")}>درباره ما</AboutEl>
          </Link>
        </LinkEl>
        <LinkLoggedinEl logged={isLogged}>
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
                    <SignInButEl>ورود</SignInButEl>
                  </Link>
                </LinkEl>
                <LinkEl>
                  <Link href="/signup">
                    <SignUpButEl>عضویت</SignUpButEl>
                  </Link>
                </LinkEl>
              </SignButsConEl>
            </LoginHoverEl>
          </LoginConEl>
        </LinkLoggedinEl>
        <LinkLoggedoutEl logged={isLogged}>
          <ProfileNameEl>سلام, {Username}</ProfileNameEl>
          <Link href="/profile">
            <ImageEl>
              <Image
                src="/assets/account-avatar-profile.svg"
                width={25}
                height={25}
                alt="kir"
                style={{ contain: "object-fit" }}
              ></Image>
            </ImageEl>
          </Link>
        </LinkLoggedoutEl>
      </HeaderCon>
    </ContainerEl>
  );
}

export default Header;
