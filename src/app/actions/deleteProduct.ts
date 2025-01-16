"use server";

import { createClient } from "@/src/utils/supabase/server";

export async function deleteProduct(formData: FormData) {
  const supabase = await createClient();
  const productId = formData.get("productId") as string;
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);
  if (error) {
    throw new Error(error.message);
  }
  return { success: true };
}
