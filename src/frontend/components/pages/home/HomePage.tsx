"use client";
import React, { useEffect, useState } from "react";
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
  flex-direction: column-reverse;
  background-color: #ef5749;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
`;

const DollarTextEl = styled(Row)`
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  font-size: 2rem;
  color: #ffffff;
`;

const MoneyBagConEl = styled(Row)`
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  justify-content: space-around;
  position: relative;
`;

const MoneyBagPicEl = styled(Row)``;
const MoneyBagTextEl = styled(Row)`
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  font-size: 2rem;
  color: #ef5749;
`;

const CheckConEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f4f4f4;
  position: relative;
`;
const ChecksPicEl = styled(Row)`
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;
const ChecksTextEl = styled(Row)`
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  padding-top: 60px;
  color: #ef5749;
`;
const CheckAndCoinConEl = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const CoinsConEl = styled(Row)`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`;
const CoinsPicEl = styled(Row)`
  flex-direction: column;
  padding-bottom: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const CoinsTextEl = styled(Row)`
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 50px;
  color: #ef5749;
`;
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
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 50px;
  color: #ffffff;
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
`;
const SignTextEl = styled(Row)`
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 50px;
  color: #ef5749;
`;
const LinkEl = styled(Row)`
  width: 100%;
  justify-content: center;
`;

const SignUpButEl = styled.button<{ color?: string }>`
  width: 100%;
  border: 1px solid white;
  padding: 10px 50px;
  border-radius: 30px;
  font-weight: 500;
  font-size: large;
  margin-bottom: 20px;
  background-color: #e7e7e7;
  &:hover {
    border: 1px solid;
    background-color: #ffffff;
    border-color: ${(e) => e.color};
    color: ${(e) => e.color};
  }
`;
const SignInButEl = styled.button<{ color?: string }>`
  width: 100%;
  padding: 10px 50px;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  font-size: large;
  background-color: #e7e7e7;
  border: 1px solid white;
  &:hover {
    border: 1px solid;
    background-color: #ffffff;
    border-color: ${(e) => e.color};
    color: ${(e) => e.color};
  }
`;
const LaptopTextConEl = styled(Row)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TestButEl = styled.button``;
function HomePage() {
  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  const [rndColor, setRndColor] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        randomHexColorCode();
        setRndColor(randomHexColorCode());
      }
    }, 1000);
  }, []);

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
            <DollarTextEl>نرم افزار حسابداری رامش</DollarTextEl>
          </ImageEl>
        </DollarConEl>
        <MoneyBagConEl>
          <MoneyBagPicEl>
            <Image
              src="/assets/homepics/moneybag.jpg"
              width={400}
              height={300}
              style={{ objectFit: "contain" }}
              alt="Dollar"
            ></Image>
          </MoneyBagPicEl>
          <MoneyBagTextEl>
            با نرم افزار حسابداری رامش یاد میگیری حساب کتاب کنی
          </MoneyBagTextEl>
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
              <ChecksTextEl>موعد چک هاتو اینجا بنویس</ChecksTextEl>
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
              <CoinsTextEl>یاد بگیر پس انداز کنی</CoinsTextEl>
            </CoinsPicEl>
          </CoinsConEl>
        </CheckAndCoinConEl>
        <CalculatorandcheckConEl>
          <LaptopConEl>
            <LaptopTextConEl>
              <LaptopTextEl>چه قدر خرج کردم؟ </LaptopTextEl>
              <LaptopTextEl> کجا خرج کردم؟</LaptopTextEl>
              <LaptopTextEl> چرا خرج کردم؟</LaptopTextEl>
            </LaptopTextConEl>

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
            <SignTextEl>همین الان به ما ملحق شوید</SignTextEl>
            <Link href="/login">
              <LinkEl>
                <SignInButEl color={rndColor}>ورود</SignInButEl>
              </LinkEl>
            </Link>
            <Link href="/signup">
              <LinkEl>
                <SignUpButEl color={rndColor}>عضویت</SignUpButEl>
              </LinkEl>
            </Link>
            <Link href="/expenses">
              <LinkEl>
                <SignUpButEl color={rndColor}>Test</SignUpButEl>
              </LinkEl>
            </Link>
          </SignTextButEl>
        </SignConEl>
      </ContainerEl>
    </PageContainer>
  );
}

export default HomePage;
