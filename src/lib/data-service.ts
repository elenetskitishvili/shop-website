import { supabase } from "@/src/lib/supabase";
import { notFound } from "next/navigation";
import { Product } from "../types/types";

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}

// interface Product {
//   id: number;
//   created_at: string;
//   name: string;
//   image: string;
//   price: number;
//   rating: number;
//   collection: string;
//   description_en: string;
//   skin_type_en: string;
//   concern: string;
//   use_en: string;
//   description: string;
//   title_ka: string;
//   skin_type_ka: string;
//   use_ka: string;
// }

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
