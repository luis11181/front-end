"use client";

import { useEffect, useState } from "react";
import ProductInfo from "@/components/ProductInfo";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check using localStorage
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-2">
      {isAuthenticated ? (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg mb-8">You are logged in. Here&apos;s your personalized content.</p>
          <ProductInfo />
          <Button onClick={handleLogout} className="mt-8">Logout</Button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyProduct!</h1>
          <p className="text-lg mb-8">Please login to access personalized features.</p>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </div>
  );
}

