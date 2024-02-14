import { useState, useEffect, useCallback } from 'react';

export default function useProductList() {
    const [productList, setProductList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProductList = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductList(res);
    setIsLoading(false)
  }, []);

  useEffect(() => {
    getProductList()
  }, []);

  return {productList, isLoading};
}
