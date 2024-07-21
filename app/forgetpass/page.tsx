"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Row from "@/src/frontend/components/common/Row";
import Link from "next/link";

const ContainerEl = styled(Row)`
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
const ForgetContainer = styled(Row)`
  padding: 20px;
  background-color: white;
  width: 400px;
  height: auto;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
`;
const LogoEl = styled(Row)`
  justify-content: center;
  color: purple;
  font-weight: 700;
  font-size: 2rem;
`;
const ForgetTextEl = styled(Row)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 600;
`;
const TextEl = styled(Row)`
  margin-bottom: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 18px;
  color: rgba(85, 85, 85, 0.8);
`;
const PhoneNumberEl = styled(Row)`
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 18px;
  color: rgba(85, 85, 85, 0.8);
`;
const PhoneNumberInputEl = styled.input.attrs({ type: "number" })`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  padding: 8px 10px;
  border-radius: 4px;
  outline: none;
  border: 1px blue solid;
`;
const ContinueButEl = styled.button`
  padding: 12px 10px;
  background-color: blue;
  border: none;
  border-radius: 3px;
  color: white;
`;
const SignUpEl = styled(Row)``;
function page() {
  return (
    <ContainerEl>
      <ForgetContainer>
        <LogoEl>Ramesh</LogoEl>
        <ForgetTextEl>Did you forget your password?</ForgetTextEl>
        <TextEl>
          Enter your phone number that connected to your account and we'll send
          you a link to reset your password.
        </TextEl>
        <PhoneNumberEl>Phone Number</PhoneNumberEl>
        <PhoneNumberInputEl></PhoneNumberInputEl>
        <ContinueButEl>Continue</ContinueButEl>
        <SignUpEl></SignUpEl>
      </ForgetContainer>
    </ContainerEl>
  );
}

export default page;
