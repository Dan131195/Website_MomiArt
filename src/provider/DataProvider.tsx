import { useEffect, useState, type ReactNode } from "react";
import {
  type BioInterface,
  type ContactsInterface,
  type PaintingInterface,
  type StyleInterface,
} from "../types";
import client from "../api/client";
import { DataContext } from "../context/DataContext";

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [paintings, setPaintings] = useState<PaintingInterface[]>([]);
  const [styles, setStyles] = useState<StyleInterface[]>([]);
  const [bio, setBio] = useState<BioInterface>({
    nome: "",
    descrizione: "",
    descrizione_breve: "",
    slug: "",
  });
  const [contacts, setContacts] = useState<ContactsInterface>({
    cellulare: "",
    email: "",
    slug: "",
    social: [],
  });
  const [loading, setLoading] = useState(true);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

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
        "stile": stile->stile,
        "stileSlug": stile->slug.current
        }`),

      client.fetch<StyleInterface[]>(`*[_type == 'stile'] {
        _id,
        descrizione,
        "slug": slug.current,
        stile,
        }`),

      client.fetch<BioInterface>(
        `*[_type == "bio"][0]{ 
        nome, 
        descrizione, 
        descrizione_breve, 
        "slug": slug.current 
        }`,
      ),

      client.fetch<ContactsInterface>(
        `*[_type == "contatti"][0]{ 
        cellulare, 
        email, 
        "slug": slug.current, 
        social[]{
         _key, 
         piattaforma, 
         url } }`,
      ),

      delay(2000),
    ])

      .then(([paintingsData, stylesData, bioData, contactsData]) => {
        setPaintings(paintingsData);
        setStyles(stylesData);
        setBio(bioData);
        setContacts(contactsData);
      })
      .catch((e: Error) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ paintings, styles, bio, contacts, loading }}>
      {children}
    </DataContext.Provider>
  );
};
