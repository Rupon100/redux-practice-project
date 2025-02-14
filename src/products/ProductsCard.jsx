import { useDispatch } from "react-redux";
import { addtoCart, incrementQuantity } from "../Redux/Features/carts/cartSlice";

const ProductsCard = ({ product }) => {
  const { id ,name, price, image, size } = product || {};
  const dispatch = useDispatch();

  const handleAddtoCart = (id) => {
    dispatch(addtoCart(product));
  };

 
  return (
    <div className="card text-black bg-white max-w-96 w-full">
      <figure>
        <img
        className="max-h-[250px] w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold" >${price}</p>
        <p className="font-semibold" >size: {size}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddtoCart(id)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
