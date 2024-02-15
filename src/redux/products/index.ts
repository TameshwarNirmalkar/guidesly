import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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
}

const initialState = { selectedItems: [], productCollection: [], isLoading: false } as ProductStateI

const productSlice = createSlice({
    name: 'PRODUCT_SLICE',
    initialState,
    reducers: {
        setIsLoading(state: AppState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setSelectedItems(state: AppState, action: PayloadAction<ProductCollectionI[]>) {
            state.selectedItems = action.payload
        },
        setProductCollection(state: AppState, action: PayloadAction<ProductCollectionI[]>) {
            state.productCollection = action.payload
        }
    },
}) as any

export const { setSelectedItems, setProductCollection, setIsLoading } = productSlice.actions
export default productSlice.reducer