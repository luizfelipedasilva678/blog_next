export interface PostsData {
  data: Post[];
  meta: MetaOptions;
}

export interface MetaOptions {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface Author {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface Category {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface PostAttributes {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Cover;
  author: Author;
  category: Category;
}

export interface Cover {
  data: {
    id: number;
    attributes: CoverAttributes;
  };
}

export interface CoverAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: Format;
    small: Format;
    medium: Format;
    thumbnail: Format;
  };
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
