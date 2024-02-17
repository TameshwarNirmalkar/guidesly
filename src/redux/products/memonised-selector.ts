import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@/redux/store';

export const isLoading = (state: AppState) => state.products.isLoading;
export const productCollection = (state: AppState) => state.products.productCollection;
export const selectedItems1 = (state: AppState) => state.products.selectedItems;

export const productFilterSelector = createSelector([productCollection, (productList, selectedId: any[]) => selectedId], (productList, selectedId) => {
    return productList.filter((el: any) => selectedId.includes(String(el.id)));
});

export const searchSelector = createSelector(
    [productCollection, (products, title) => title],
    (products, title) => {
        return products.filter((el: any) => el.title.toLowerCase().indexOf(title) !== -1);
    }
);

export const selectedItemsSelectorPath = createSelector([selectedItems1], (memoItem) => memoItem
    .map((el: any) => el.id)
    .toString()
    .replaceAll(",", "/"));

export const selectedIdsSelector = createSelector([selectedItems1], (memoItem) => memoItem.map((el: any) => el.id));
export const totalPriceSelector = createSelector([selectedItems1], (memoItem) => memoItem.reduce((acc: number, ite: any) => acc + ite.price, 0));

// export const addRemoveCartItemSelector = createSelector(
//     [selectedItems1, selectedIdsSelector, (products, ids, item) => item],
//     (products, ids, item) => {
//         console.log("  PD : ", products);
//         console.log("  IDs : ", ids);
//         console.log("  ITEM : ", item);

//         // return products.filter((el: any) => el.title.toLowerCase().indexOf(title) !== -1);
//         const hasItem = ids.includes(item.id);
//         if (hasItem) {
//             // dispatch(setSelectedItems([...selectedItems].filter((itm: any) => itm.id !== el.id)));
//             return products.filter((el: any) => el.id !== item.id);
//         } else {
//             return products.concat(item);
//         }
//     }
// );
