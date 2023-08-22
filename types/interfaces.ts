import { ImageSourcePropType } from "react-native/Libraries/Image/Image";

export interface CategoryType {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export interface DishType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

export interface RestaurantType {
  id: number;
  name: string;
  image: ImageSourcePropType;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: DishType[];
}

export interface FeaturedType {
  id: number;
  title: string;
  description: string;
  restaurants: RestaurantType[];
}

export interface RootStackParamList {
  
}