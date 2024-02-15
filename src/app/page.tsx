"use client";

import { useCallback, useEffect, useState, createContext, useMemo } from "react";
import { GrCart } from "react-icons/gr";
// import Header from "@/components/Header";
// import { CartContext } from "@/hooks/CartContext";
// import useProductList from "@/hooks/useProductList";
import SpinnerLoader from "@/components/SpinnerLoader";
import { useAppDispatch, useAppSelector } from "@redux-store/reduxTypes";
import { AppState } from "@redux-store/store";
import { setProductCollection, setSelectedItems } from "@redux-store/products";
import { createProductCollectionAction } from "@redux-store/products/action";

export default function HomePage() {
  // const { productList, isLoading } = useProductList();
  // const [item, setItem] = useState<any[]>([]);

  const { isLoading, selectedItems, productCollection, clonedData } = useAppSelector((state: AppState) => ({ ...state.products }));
  const dispatch = useAppDispatch();

  const allIds = useMemo(() => selectedItems.map((el: any) => el.id), [selectedItems]);

  useEffect(() => {
    if (!productCollection.length) {
      dispatch(createProductCollectionAction(null));
    }
  }, []);

  const onAddItemToCart = useCallback(
    (el: any) => {
      const hasItem = allIds.includes(el.id);
      if (hasItem) {
        dispatch(setSelectedItems([...selectedItems].filter((itm: any) => itm.id !== el.id)));
      } else {
        dispatch(setSelectedItems([...selectedItems].concat(el)));
      }
    },
    [selectedItems, dispatch]
  );

  const onSearchHandler = useCallback(
    (val: string) => {
      if (val) {
        setTimeout(() => {
          const filteredValue = productCollection.filter((el: any) => el.title.toLowerCase().indexOf(val) !== -1);
          dispatch(setProductCollection(filteredValue));
        }, 500);
      } else {
        dispatch(setProductCollection(clonedData));
      }
    },
    [productCollection, dispatch]
  );

  return (
    // <CartContext.Provider value={{ item, setItem }}>
    <main className="">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl pt-3">
          <div>
            <span>
              <input
                placeholder="Search product by name"
                className="w-full rounded p-2 border"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchHandler(e.target.value)}
              />
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Today's Deal</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productCollection?.map((el: any) => (
              <div className="group relative rounded border p-3" key={el?.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={el.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{el.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{el?.description?.slice(1, 20)}</p>
                  </div>
                  <div className="">
                    <div className="flex justify-center flex-col">
                      <p className="text-sm font-medium text-blue-600">${el.price}</p>
                      <p className="p-2 cursor-pointer" onClick={() => onAddItemToCart(el)}>
                        <GrCart color={allIds.includes(el.id) ? "red" : "black"} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SpinnerLoader loading={isLoading} />
    </main>
    // </CartContext.Provider>
  );
}
