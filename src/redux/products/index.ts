import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from "@redux-store/store";

interface ProductCollectionI {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    title: string;
    rating: object;
}

interface ProductStateI {
    selectedItems: any[];
    productCollection: ProductCollectionI[];
    isLoading: boolean;
    clonedData: ProductCollectionI[];
}

const initialState: ProductStateI = { selectedItems: [], productCollection: [], isLoading: false, clonedData: [] };

const productSlice = createSlice({
    name: 'PRODUCT_SLICE',
    initialState,
    reducers: {
        setIsLoading(state: AppState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setSelectedItems(state: AppState, action: PayloadAction<ProductCollectionI[]>) {
            state.selectedItems = action.payload;
        },
        setProductCollection(state: AppState, action: PayloadAction<ProductCollectionI[]>) {
            state.productCollection = action.payload;
        },
        setClonedData(state: AppState, action: PayloadAction<ProductCollectionI[]>) {
            state.clonedData = action.payload;
        }
    },
}) as any;

export const { setSelectedItems, setProductCollection, setIsLoading, setClonedData } = productSlice.actions;
export default productSlice.reducer;

const productCollection = (state: AppState) => state.products.productCollection;
export const productCollectionSelector = createSelector([productCollection], (memoItem) => memoItem);

const selectedItems = (state: AppState) => state.products.selectedItems;
export const selectedItemsSelector = createSelector([selectedItems], (memoItem) => memoItem);