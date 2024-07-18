"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import { emitKeypressEvents } from "readline";
import { eventNames } from "process";

const PageContainerEl = styled(Row)`
  background-color: bisque;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;
const FormContainer = styled(Row)`
  justify-content: center;
  width: calc(100% - 200px);
  height: 500px;
`;
const WelcomeConEl = styled(Row)`
  flex: 2;
  background-color: red;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginConEl = styled(Row)`
  background-color: #ffffff;
  flex: 1;
`;
const TitleEl = styled(Row)`
  /* white-space: nowrap; */
  justify-content: start;
  font-weight: 800;
  font-size: 2.9rem;
`;
const WelcomeTextEl = styled(Row)``;
const WelcomeTextsConEl = styled(Row)`
  flex-direction: column;
  max-width: 550px;
  gap: 5px;
  padding-bottom: 100px;
`;
const FormConEl = styled(Row)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserLoginEl = styled(Row)``;

const UserNameInputEl = styled.input.attrs({
  type: "text",
  placeholder: "USERNAME",
})``;
const PasswordInputEl = styled.input.attrs({
  type: "password",
  placeholder: "PASSWORD",
})``;
const ForgetConEl = styled(Row)``;
const RememberEl = styled.input.attrs({ type: "checkbox" })``;
function Login() {
  const [only, setOnly] = useState(false);
  return (
    <PageContainerEl>
      <FormContainer>
        <WelcomeConEl>
          <WelcomeTextsConEl>
            <TitleEl>Welcome to website</TitleEl>
            <WelcomeTextEl>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </WelcomeTextEl>
          </WelcomeTextsConEl>
        </WelcomeConEl>
        <LoginConEl>
          <FormConEl>
            <UserLoginEl>USERLOGIN</UserLoginEl>
            <UserNameInputEl
              readOnly={only}
              onKeyDownCapture={(event) => {
                if ("Backspace" == event.key) {
                  setOnly(false);
                } else if (
                  event.key === "!" ||
                  event.key === "@" ||
                  event.key === "#" ||
                  event.key === "$" ||
                  event.key === "%" ||
                  event.key === "^" ||
                  event.key === "&" ||
                  event.key === "*" ||
                  event.key === "(" ||
                  event.key === ")" ||
                  event.key === "_" ||
                  event.key === "/" ||
                  event.key === "-" ||
                  event.key === "+" ||
                  event.key === ""
                ) {
                  setOnly(true);
                } else if (48 <= event.keyCode && event.keyCode <= 57) {
                  setOnly(false);
                } else if (65 <= event.keyCode && event.keyCode <= 90) {
                  setOnly(false);
                } else if (96 <= event.keyCode && event.keyCode <= 122) {
                  setOnly(false);
                } else {
                  setOnly(true);
                }
              }}
            ></UserNameInputEl>
            <PasswordInputEl></PasswordInputEl>
            <ForgetConEl>
              <RememberEl></RememberEl>
            </ForgetConEl>
          </FormConEl>
        </LoginConEl>
      </FormContainer>
    </PageContainerEl>
  );
}

export default Login;
