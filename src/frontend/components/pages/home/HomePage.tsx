"use client";
import React from "react";
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
  background-color: red;
`;
const SignPicEl = styled(Row)``;
const SignTextButEl = styled(Row)`
  width: 100%;
  flex-direction: column;
`;
const SignTextEl = styled(Row)``;
const SignUpButEl = styled.button``;
const SignInButEl = styled.button``;

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
            <DollarTextEl>kvabfdlsihabdsfi</DollarTextEl>
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
          <MoneyBagTextEl>sadasf</MoneyBagTextEl>
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
              <ChecksTextEl>check</ChecksTextEl>
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
              <CoinsTextEl>Coin</CoinsTextEl>
            </CoinsPicEl>
          </CoinsConEl>
        </CheckAndCoinConEl>
        <CalculatorandcheckConEl>
          <LaptopConEl>
            <LaptopPicEl>
              <Image
                src="/assets/homepics/413913-PDRNW7-891.jpg"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                alt="Dollar"
              ></Image>
            </LaptopPicEl>
            <LaptopTextEl>laptop</LaptopTextEl>
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
            <SignTextEl>33</SignTextEl>
            <SignUpButEl>2</SignUpButEl>
            <SignInButEl>1</SignInButEl>
          </SignTextButEl>
        </SignConEl>
      </ContainerEl>
    </PageContainer>
  );
}

export default HomePage;
