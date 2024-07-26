"use client";
import React from "react";
import styled from "styled-components";
import Row from "../../common/Row";
import Image from "next/image";
import Link from "next/link";
const ContainerEl = styled(Row)`
  width: 100%;
  background-color: #4b4b4b;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 4px;
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
  height: 600px;
  background-color: #ffffff;
  justify-content: center;
  position: relative;
`;
const MoneyBagPicEl = styled(Row)``;
const MoneyBagTextEl = styled(Row)`
  position: absolute;
  left: 30px;
`;
const CheckConEl = styled(Row)``;
const CoinsConEl = styled(Row)``;
const CalsulatorConEl = styled(Row)``;
function HomePage() {
  return (
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
    </ContainerEl>
  );
}

export default HomePage;
