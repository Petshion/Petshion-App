import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AUTHItem {
  access_token: string;
  id: string;
  userName: string;
  userImage: string;
}

export interface AUTHState {
  AUTHItem: AUTHItem | null;
}

export const setAUTH = async (AUTHItem: AUTHState) => {
  await AsyncStorage.setItem('AUTH', JSON.stringify(AUTHItem));
};

export const getAUTH = async () => {
  try {
    const isAUTH = await AsyncStorage.getItem('AUTH');
    if (isAUTH != null) {
      return JSON.parse(isAUTH);
    } else {
      return null;
    }
  } catch (error) {
    console.log(' [AUTH] :' + error);
  }
};

export const removeAUTH = async () => {
  try {
    await AsyncStorage.removeItem('AUTH');
  } catch (error) {
    console.log(' [AUTH] :' + error);
  }
};

const initialState: AUTHState = {AUTHItem: null};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    insert: (state, {payload: authItem}) => {
      setAUTH(authItem);
      state.AUTHItem = authItem;
    },
    remove: state => {
      removeAUTH();
      state.AUTHItem = null;
    },
  },
});

export const {insert, remove} = authSlice.actions;

export default authSlice.reducer;
