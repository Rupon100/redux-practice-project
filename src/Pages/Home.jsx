import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../products/ProductsCard";
import { addProduct } from "../Redux/Features/products/productSlice";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const size = form.size.value;
    const price = form.price.value;
    const image = form.image.value;

    const product = { name, price, size, image };
    console.table(product);

    dispatch(addProduct(product));
    form.reset();
  };

  return (
    <div className="py-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product?.id} className="border">
                <ProductsCard product={product} />
              </div>
            ))
          ) : (
            <p>No Products found!</p>
          )}
        </div>
        <div className="col-span-1">
          <form
            onSubmit={handleAdd}
            className="flex flex-col gap-3 p-6 shadow-xl "
          >
            <input
              className="p-3 rounded"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="p-3 rounded"
              type="text"
              name="size"
              placeholder="size"
            />
            <input
              className="p-3 rounded"
              type="number"
              name="price"
              placeholder="price"
            />
            <input
              className="p-3 rounded"
              type="url"
              name="image"
              placeholder="imagelink"
            />
            <button className="btn btn-block">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
