import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  price: number;
  // You might want to specify other properties of a cart item here
  // name: string;
  // price: number;
  // ...
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item=> item.id==action.payload.id);
      if(itemIndex>=0){
        newCart.splice(itemIndex, 1);
      }else{
        console.log("can't remove item as its not in the Cart");
      }
      state.items = newCart
    },
    emptyCart: (state, action)=>{
      state.items = [];
  }
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartItemsById = (state: { cart: CartState }, id: number) =>
  state.cart.items.filter(item => item.id === id);
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
console.log(removeFromCart)
export default cartSlice.reducer;
