"use server";

import { encodedRedirect } from "../utils/utils";
import { createClient } from "../utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Sign Up
export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const locale = formData.get("locale")?.toString();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      `/${locale}/sign-up`,
      "Email and password are required"
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", `/${locale}/sign-up`, error.message);
  } else {
    return encodedRedirect(
      "success",
      `/${locale}/sign-up`,
      "Thanks for signing up! Please check your email for a verification link."
    );
  }
};

// Sign In
export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();
  const locale = formData.get("locale")?.toString();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", `/${locale}/sign-in`, error.message);
  }

  return redirect(`/${locale}/`);
};

// Forgot Password
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();
  const locale = formData.get("locale")?.toString();

  if (!email) {
    return encodedRedirect(
      "error",
      `/${locale}/forgot-password`,
      "Email is required"
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/${locale}/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      `/${locale}/forgot-password`,
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    `/${locale}/forgot-password`,
    "Check your email for a link to reset your password."
  );
};

// Reset Password
export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const locale = formData.get("locale")?.toString();

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      `/${locale}/reset-password`,
      "Password update failed"
    );
  }

  encodedRedirect("success", `/${locale}/reset-password`, "Password updated");
};

// Sign Out
export const signOutAction = async (formData: FormData) => {
  const supabase = await createClient();
  const locale = formData.get("locale")?.toString();
  await supabase.auth.signOut();
  return redirect(`/${locale}/sign-in`);
};