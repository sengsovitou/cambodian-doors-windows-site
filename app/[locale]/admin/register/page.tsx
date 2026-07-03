"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function AdminRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister() {
    const result = await authClient.signUp.email({
      email,
      password,
      name,
    });
    if (result.error) {
      setError(result.error.message ?? "Registration failed");
    } else {
      router.push("/admin");
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-8">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Create Admin Account
        </h1>
        <p className="text-neutral-500 text-sm text-center mb-8">
          One-time setup — delete this page after creating your account
        </p>

        {error && (
          <div className="bg-red-900 border border-red-800 text-red-300 rounded-lg p-3 mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
            />
          </div>
          <button
            onClick={handleRegister}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}
