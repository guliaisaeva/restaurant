"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function CartIcon() {

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, [])


  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:h-5 md:w-5 ">
        <Image src="/images/cart.png" alt={""} fill />
      </div>
      <span>Cart ({totalItems})</span>{" "}
    </Link>
  );
}
export default CartIcon;
