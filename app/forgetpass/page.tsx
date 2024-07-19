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
  background-color: white;
  width: 400px;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const LogoEl = styled(Row)``;
const ForgetTextEl = styled(Row)``;
const TextEl = styled(Row)``;
const PhoneNumberEl = styled(Row)``;
const PhoneNumberInputEl = styled.input.attrs({ type: "number" })`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
const ContinueButEl = styled.button``;
const SignUpEl = styled(Row)``;
function page() {
  return (
    <ContainerEl>
      <ForgetContainer>
        <LogoEl>Ramesh</LogoEl>
        <ForgetTextEl>Sign up</ForgetTextEl>
        <TextEl></TextEl>
        <PhoneNumberEl>Phone Number</PhoneNumberEl>
        <PhoneNumberInputEl></PhoneNumberInputEl>
        <ContinueButEl>Continue</ContinueButEl>
        <SignUpEl></SignUpEl>
      </ForgetContainer>
    </ContainerEl>
  );
}

export default page;
