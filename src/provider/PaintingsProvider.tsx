import { useEffect, useState, type ReactNode } from "react";
import type { PaintingInterface } from "../types";
import client from "../api/client";
import { PaintingsContext } from "../context/PaintingsContext";

export const PaintingsProvider = ({ children }: { children: ReactNode }) => {
  const [paintings, setPaintings] = useState<PaintingInterface[]>([]);

  useEffect(() => {
    client
      .fetch<PaintingInterface[]>(`*[_type == 'quadro']`)
      .then(setPaintings)
      .catch((e: string) => console.log(e));
  }, []);

  return (
    <PaintingsContext.Provider value={{ paintings }}>
      {children}
    </PaintingsContext.Provider>
  );
};
