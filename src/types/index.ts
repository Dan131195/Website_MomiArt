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
  stile: string;
}

export interface BioInterface {
  nome: string;
  descrizione: string;
  descrizione2: string;
  slug: string;
}

export interface SocialInterface {
  _key: string;
  piattaforma: string;
  url: string;
}

export interface ContactsInterface {
  cellulare: string;
  email: string;
  slug: string;
  social: SocialInterface[];
}
