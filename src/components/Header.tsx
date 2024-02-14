'use client';

import React, { memo, useContext } from 'react'
import NavBar from './NavBar';
import { CartContext } from '@/hooks/CartContext';

const Header = memo(() => {
  const { item } = useContext<any>(CartContext);
  return (
    <div>
        <NavBar cartItems={item} />
    </div>
  )
})

export default Header