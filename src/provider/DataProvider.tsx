import { useEffect, useState, type ReactNode } from "react";
import type { PaintingInterface, StyleInterface } from "../types";
import client from "../api/client";
import { DataContext } from "../context/DataContext";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [paintings, setPaintings] = useState<PaintingInterface[]>([]);
  const [styles, setStyles] = useState<StyleInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.fetch<
        PaintingInterface[]
      >(`*[_type == "quadro"] | order(anno desc) {
        _id,
        _createdAt,
        titolo,
        anno,
        descrizione,
        Disponibile,
        immagine,
        "slug": slug.current,
        "stile": stile->stile
        }`),
      client.fetch<StyleInterface[]>(`*[_type == 'stile'] {
        _id,
        descrizione,
        slug,
        stile,
        }`),
    ])

      .then(([paintingsData, stylesData]) => {
        setPaintings(paintingsData);
        setStyles(stylesData);
      })
      .catch((e: Error) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ paintings, styles, loading }}>
      {children}
    </DataContext.Provider>
  );
};
