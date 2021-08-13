export interface ListItem {
  _id: string;
  images: string;
}

export interface Product {
  images: string[];
  _id: string;
  title: string;
  brand_name: string;
  price: number;
  kind: string;
  content: string;
  size_content: string[][];
  size: string;
}

export interface RootStackParamList {
  navigate: any;
  name: string[];
  params: string;
}
