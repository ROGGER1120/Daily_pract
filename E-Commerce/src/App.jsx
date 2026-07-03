import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  const APIFetch = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log(data);
    setProducts(data); 
  };

  useEffect(() => {
    APIFetch();
  }, []);

  // const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-3 gap-6 m-7">
        {products.map((product) => (
          <div key={product.id} className="borderp-4 rounded">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto"
            />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;