import {createSlice} from '@reduxjs/toolkit';

export interface BasketItem {
  id: string;
  title: string;
  image: string;
  color: string;
  size: string;
  count: number;
  price: number;
  checked: boolean;
}

export interface BasketState {
  baskets: BasketItem[];
}

const initialState: BasketState = {
  baskets: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    allSelect: state => {
      state.baskets.map(baskets => {
        baskets.checked = true;
      });
    },
    toggleSelect: (state, {payload: id}) => {
      state.baskets[id].checked = !state.baskets[id].checked;
    },
    minusCount: (state, {payload: id}) => {
      if (state.baskets[id].count === 1) {
        return;
      }
      state.baskets[id].count = state.baskets[id].count - 1;
    },
    plusCount: (state, {payload: id}) => {
      state.baskets[id].count = state.baskets[id].count + 1;
    },
    remove: (state, {payload: id}) => {
      const index = state.baskets.findIndex(basket => basket.id === id);
      state.baskets.splice(index, 1);
    },
    orderRemove: state => {
      for (let i = 0; i < state.baskets.length; i++) {
        if (state.baskets[i].checked === true) {
          state.baskets.splice(i, 1);
          i--;
        }
      }
    },
  },
});

export const {
  allSelect,
  toggleSelect,
  minusCount,
  plusCount,
  remove,
  orderRemove,
} = basketSlice.actions;

export default basketSlice.reducer;
