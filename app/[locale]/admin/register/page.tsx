"use client";

import { useState } from "react";

export default function AdminRegisterPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function createAdmin() {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "CML Admin",
          email: "admin@cmlwindows.com",
          password: "admin123456",
        }),
      });
      const data = await response.json();
      setStatus(JSON.stringify(data, null, 2));
    } catch (error) {
      setStatus(String(error));
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-8">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-8">Create Admin Account</h1>
        <button
          onClick={createAdmin}
          disabled={loading}
          className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Admin Account"}
        </button>
        {status && (
          <pre className="mt-6 text-left text-xs bg-neutral-900 p-4 rounded-lg overflow-auto text-green-400">
            {status}
          </pre>
        )}
      </div>
    </main>
  );
}
