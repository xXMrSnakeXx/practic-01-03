import { createSlice } from "@reduxjs/toolkit";
import { fetchBaseCurrency } from "./operation";

const initialState = {
    baseCurrency: '',
  };
  
  export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
      setBaseCurrensy: (state, { payload }) => {
        state.baseCurrency = payload;
      },
    },
    extraReducers: builder =>
      builder
        .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
          state.baseCurrency = payload;
        })
  });
  
  export const { setBaseCurrensy } = currencySlice.actions;
  
  export const currencyReducer = currencySlice.reducer;