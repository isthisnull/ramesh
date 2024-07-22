"use client";
import mainStore from "../../state/mainStore";
import { Provider } from "react-redux";
import React from "react";
import Header from "../../header/Header";

export default function AppWrapper({ children }: { children: any }) {
  return (
    <Provider store={mainStore}>
      <Header />
      {children}
    </Provider>
  );
}
