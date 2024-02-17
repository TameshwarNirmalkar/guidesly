"use client";

import { selectedItems1, selectedItemsSelectorPath } from "@/redux/products/memonised-selector";
import { useAppSelector } from "@/redux/reduxTypes";
import React, { FC, memo, useMemo } from "react";
import Link from "next/link";
import { GrCart } from "react-icons/gr";

const NavBar: FC<{ cartItems?: any[] }> = memo((props) => {
  const selectedItems = useAppSelector(selectedItems1);
  const routePath = useAppSelector(selectedItemsSelectorPath);

  return (
    <div>
      <Link href={`/cart-items/${routePath}`} className="flex items-center">
        <span className="pr-1">
          <GrCart />
        </span>
        {!!selectedItems.length && <span className="text-red-500">{selectedItems.length}</span>}
      </Link>
    </div>
  );
});

export default NavBar;
