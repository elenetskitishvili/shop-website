"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { fetchTokens } from "../../../utils/fetchTokens";

import "./login.css";
import Image from "next/image";
import bg from "../../../../public/images/bg.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const token = await fetchTokens(username, password);

      if (token) {
        Cookies.set("accessToken", token, { expires: 1 });
        router.push("/products");
      }
    } catch (err) {
      setError("Please enter valid username and password");
      console.error(err);
    }
  };

  return (
    <section className="login">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="login__bg"
        alt="Mountains and forests with two cabins"
      />

      <div className="login__content">
        <h1 className="login__heading">Welcome to OmniShop!</h1>
        <div className="login__wrapper">
          <div className="login__fields">
            <input
              className="login__input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="login__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="login__btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          {error && <p className="login__error">{error}</p>}
        </div>
      </div>
    </section>
  );
}
