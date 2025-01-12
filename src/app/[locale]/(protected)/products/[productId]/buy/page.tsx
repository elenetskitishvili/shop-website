import { fetchProduct } from "@/src/lib/data-service";
import { ProductClient } from "@/src/app/components/ProductClient";

type Params = {
  productId: string;
};

export default async function BuyNowPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const productId = params.productId;

  const product = await fetchProduct(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-full gap-8">
      <div className="buy-now-left">
        <img
          src={product.image}
          alt={product.name}
          className="w-[35rem] rounded-md"
        />
      </div>
      <div className="flex flex-col h-80 w-[30rem] justify-evenly">
        <h1 className="text-6xl font-bold text-emerald-600">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-2xl">${(product.price / 100).toFixed(2)}</p>
        <div className="flex w-36 justify-center items-center p-4 border-2 border-solid border-emerald-600 text-xl rounded-lg font-bold cursor-pointer transition-all hover:bg-emerald-600 hover:text-white">
          <ProductClient productId={productId} />
        </div>
      </div>
    </div>
  );
}
