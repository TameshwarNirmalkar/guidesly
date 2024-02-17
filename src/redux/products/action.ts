import { createAsyncThunk } from '@reduxjs/toolkit';
import { setClonedData, setIsLoading, setProductCollection } from '.';

export const createProductCollectionAction = createAsyncThunk('GET_PRODUCT_COLLECTION', async (arg: any, { dispatch }) => {
    try {
        // dispatch(setIsLoading(true));
        const res = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
        // dispatch(setProductCollection(res));
        // dispatch(setClonedData(res));
        return res;
    } catch (error: any) {
        // console.log(error.toString());
    } finally {
        // dispatch(setIsLoading(false));
    }
});