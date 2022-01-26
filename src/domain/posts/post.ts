export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
}

export interface Cover {
  id: number;
  attributes: CoverAttributes;
}

export interface CoverAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Format[];
}

export interface Format {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetada;
}

export interface ProviderMetada {
  public_id: string;
  resource_type: string;
}
