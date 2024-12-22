import Stripe from "stripe";
import { createClient } from "@/src/utils/supabase/server";

export function CreateProductForm() {
  async function createProduct(formData: FormData) {
    "use server";

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = await createClient();

    // უნდა დავრწმუნდეთ რომ ნამდვილად ჩაწერა მომხმარებელმა პროდუქტის სახელი
    const name = formData.get("name") as string;

    // უნდა დავრწმუნდეთ რომ ნამდვილად რიცხვი - ფასი შეიტანა იუზერმა ველში
    const price = Number(formData.get("price"));

    // თითოეული await call-ის გარშემო უნდა გვქონდეს try/catch
    // 1. Create product in Stripe:
    const stripeProduct = await stripe.products.create({
      name,
    });

    // 2. Create price in stripe:
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: price,
      currency: "usd",
    });

    // Getting the user form supabase:
    // გვჭირდება ცალკე if, რომ თუ userResponse-ში ერორია, მაშინ აღარ ეცადო სუპაბეისში პროდუქტების შექმნა.
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    // 3. Create product in supabase:
    // თუ პირველი და მეორე სთეფები შეიქმნა და თუ იუზერის აიდიც გვაქვს მხოლოდ ამ შემთხვევაში ვქმნით ამას:
    const { data, error } = await supabase
      .from("products")
      .insert({
        name,
        price,
        user_id: userId,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
      })
      .single();
    // თუ პროდუქტის შექმნა დაერორდა, catch-ში უნდა გავუკეთოთ სტრაიპს რიქვესთი რომ პროდუქტი და ფასი წაიშალოს და გაკეთდეს cleanup

    console.log({ data, error });
    // console.log({ stripeProduct, stripePrice });
  }

  return (
    // აუცილებლად უნდა მოვახდინოთ ფორმის ვალიდაცია.
    <form
      action={createProduct}
      className="rounded-lg p-4 bg-gray-100 flex flex-col gap-6 min-w-[400px]"
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />

      <button type="submit" className="bg-black text-white py-4">
        Create
      </button>
    </form>
  );
}
