import {createSlice} from '@reduxjs/toolkit';
import {basketItems} from '../testItem/dummy';

export interface BasketItemState {
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
  baskets: BasketItemState[];
}

const initialState: BasketState = {
  baskets: basketItems,
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
    allDisSelect: state => {
      state.baskets.map(baskets => {
        baskets.checked = false;
      });
    },
    toggleSelect: (state, {payload: id}) => {
      const index = state.baskets.findIndex(basket => basket.id === id);
      state.baskets[index].checked = !state.baskets[index].checked;
    },
    minusCount: (state, {payload: id}) => {
      const index = state.baskets.findIndex(basket => basket.id === id);
      if (state.baskets[index].count === 1) {
        return;
      }
      state.baskets[index].count = state.baskets[index].count - 1;
    },
    plusCount: (state, {payload: id}) => {
      const index = state.baskets.findIndex(basket => basket.id === id);
      state.baskets[index].count = state.baskets[index].count + 1;
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
  allDisSelect,
  toggleSelect,
  minusCount,
  plusCount,
  remove,
  orderRemove,
} = basketSlice.actions;

export default basketSlice.reducer;
