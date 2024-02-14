"use client";

import { useCallback, useEffect, useState, createContext, useMemo } from "react";
import { GrCart } from "react-icons/gr";
import { CartContext } from "@/hooks/CartContext";
import Header from "@/components/Header";
import useProductList from "@/hooks/useProductList";

export default function HomePage() {
  const productList = useProductList();
  const [item, setItem] = useState<any[]>([]);
  // const [productList, setProductList] = useState<any[]>([]);
  // const [item, setItem] = useState<any[]>([]);

  // const getProductList = useCallback(async () => {
  //   const res = await fetch("https://fakestoreapi.com/products").then((res) =>
  //     res.json()
  //   );
  //   setProductList(res);
  //   console.log("REs: ", res);
  // }, []);

  // useEffect(() => {
  //   getProductList();
  // }, []);

  const allIds = useMemo(() => item.map((el) => el.id), [item])

  const onAddItemToCart = useCallback(
    (el: any) => {
      const hasItem = allIds.includes(el.id);
      if(hasItem){
        setItem([...item].filter(itm => itm.id !== el.id));
      } else {

        setItem([...item].concat(el));
      }
    },
    [item]
  );

  return (
    <CartContext.Provider value={{ item, setItem }}>
      <main className="">
      <header>
            <Header />
          </header>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl lg:max-w-7xl pt-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Today's Item
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productList?.map((el: any) => (
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
                      <p className="mt-1 text-sm text-gray-500">
                        {el?.description?.slice(1, 10)}
                      </p>
                    </div>
                    <div className="">
                      <div className="flex justify-center flex-col">
                        <p className="text-sm font-medium text-blue-600">
                          ${el.price}
                        </p>
                        <p
                          className="p-2 cursor-pointer"
                          onClick={() => onAddItemToCart(el)}
                        >
                          <GrCart color={allIds.includes(el.id) ? 'red' : 'black' } />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </CartContext.Provider>
  );
}
