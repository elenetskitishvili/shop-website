"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import "./login.css";
import Image from "next/image";
import bg from "../../../../public/images/bg.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.accessToken) {
      Cookies.set("accessToken", data.accessToken, { expires: 1 });
      router.push("/products");
    } else {
      alert("Login failed!");
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
      </div>
    </section>
  );
};

export default LoginPage;
