export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  specs: string;
  sale?: boolean;
  new?: boolean;
  releaseDate: string; // Add this field if you want to sort by newest
}

export interface FilterOption {
  label: string;
  count: number;
  checked?: boolean;
}

export interface FilterData {
  categories: CategoryFilter[];
  brands: BrandFilter[];
  priceRanges: PriceRangeFilter[];
  ratings: RatingFilter[];
  features: FeatureFilter[];
  availability: AvailabilityFilter[];
  releaseDates: ReleaseDateFilter[];
}

interface BaseFilter {
  count: number;
}

export interface CategoryFilter extends BaseFilter {
  name: string;
}

export interface BrandFilter extends BaseFilter {
  name: string;
}

export interface PriceRangeFilter extends BaseFilter {
  range: string;
  min: number;
  max: number | null;
}

export interface RatingFilter extends BaseFilter {
  stars: number;
  min?: number;
}

export interface FeatureFilter extends BaseFilter {
  name: string;
}

export interface AvailabilityFilter extends BaseFilter {
  status: string;
}

export interface ReleaseDateFilter extends BaseFilter {
  period: string;
}
