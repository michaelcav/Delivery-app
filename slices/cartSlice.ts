import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: any
}

const initialState: CounterState = {
  items: [],
}

export const restaurantSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex((item: { id: any }) => item.id == action.payload.id);
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log(`can't remove the item that is not add to cart`);
      }
       state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    }
  }
})
// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: { restaurant: { restaurant: any } }) => state.restaurant.restaurant;

export default restaurantSlice.reducer