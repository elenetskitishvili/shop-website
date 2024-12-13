import { supabase } from "@/src/app/lib/supabase";
import { notFound } from "next/navigation";

export const fetchBlogs = async function () {
  try {
    const { data: blogs, error } = await supabase.from("blogs").select("*");
    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
    return blogs;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export const fetchBlog = async function (id) {
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
    console.error(err.message);
    return null;
  }
};

export const fetchProducts = async function () {
  try {
    const { data: caudalie, error } = await supabase
      .from("caudalie")
      .select("*");
    if (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
    return caudalie;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export const fetchProduct = async function (id) {
  try {
    const { data, error } = await supabase
      .from("caudalie")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      notFound();
    }

    return data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};
