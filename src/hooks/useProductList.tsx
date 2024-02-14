import { useState, useEffect, useCallback } from 'react';

export default function useProductList() {
    const [productList, setProductList] = useState<any[]>([]);

  const getProductList = useCallback(async () => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductList(res);
  }, []);

  useEffect(() => {
    getProductList()
  }, []);

  return productList;
}
