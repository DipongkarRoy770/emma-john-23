import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../componets/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [seeAll, setSeeAll] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAllDdata = () => {
    setSeeAll(true);
    toast("all produccta see more");
  };
  const handleClckData = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="md:flex mt-24">
      <div className="w-full px-6 md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-2 gap-4 mb-8">
        {products.slice(0, seeAll ? 75 : 9).map((product) => (
          <SingleProducts
            key={product.id}
            product={product}
            handleClckData={handleClckData}
          ></SingleProducts>
        ))}
        {!seeAll && (
          <button onClick={handleAllDdata} className="btn btn-success">
            see more
          </button>
        )}
        <ToastContainer />
      </div>
      <div className="w-full md:w-[20%] h-[300px] bg-slate-300 mb-5 sticky top-0">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
