"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};
type Option = {
  title: string;
  additionalPrice: number;
};
function AddPage() {
  const { data: session, status } = useSession();
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });
  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });
  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();

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
  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  };

  //   const upload = async () => {
  //     const data = new FormData();
  //     data.append("file", file!);
  //     data.append("upload_preset", "restaurant");
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/:dyhjhbwej/cld-sample-4",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "multipart/form-data" },
  //         body: data,
  //       }
  //     );
  //     const resData = await res.json();
  //     return resData.url;
  //   };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //   const url = await upload();
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          // img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();
      console.log("data " + data);
      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>Add New Product</h1>
        {/* <div className="w-full flex flex-col gap-2">
          <label htmlFor="image">Image</label>
          <input
            className="ring-1 ring-red-200 rounded-sm"
            type="file"
            onChange={handleChangeImg}
          />
        </div> */}
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
            onChange={handleChange}
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
            name="catSlug"
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
            <div
              className="bg-gray-500 p-2 text-white"
              onClick={() => setOptions((prev) => [...prev, option])}
            >
              Add Option
            </div>{" "}
          </div>
          <div className="flex  flex-wrap gap-4 mt-2">
            {options.map((item) => (
              <div
                className="p-2 rounded-md cursor-pointer bg-gray-200 text-gray-400 flex gap-2"
                key={item.title}
                onClick={() =>
                  setOptions(options.filter((opt) => opt.title !== item.title))
                }
              >
                <span>{item.title}</span>
                <span>${item.additionalPrice}</span>
              </div>
            ))}
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
