import React from "react";
import Image from "next/image";

function DeleteButton() {
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4">
      <Image src="/images/delete.png" alt={""} width={20} height={20} />
    </button>
  );
}

export default DeleteButton;
