"use client";

import React, { memo } from "react";
import Link from "next/link";
import { BsAmazon } from "react-icons/bs";
import NavBar from "./NavBar";

const Header = memo(() => {
  return (
    <div className="w-full bg-white shadow-xl">
      <div className="border-b border-gray-200">
        <div className="-mb-px flex space-x-8 px-4 nav_bar" aria-orientation="horizontal" role="tablist">
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
          <NavBar />
        </div>
      </div>
    </div>
    // <div>
    //   <NavBar />
    // </div>
  );
});

export default Header;
