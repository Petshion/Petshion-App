export interface ListItem {
  _id?: string;
  product_id?: string;
  thumbnail_image: string;
  checked: boolean;
}

export interface Product {
  images: string[];
  _id: string;
  title: string;
  brand_name: string;
  price: number;
  kind: string;
  content: string;
  rate: number;
  size_content: string[][];
  size: string[];
  color: string[];
  AR_image: string;
}

export interface RootStackParamList {
  navigate: any;
  name: string[];
  params: string;
}
