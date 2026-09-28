import { createContext, useContext } from "react";
import type { PaintingInterface } from "../types/index.ts";

export type PaintingsType = {
  paintings: PaintingInterface[];
};

export const PaintingsContext = createContext<PaintingsType | undefined>(
  undefined,
);

export const usePaintings = () => {
  const ctx = useContext(PaintingsContext);
  if (!ctx) throw new Error("usePaintings error");
  return ctx;
};
