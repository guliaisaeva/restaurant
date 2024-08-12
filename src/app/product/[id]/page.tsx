import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

function SingleProductPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
      <div className="relative">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt={""}
            className="object-contain"
            fill
          />
        )}
        <div className="">
          <h1>{singleProduct.title}</h1>
          <p>{singleProduct.desc}</p>
          <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
