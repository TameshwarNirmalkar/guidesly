"use client";

import { useRef } from "react";
import { AppStore, makeStore, store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {

  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}