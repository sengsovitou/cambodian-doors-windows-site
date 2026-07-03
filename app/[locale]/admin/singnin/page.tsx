"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSignInPage() {
  const [email, setEmail] = useState("admin@cmlwindows.com");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit() {
    setMsg("Signing in...");
    const url = window.location.origin + "/api/auth/sign-in/email";
    setMsg("Calling: " + url);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMsg(JSON.stringify(data, null, 2));
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-8">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-8 text-center">Admin Sign In</h1>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white"
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg"
          >
            Sign In
          </button>
          {msg && (
            <pre className="text-xs text-green-400 bg-neutral-900 p-4 rounded-lg overflow-auto whitespace-pre-wrap">
              {msg}
            </pre>
          )}
        </div>
      </div>
    </main>
  );
}
