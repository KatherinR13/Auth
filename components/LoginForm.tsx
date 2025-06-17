"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email, password, redirect: false
      });

      if (res?.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace("dashboard");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg/30 p-5 rounded-lg border-t-4 border-b-4 border-blue-800">
        <h1 className="text-lg font-bold my-4 ">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="bg-blue-950 text-white py-2 rounded-b-full font-bold cursor-pointer">
            Login
          </button>
        </form>

        {error && (
          <div className="bg-red-700 text-white my-3 w-fit py-1 px-3 rounded-xl">
            {" "}
            {error}
          </div>
        )}

        <Link href={"/register"} className="text-sm">
          Don&apos;t have an account?{" "}
          <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
}
