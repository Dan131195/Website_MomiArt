// Interfacce Sanity

export interface SystemInfo {
  base?: {
    id: string;
    rev: string;
  };
}

export interface SanityReference {
  _type: "reference";
  _ref: string;
}

export interface SanityImage {
  _type: "image";
  asset: SanityReference;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// Interfacce

export interface PaintingInterface {
  _id: string;
  _type: "quadro";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _originalId?: string;
  _system?: SystemInfo;
  id: string;
  rev: string;
  Disponibile: boolean;
  titolo: string;
  anno: number;
  descrizione: string;
  slug: SanitySlug;
  immagine: SanityImage;
  stile: SanityReference;
}

export interface StyleInterface {
  _createdAt: string;
  _id: string;
  _originalId: string;
  _rev: string;
  _system: SystemInfo;
  _type: "stile";
  _updateAt: string;
  descrizione: string;
  slug: SanitySlug;
  title: string;
}
