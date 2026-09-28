import { createContext, useContext } from "react";
import type { PaintingInterface, StyleInterface } from "../types/index.ts";

export type DataType = {
  paintings: PaintingInterface[];
  styles: StyleInterface[];
  loading: boolean;
};

export const DataContext = createContext<DataType | undefined>(undefined);

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("DataContext error, controllare DataProvider.");
  return ctx;
};
