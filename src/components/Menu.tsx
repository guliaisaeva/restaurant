"use client";
import React, { useState } from "react";
import Image from "next/image";

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image src="/images/open.png" alt={""} width={20} height={20} />
      ) : (
        <Image src="/images/close.png" alt={""} width={20} height={20} />
      )}
    </div>
  );
}

export default Menu;
