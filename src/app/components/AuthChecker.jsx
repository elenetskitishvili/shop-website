"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthChecker({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner">spinner</div>
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
