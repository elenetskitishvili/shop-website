import { getCartProducts } from "@/src/app/actions/getCartProducts";
import { Product } from "@/src/types/types";

interface CartPageProps {
  products: Product[];
}

const CartPage = async () => {
  const data = await getCartProducts();
  const products = data.props.products;

  if (products.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold mt-4 text-gray-500">
          Your cart is empty
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Your cart is empty"
          className="mx-auto mb-4 w-1/3"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-5xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-lg font-semibold">
                  ${(product.price / 100).toFixed(2)}
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
