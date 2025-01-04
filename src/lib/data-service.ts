import { supabase } from "@/src/lib/supabase";
import { notFound } from "next/navigation";
import { Product } from "../types/types";
import { Blog } from "@/src/types/types";

export const fetchBlogs = async function (): Promise<Blog[]> {
  try {
    const { data: blogs, error } = await supabase.from("blogs").select("*");
    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
    return blogs;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};

export const fetchBlog = async function (id: string): Promise<Blog | null> {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      notFound();
    }

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};

export const fetchProducts = async function (): Promise<Product[]> {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");
    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
    return products;
  } catch (err) {
    console.error((err as Error).message);
    return [];
  }
};

export const fetchProduct = async function (
  id: string
): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      notFound();
    }

    return data;
  } catch (err) {
    console.error((err as Error).message);
    return null;
  }
};
