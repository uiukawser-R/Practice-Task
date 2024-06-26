import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Edit = () => {
    const products=useLoaderData();

    const [id, setId] = useState(products.id);
    const [name, setName] = useState(products.name);
    const [seller, setSeller] = useState(products.seller);
    const [price, setPrice] = useState(products.price);
    const [category, setCategory] = useState(products.category);
    const [img, setImg] = useState(products.img);
    const [stock, setStock] = useState(products.stock);
    const [ratings, setRatings] = useState(products.ratings);


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = e.target;
      const id = form.id.value;
      const name = form.name.value;
      const seller = form.seller.value;
      const price = form.price.value;
      const category = form.category.value;
      const img = form.img.value;
      const stock = form.stock.value;
      const ratings = form.ratings.value;
  
      const data = { id, name, seller, price, category, img,stock,ratings };
      console.log(data);
  


    await fetch(`http://localhost:3000/product/${products.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
  
    return (
      <div>
        <h1 className="text-5xl font-bold text-center">Edit Product</h1>
  
        <div className="my-16">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="seller"
                placeholder="Seller"
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="category"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="stock"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="ratings"
                placeholder="ratings"
                value={ratings}
                onChange={(e) => setRatings(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="img"
                placeholder="Image_Url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            
            <div className="mt-2">
              <input
                className="bg-gray-100 p-4 w-full border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-full bg-red-500 text-white p-4"
                type="submit"
                value="Add product"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Edit;
  