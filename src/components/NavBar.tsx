"use client";

import Link from "next/link";
import React, { FC, memo, useMemo } from "react";
import { BsAmazon } from "react-icons/bs";
import { GrCart } from "react-icons/gr";

const NavBar: FC<{cartItems: any[]}> = memo((props) => {

  const {cartItems} = props;

  const calculatePrice = useMemo(() => {
    return cartItems.reduce((ite, acc) => ite+acc.price, 0);
  }, [cartItems])
  
  const routePath = useMemo(() => {
    return cartItems.map(el => el.id).toString().replaceAll(',','/');
  }, [cartItems])
  
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
            <span className="pr-2"><GrCart /></span> <span className="text-red-500">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
