import {createSlice} from '@reduxjs/toolkit';

interface FilterState {
  filter: {
    color: string[];
    size: string[];
    kind: string[];
  };
}
const initialState: FilterState = {
  filter: {
    color: [],
    size: [],
    kind: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addColor: (state, {payload: findColor}) => {
      state.filter.color.push(findColor);
    },
    removeColor: (state, {payload: findColor}) => {
      const index = state.filter.color.findIndex(color => color === findColor);
      state.filter.color.splice(index, 1);
    },
    addSize: (state, {payload: findSize}) => {
      state.filter.size.push(findSize);
    },
    removeSize: (state, {payload: findSize}) => {
      const index = state.filter.size.findIndex(size => size === findSize);
      state.filter.size.splice(index, 1);
    },
    addKind: (state, {payload: findKind}) => {
      state.filter.kind.push(findKind);
    },
    removeKind: (state, {payload: findKind}) => {
      const index = state.filter.kind.findIndex(kind => kind === findKind);
      state.filter.kind.splice(index, 1);
    },
  },
});

export const {addColor, addSize, addKind, removeColor, removeSize, removeKind} =
  filterSlice.actions;

export default filterSlice.reducer;
