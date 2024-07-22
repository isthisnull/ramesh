"use client";
import React from "react";
import styled from "styled-components";
import Row from "@/src/frontend/components/common/Row";
import Link from "next/link";
const ConEl = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 400px;
`;
const ButEl = styled.button``;
const LinkEl = styled(Row)``;
function page() {
  return (
    <ConEl>
      <LinkEl>
        <Link href="/about/aboutcon">
          <ButEl>go to aboutcon</ButEl>
        </Link>
      </LinkEl>
    </ConEl>
  );
}

export default page;
