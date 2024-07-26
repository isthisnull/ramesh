"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Row from "../common/Row";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import loginSlice, { login } from "../state/slices/loginSlice";
import { RootState } from "../state/mainStore";

const PageContainerEl = styled(Row)`
  background: rgb(99, 82, 236);
  background: linear-gradient(
    139deg,
    rgba(99, 82, 236, 1) 0%,
    rgba(99, 82, 236, 1) 30%,
    rgba(195, 106, 196, 1) 100%
  );
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
  padding: 30px;
  flex: 2;
  background: rgb(99, 82, 236);
  background: linear-gradient(
    90deg,
    rgba(99, 82, 236, 1) 0%,
    rgba(251, 127, 127, 1) 100%
  );
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginConEl = styled(Row)`
  max-width: 350px;
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
  gap: 10px;
`;
const UserLoginEl = styled(Row)`
  color: #7a6bec;
  font-weight: 600;
  margin-bottom: 10px;
`;

const UserNameInputEl = styled.input.attrs({
  type: "text",
})`
  border: none;
  background-color: #e9e7ff;
  border-radius: 30px;
  padding: 4px 30px;
  color: #000000;
  outline: none;
  background-image: url("/assets/profile.svg");
  background-position: 9px 5px;
  background-size: 15px 15px;
  background-repeat: no-repeat;

  &:focus {
    border: 2px solid #be2727dd;
  }
`;
const PasswordInputEl = styled.input.attrs({
  type: "password",
})`
  border: none;
  background-color: #e9e7ff;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 4px 30px;
  color: #000000;
  outline: none;
  background-image: url("/assets/lock.svg");
  background-position: 8px 4px;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  &:focus {
    border: 2px solid #be2727dd;
  }
`;
const ForgetConEl = styled(Row)`
  justify-content: space-between;

  width: 200px;
  align-items: center;
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 700;
`;
const RememberCheckEl = styled.input.attrs({ type: "checkbox" })``;
const RememberTextEl = styled(Row)``;
const RemConEl = styled(Row)`
  gap: 4px;
  align-items: center;
`;
const ForgetPassEl = styled(Row)`
  align-items: center;
  cursor: pointer;
`;
const LoginButConEl = styled(Row)`
  justify-content: center;
  width: 240px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;
const LoginButEl = styled.button`
  cursor: pointer;
  width: 150px;
  border-radius: 40px;
  border: none;
  background: rgb(99, 82, 236);
  background: linear-gradient(
    243deg,
    rgba(99, 82, 236, 1) 0%,
    rgba(195, 106, 196, 1) 100%
  );
  padding: 8px 15px;
  color: white;
`;
const SignupButEl = styled(Row)`
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  width: 100%;
  gap: 3px;
`;

const SignUpSpan = styled(Row)`
  cursor: pointer;
  color: blue;
`;

function Login() {
  const UserRef = useRef<HTMLInputElement>(null);
  const PassRef = useRef<HTMLInputElement>(null);
  const [pass, setpass] = useState<string>("");
  const [only, setOnly] = useState(false);
  const dispatch = useDispatch();

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
            <UserLoginEl>USER LOGIN</UserLoginEl>
            <UserNameInputEl
              ref={UserRef}
              readOnly={only}
              onKeyDown={(event) => {
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
            <PasswordInputEl
              value={pass}
              onChange={(e) => {
                setpass(e.currentTarget.value);
              }}
              ref={PassRef}
            ></PasswordInputEl>
            <ForgetConEl>
              <RemConEl>
                <RememberCheckEl></RememberCheckEl>
                <RememberTextEl>Remember</RememberTextEl>
              </RemConEl>
              <Link href="/forgetpass">
                <ForgetPassEl>Forget Password?</ForgetPassEl>
              </Link>
            </ForgetConEl>
            <LoginButConEl>
              <Link
                href={
                  UserRef.current?.value === "kir" && pass === "123"
                    ? "/"
                    : "login"
                }
              >
                <LoginButEl
                  onClick={
                    UserRef.current?.value === "kir" && pass === "123"
                      ? () => {
                          dispatch(login());
                        }
                      : () => {
                          window.alert("err");
                        }
                  }
                >
                  Login
                </LoginButEl>
              </Link>
              <SignupButEl>
                Need to
                <SignUpSpan>
                  <Link href="/signup">sign up?</Link>
                </SignUpSpan>
              </SignupButEl>
            </LoginButConEl>
          </FormConEl>
        </LoginConEl>
      </FormContainer>
    </PageContainerEl>
  );
}

export default Login;
