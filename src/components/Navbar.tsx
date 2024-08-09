import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="./">Homepage</Link>
        <Link href="./menu">Menu</Link>
        <Link href="./contact">Contact</Link>
      </div>
      {/* Logo */}
      <Link className="text-xl md:font-bold flex-1 md:text-center" href="/">
        Gussimo
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 r-2 lg:static">
          <Image src="/images/phone.png" alt={""} width={20} height={20} />
          <span>123 43 456 66</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/menu">Orders</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
