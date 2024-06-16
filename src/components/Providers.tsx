"use client";

import { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";
import { ContextProvider } from "@/utils/Context";
import { Cursor } from "./Cursor";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SmoothScroll>
        <ContextProvider>
          <Cursor />
          {children}
        </ContextProvider>
      </SmoothScroll>
    </>
  );
};
