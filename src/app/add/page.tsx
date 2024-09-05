"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type Option = {
  title: string;
  additionalPrice: number;
};
function AddPage() {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: 0,
    catSlug: 0,
  });
  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form className="shadow-lg flex flex-wrap gap-4 p-8">
        <h1>Add New Product</h1>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="ring-1 ring-red-200 rounded-sm"
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="desc">Description</label>
          <textarea
            className="ring-1 ring-red-200 rounded-sm"
            name="desc"
            id="desc"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            className="ring-1 ring-red-200 rounded-sm"
            name="price"
            id="price"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="category">Category</label>
          <input
            className="ring-1 ring-red-200 rounded-sm"
            type="text"
            name="category"
            id="category"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Options</label>
          <div className="flex">
            <input
              onChange={changeOption}
              className="ring-1 ring-red-200 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={changeOption}
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
              className="ring-1 ring-red-200 rounded-sm"
            />
            <button
              className="bg-gray-500 p-2 text-white"
              //   onClick={() => setOptions((prev) => [...prev, option])}
            >
              Add Option
            </button>{" "}
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="p-2 rounded-md cursor-pointer bg-gray-200 text-gray-400 flex gap-2">
              <span>Small</span>
              <span>$2</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 p-4 text-white w-48 rounded-md relative h-14 flex items-center justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPage;
