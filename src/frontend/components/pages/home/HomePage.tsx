"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import Row from "../../common/Row";
import Image from "next/image";
import Link from "next/link";

const PageContainer = styled(Row)`
  width: 100%;
  background-color: #4b4b4b;
  justify-content: center;
`;
const ContainerEl = styled(Row)`
  width: 100%;
  background-color: #4b4b4b;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 5px;
`;
const DollarConEl = styled(Row)`
  width: 100%;
`;
const ImageEl = styled(Row)`
  background-color: #96aeff;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DollarTextEl = styled(Row)`
  position: absolute;
  left: 30%;
  top: 80px;
`;

const MoneyBagConEl = styled(Row)`
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  justify-content: center;
  position: relative;
`;

const MoneyBagPicEl = styled(Row)``;
const MoneyBagTextEl = styled(Row)`
  position: absolute;
  left: 30px;
`;

const CheckConEl = styled(Row)`
  /* margin-bottom: 400px; */
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f4f4f4;
  position: relative;
`;
const ChecksPicEl = styled(Row)``;
const ChecksTextEl = styled(Row)`
  position: absolute;
  color: red;
  left: 50px;
  top: 30%;
`;
const CheckAndCoinConEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const CoinsConEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;
const CoinsPicEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const CoinsTextEl = styled(Row)``;
const CalculatorandcheckConEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LaptopConEl = styled(Row)`
  justify-content: space-around;
  width: 100%;
  background-color: #ef5749;
`;
const LaptopTextEl = styled(Row)`
  background-color: beige;
`;
const LaptopPicEl = styled(Row)``;

const SignConEl = styled(Row)`
  width: 100%;
  background-color: #ffffff;
  justify-content: space-around;
`;
const SignPicEl = styled(Row)``;
const SignTextButEl = styled(Row)`
  width: 300px;
  justify-content: center;
  flex-direction: column;

  background-color: #c9c9c9;
`;
const SignTextEl = styled(Row)`
  justify-content: center;
  margin-bottom: 20px;
`;
const LinkEl = styled(Row)`
  justify-content: center;
`;
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
const RandomColor = randomHexColorCode();
const SignUpButEl = styled.button<{ color?: string }>`
  min-height: 100px;
  width: 100px;
  border: 1px solid white;
  padding: 10px 10px;
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  background-color: white;
  &:hover {
    border: 1px solid;
    border-color: ${(e) => e.color};
    color: ${(e) => e.color};
  }
`;
const SignInButEl = styled.button`
  width: 100px;
  border: none;
  padding: 10px 10px;
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
/* useEffect(() => {}, []); */
function HomePage() {
  return (
    <PageContainer>
      <ContainerEl>
        <DollarConEl>
          <ImageEl>
            <Image
              src="/assets/homepics/Dollar.jpg"
              width={900}
              height={300}
              style={{ objectFit: "contain" }}
              alt="Dollar"
            ></Image>
            <DollarTextEl>کصشعر نوشته شود</DollarTextEl>
          </ImageEl>
        </DollarConEl>
        <MoneyBagConEl>
          <MoneyBagPicEl>
            <Image
              src="/assets/homepics/moneybag.jpg"
              width={900}
              height={300}
              style={{ objectFit: "contain" }}
              alt="Dollar"
            ></Image>
          </MoneyBagPicEl>
          <MoneyBagTextEl>کصشعر نوشته شود</MoneyBagTextEl>
        </MoneyBagConEl>
        <CheckAndCoinConEl>
          <CheckConEl>
            <ChecksPicEl>
              <Image
                src="/assets/homepics/checks.jpg"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                alt="Dollar"
              ></Image>
              <ChecksTextEl>کصشعر نوشته شود</ChecksTextEl>
            </ChecksPicEl>
          </CheckConEl>
          <CoinsConEl>
            <CoinsPicEl>
              <Image
                src="/assets/homepics/coin-stacks.jpg"
                width={378}
                height={400}
                style={{ objectFit: "contain" }}
                alt="Dollar"
              ></Image>
              <CoinsTextEl>کصشعر نوشته شود</CoinsTextEl>
            </CoinsPicEl>
          </CoinsConEl>
        </CheckAndCoinConEl>
        <CalculatorandcheckConEl>
          <LaptopConEl>
            <LaptopTextEl>کصشعر نوشته شود</LaptopTextEl>
            <LaptopPicEl>
              <Image
                src="/assets/homepics/413913-PDRNW7-891.jpg"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                alt="Dollar"
              ></Image>
            </LaptopPicEl>
          </LaptopConEl>
        </CalculatorandcheckConEl>
        <SignConEl>
          <SignPicEl>
            <Image
              src="/assets/homepics/4911345.jpg"
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
              alt="Dollar"
            ></Image>
          </SignPicEl>
          <SignTextButEl>
            <SignTextEl>کصشعر نوشته شود</SignTextEl>
            <LinkEl>
              <Link href="/login">
                <SignInButEl>Login</SignInButEl>
              </Link>
            </LinkEl>
            <LinkEl>
              {/*               <Link href="signup"> */}
              <SignUpButEl
                color={RandomColor}
                onClick={() => {
                  console.log(randomHexColorCode());
                }}
              >
                Sign Up
              </SignUpButEl>
              {/*           </Link> */}
            </LinkEl>
          </SignTextButEl>
        </SignConEl>
      </ContainerEl>
    </PageContainer>
  );
}

export default HomePage;
