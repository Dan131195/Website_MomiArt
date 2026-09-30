// Interfacce Sanity

export interface SanityReference {
  _type: "reference";
  _ref: string;
}

export interface SanityImage {
  _type: "image";
  asset: SanityReference;
}

// Interfacce

export interface PaintingInterface {
  _id: string;
  _createdAt: string;
  titolo: string;
  anno: number;
  descrizione: string | null;
  Disponibile: boolean;
  immagine: SanityImage;
  slug: string;
  stile: string | null;
}

export interface StyleInterface {
  _id: string;
  descrizione: string;
  slug: string;
  title: string;
}
