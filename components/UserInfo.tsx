"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const {data: session} = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-xl p-8 rounded-xl border-2 border-blue-900">
        <div>Name: <span className="font-bold">{session?.user?.name}</span></div>
        <div>Email: <span className="font-bold">{session?.user?.email}</span></div>
        <button onClick={() => signOut()} className="bg-red-700 mt-5 py-1 px-5 rounded-lg text-white font-bold">Log Out</button>
      </div>
    </div>
  )
}