import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate =  useNavigate()
  const [products, setProducts] = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("every field must have atleast four characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]))
    navigate("/")
    console.log(products);
  };
  return (
    <div>
      <form
        className="p-[5%] w-screen h-screen  flex flex-col items-center gap-3"
        action=""
        onSubmit={AddProductHandler}
      >
        <h1 className="w-[40%] text-4xl font-semibold mb-4">Add Product</h1>
        <input
          className=" w-[40%] outline-none bg-zinc-200 p-2"
          type="url"
          placeholder="music url"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          className=" w-[40%] outline-none bg-zinc-200 p-2"
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="w-[40%] flex gap-3">
          <input
            className=" w-full outline-none bg-zinc-200 p-2"
            type="text"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className=" w-[40%] outline-none bg-zinc-200 p-2 "
            type="number"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <textarea
          rows="8"
          className=" w-[40%] outline-none bg-zinc-200 p-2"
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="py-2 px-4 text-xl font-semibold border rounded border-blue-300 text-blue-400">
          Add new Product
        </button>
      </form>
    </div>
  );
}

export default Create;
