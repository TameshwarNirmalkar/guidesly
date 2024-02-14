"use client";

import Header from "@/components/Header";
import SpinnerLoader from "@/components/SpinnerLoader";
import { CartContext } from "@/hooks/CartContext";
import useProductList from "@/hooks/useProductList";
import { useParams } from "next/navigation";
import { FC, useMemo, useState } from "react";

const CartItemsPage: FC<{}> = (props) => {
  const params = useParams();
  const { productList, isLoading } = useProductList();
  const [, setItem] = useState<any[]>([]);

  const selectedItemList = useMemo(() => {
    return productList.filter((el) =>
      params.selectedItems.includes(String(el.id))
    );
  }, [productList, params.selectedItems]);

  const totalPrice = selectedItemList.reduce((acc, ite) => acc + ite.price, 0);

  return (
    <CartContext.Provider value={{ item: selectedItemList, setItem }}>
      <main className="">
        <header>
          <Header />
        </header>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl lg:max-w-7xl pt-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-4">
              Selected Items
            </h2>

            <div className="grid gap-4 grid-cols-3">

              {selectedItemList?.map((el: any) => (
                <div className="group relative rounded border p-3" key={el?.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={el.image}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{el.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {el?.description?.slice(1, 10)}
                      </p>
                    </div>
                    <div className="">
                      <div className="flex justify-center flex-col">
                        <p className="text-sm font-medium text-blue-600">
                          ${el.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div>
                <p className="bg-sky-500/75 rounded text-white mb-3 p-2">
                  Total Item : {selectedItemList.length}
                </p>
                <p className="bg-sky-500/75 rounded text-white p-2">
                  Total Price : {totalPrice}
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </main>
      <SpinnerLoader loading={isLoading} />
    </CartContext.Provider>
  );
};

export default CartItemsPage;
