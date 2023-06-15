const Cart = ({ cart }) => {
  let total = 0 ;
  let shipping = 0 ;
  for(const product of cart){
    total=total+product.price ;
    shipping = total+product.shipping
  }
  const tax = total*7/100 ;
  const grandTotal = total + shipping+ tax
  return (
    <>
      <h3 className="text-center text-2xl pt-6 font-semibold text-red-400">
        Oder summary
      </h3>
      <div className="pl-5 mt-5">
        <p className="text-black">seclected items: {cart.length}</p>
        <p className="text-black">total price: {total}</p>
        <p className="text-black">total shipping: {shipping}</p>
        <p className="text-black">taxt: {tax}</p>
        <p className="text-black">grand total: {grandTotal}</p>
      </div>
    </>
  );
};

export default Cart;
