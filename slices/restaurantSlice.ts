import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RestaurantType} from '../types/interfaces'

export interface CounterState {
  restaurant: RestaurantType | null; // Allow null value here
}


const initialState: CounterState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<any>) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: { restaurant: CounterState }) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
