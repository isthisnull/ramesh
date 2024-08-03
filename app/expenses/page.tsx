"use client";
import React from "react";
import styled from "styled-components";
import Row from "@/src/frontend/components/common/Row";

const ContainerEl = styled(Row)`
  padding: 100px;
  width: 100%;
  height: 900px;
  background: rgb(99, 82, 236);
  background: linear-gradient(
    139deg,
    rgba(99, 82, 236, 1) 0%,
    rgba(99, 82, 236, 1) 30%,
    rgba(195, 106, 196, 1) 100%
  );
`;
const List = styled.ul``;
const ListedEl = styled.li`
  color: tan;
`;
const DataEl = [
  { name: "kir", lastname: "kirekhari" },
  { name: "koni", lastname: "konekhari" },
];
const renPosts = DataEl.map((post) => {
  return (
    <>
      <ListedEl>{post.name}</ListedEl>
      <ListedEl>{post.lastname}</ListedEl>
    </>
  );
});

const AddButtonEl = styled.button``;
const OnAddHandle = (item: string) => {
  DataEl.push(item);
};
function page() {
  return (
    <ContainerEl>
      <List>{renPosts}</List>
      <AddButtonEl>ADD</AddButtonEl>
    </ContainerEl>
  );
}

export default page;
