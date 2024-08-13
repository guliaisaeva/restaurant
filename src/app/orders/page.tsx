import React from "react";

function OrdersPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <th className="hidden md:block py-6 px-1">12345667e66767</th>
            <th className="py-6 px-1">19.07.2023</th>
            <th className="py-6 px-1">89.90</th>
            <th className="hidden md:block py-6 px-1">
              Big Burger Menu (2),Veggie Pizza (2), Coca Cola 1L (2)
            </th>
            <th className="py-6 px-1">On the way (approx. 10min)...</th>
          </tr>
          <tr className="text-sm md:text-base  odd:bg-gray-100">
            <th className="hidden md:block py-6 px-1">12345667e66767</th>
            <th className="py-6 px-1">19.07.2023</th>
            <th className="py-6 px-1">89.90</th>
            <th className="hidden md:block py-6 px-1">
              Big Burger Menu (2),Veggie Pizza (2), Coca Cola 1L (2)
            </th>
            <th className="py-6 px-1">On the way (approx. 10min)...</th>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <th className="hidden md:block py-6 px-1">12345667e66767</th>
            <th className="py-6 px-1">19.07.2023</th>
            <th className="py-6 px-1">89.90</th>
            <th className="hidden md:block py-6 px-1">
              Big Burger Menu (2),Veggie Pizza (2), Coca Cola 1L (2)
            </th>
            <th className="py-6 px-1">On the way (approx. 10min)...</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
