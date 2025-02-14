import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity } from "../Redux/Features/carts/cartSlice";

const Carts = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch()
  console.log(carts);
  const totalPrice = carts.reduce((ttl, sum) => ttl + Number(sum.price), 0);
  console.log("ttol price: ", totalPrice);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {};

  const handleRemoveItem = () => {};

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2 flex flex-col gap-4">
        {carts.map((cart) => (
          <div
            key={cart?.id}
            className="border p-4 flex justify-between items-center"
          >
            <img className="h-22 w-32 object-cover" src={cart.image} alt="" />
            <div>
              <div className="flex items-center justify-center bg-green-600 text-white" >
                <div className="p-2 btn m-1 bg-black text-white">-</div>
                <div>{0}</div>
                <div className="p-2 btn m-1 bg-black text-white">+</div>
              </div>
              <h2 className="font-semibold">{cart.name}</h2>
              <h2 className="font-semibold">${cart.price}</h2>
              <button className="btn btn-sm">remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 border p-4 space-y-4">
        <h2 className="font-semibold text-lg">Total Price: ${totalPrice}</h2>
        <button className="btn btn-block">Checkout</button>
      </div>
    </div>
  );
};

export default Carts;
