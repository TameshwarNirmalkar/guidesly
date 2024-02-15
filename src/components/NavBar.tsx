"use client";

import { useAppSelector } from "@/redux/reduxTypes";
import { AppState } from "@/redux/store";
import Link from "next/link";
import React, { FC, memo, useMemo } from "react";
import { BsAmazon } from "react-icons/bs";
import { GrCart } from "react-icons/gr";

const NavBar: FC<{cartItems: any[]}> = memo((props) => {
  const {selectedItems, productCollection, isLoading} = useAppSelector((state: AppState) => ({...state.products}));

  // const {cartItems} = props;

  // const calculatePrice = useMemo(() => {
  //   return selectedItems.reduce((acc: number, ite: any) => acc+ite.price, 0);
  // }, [selectedItems])
  
  const routePath = useMemo(() => {
    return selectedItems.map((el:any) => el.id).toString().replaceAll(',','/');
  }, [selectedItems])
  
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="border-b border-gray-200">
        <div
          className="-mb-px flex space-x-8 px-4 nav_bar"
          aria-orientation="horizontal"
          role="tablist"
        >
          <div>
            <BsAmazon />
          </div>

          <Link
            className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
            aria-controls="tabs-1-panel-1"
            role="tab"
            type="button"
            href={"/"}
          >
            Home
          </Link>
        <div>
          <Link href={`/cart-items/${routePath}`} className="flex items-center">
            <span className="pr-2"><GrCart /></span> 
            {!!selectedItems.length && <span className="text-red-500">{selectedItems.length}</span>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
