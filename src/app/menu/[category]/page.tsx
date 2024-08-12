import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryPage() {
  return (
    <div className="flex flex-wrap  text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          className="w-full group h-[60vh] border-r-2 border-b-2 p-4 border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between even:bg-fuchsia-50"
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%] ">
              <Image src={item.img} alt={""} fill className="object-contain" />
            </div>
          )}
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="group-hover:block hidden uppercase bg-red-500 text-white p-2 rounded-md">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
