import { createAsyncThunk } from "@reduxjs/toolkit/dist";
import { getCurrentPosition } from "service/getCurrentPosition";

export const fetchBaseCurrency = createAsyncThunk(
    'currency/base', 
    async (coords, thunkApi) => {
      const { baseCurrency } = thunkApi.getState();
      if (baseCurrency) {
        return thunkApi.rejectWithValue('there is already a base currency');
      }
      try {
       const data = await getCurrentPosition(coords) 
       //console.log('fetchBaseCurrency :', data);
       return data.results[0].annotations.currency.iso_code;
      } catch (error) {
          return thunkApi.rejectWithValue(error.message);
      }
    })