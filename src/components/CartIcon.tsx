import React, { FC, memo, useCallback } from "react";
import { GrCart } from "react-icons/gr";

const CartIcon: FC<{ item: any; allIds: number[]; onAddItemToCart: (val: any) => void }> = memo((props) => {
  const { allIds, onAddItemToCart, item } = props;

  const onAddItem = useCallback(() => {
    onAddItemToCart(item);
  }, [onAddItemToCart]);

  return (
    <p className="p-2 cursor-pointer" onClick={onAddItem}>
      <GrCart color={allIds.includes(item.id) ? "red" : "black"} />
    </p>
  );
});

export default CartIcon;
