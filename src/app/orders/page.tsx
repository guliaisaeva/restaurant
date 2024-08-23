"use client";
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function OrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:3000/api/orders");
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    // Make sure data is an array of plain objects
    if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error("Data format is incorrect");
    }
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  if (isLoading || status === "loading") return "Loading";
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
  };

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
          {data?.map((item: OrderType) => (
            <tr className="text-sm md:text-base bg-red-50" key={item.id}>
              <th className="hidden md:block py-6 px-1">{item.id}</th>
              <th className="py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </th>
              <th className="py-6 px-1">{item.price}</th>
              <th className="hidden md:block py-6 px-1">
                {item.products[0].title}{" "}
              </th>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-red-400 p-2 rounded-full">
                      <Image
                        src="/images/edit.png"
                        alt={""}
                        width={20}
                        height={20}
                      />
                    </button>
                  </form>
                </td>
              ) : (
                <th className="py-6 px-1">{item.status}</th>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
