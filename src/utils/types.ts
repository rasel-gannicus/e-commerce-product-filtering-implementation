export interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    oldPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    specs: string;
    sale?: boolean;
    new?: boolean;
  }
  
  export interface FilterOption {
    label: string;
    count: number;
    checked?: boolean;
  }