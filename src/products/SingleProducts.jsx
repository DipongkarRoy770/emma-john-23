import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaCartPlus } from "react-icons/fa";

const SingleProducts = ({ product,handleClckData }) => {
  const { name, price, img, seller, ratings } = product;

  return (
    <>
      <div className=" card-compact w-80 rounded relative h-[440px] bg-indigo-100 duration-500 hover:bg-slate-400 ">
        <figure>
          <img
            className="w-full h-56 border-2 border-red-200 rounded "
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{seller}</p>
          <p>
            <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
          </p>
          <h3>price:${price}</h3>

          <button
            onClick={() => handleClckData(product)}
            className="btn btn-outline btn-warning absolute w-full -ml-4 bottom-0"
          >
            add to cart  <FaCartPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
