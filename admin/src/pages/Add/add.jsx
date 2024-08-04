import React, { useState } from "react";
import "./add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Burger",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    setImage(file);
    console.log("Selected image file:", file); // Debugging log
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Burger",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while uploading the image.");
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="add text-slate-100">
      <form onSubmit={onSubmitHandler} className="flex-col gap-5">
        <div className="text-center font-serif font-bold text-red-400">ADD ITEMS</div>
        <div className="add-img-upload flex-col gap-5">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.Image1}
              alt="image"
            />
          </label>
          <input
            onChange={onImageChangeHandler}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col text-white">
          <p className="text-white">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col text-white">
          <p className="text-white">Product Description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Desserts">Desserts</option>
              <option value="Mix veg">Mix veg</option>
              <option value="South Indian Special">South Indian Special</option>
              <option value="Samosa">Samosa</option>
              <option value="Veg Pulao">Veg Pulao</option>
              <option value="Thali">Thali</option>
              <option value="Noodles">Noodles</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Momos">Momos</option>
              <option value="Taco">Taco</option>
              <option value="Sushi">Sushi</option>
              <option value="North Indian Special">North Indian Special</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
