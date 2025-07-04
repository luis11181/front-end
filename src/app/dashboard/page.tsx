"use client";

import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard!</h1>
      <p className="text-lg mb-8">Here you can see all your personalized content.</p>
      <button onClick={logout} className="mt-8 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
