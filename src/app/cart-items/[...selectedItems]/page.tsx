"use client";

import SpinnerLoader from "@/components/SpinnerLoader";
import { productFilterSelector, selectedItems1, totalPriceSelector } from "@/redux/products/memonised-selector";
import { selectAllProducts, setSelectedItems } from "@/redux/products";
import { createProductCollectionAction } from "@redux-store/products/action";

import { useAppDispatch, useAppSelector } from "@redux-store/reduxTypes";
import { AppState } from "@redux-store/store";
import { useParams } from "next/navigation";
import { FC, useEffect, useMemo, useCallback } from "react";

const CartItemsPage: FC<{}> = (props) => {
  const params: { selectedItems: string[] } = useParams();

  // const { selectedItems, productCollection, isLoading } = useAppSelector((state: AppState) => ({ ...state.products }));
  const productCollection = useAppSelector(selectAllProducts);
  const selectedItems: any[] = useAppSelector(selectedItems1);
  const totalPrice = useAppSelector(totalPriceSelector);
  const seletedList = useAppSelector((state: AppState) => productFilterSelector(state, params.selectedItems));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productCollection.length) {
      dispatch(createProductCollectionAction(null));
    }
  }, []);

  useEffect(() => {
    dispatch(setSelectedItems(seletedList));
  }, [dispatch, seletedList]);

  const onRemoveItemToCart = useCallback(
    (el: any) => {
      dispatch(setSelectedItems([...selectedItems].filter((itm: any) => itm.id !== el.id)));
    },
    [selectedItems, dispatch]
  );

  return (
    // <CartContext.Provider value={{ item: selectedItemList, setItem }}>
    <main className="">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl pt-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-4">Added cart items</h2>

          <div className="grid grid-flow-col gap-3">
            <div className="col-span-4">
              {selectedItems?.map((el: any) => (
                <div className="group relative rounded border p-3" key={el?.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={el.image} alt={el.description} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{el.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{el?.description?.slice(1, 10)}</p>
                    </div>
                    <div className="">
                      <div className="flex justify-center flex-col">
                        <p className="text-sm font-medium text-blue-600">${el.price}</p>
                        <p className="cursor-pointer text-red-600" onClick={() => onRemoveItemToCart(el)}>
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1">
              <p className="bg-sky-500/75 rounded text-white mb-3 p-2">Total Item : {selectedItems.length}</p>
              <p className="bg-sky-500/75 rounded text-white p-2">Total Price : {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <SpinnerLoader loading={false} />
    </main>
    // </CartContext.Provider>
  );
};

export default CartItemsPage;
