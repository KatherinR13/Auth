"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const router = useRouter();

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();

    if(!name || !email || !password) {
      setError("Please enter all the details");
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      });

      const {user} = await resUserExists.json();

      if(user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/")
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error); 
    }
  }  

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg/30 p-5 rounded-lg border-t-4 border-b-4 border-blue-800">
        <h1 className="text-lg font-bold my-4 ">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="bg-blue-950 text-white py-2 rounded-b-full font-bold cursor-pointer">
            Register
          </button>
        </form>

        {error && (
        <div className="bg-red-700 text-white my-3 w-fit py-1 px-3 rounded-xl">
          {" "}
          {error}
        </div>
        )}

        <Link href={"/"} className="text-sm">
          Already have an account?{" "}
          <span className="underline">Login</span>
        </Link>
      </div>
    </div>
  )
}