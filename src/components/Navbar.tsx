import React from "react";
import Menu from "./Menu";
import Link from "next/link";

function Navbar() {
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
      <Link className="text-xl" href="/">
        Gussimo
      </Link>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
