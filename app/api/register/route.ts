import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: { json: () => PromiseLike<{ name: string; email: string; password: string; }> }) {
  try {
    const {name, email, password} = await req.json();
    const hashedPassword = await bcrypt.hash(password,10);
    await connectMongoDB();
    await User.create({name,email,password: hashedPassword});

    return NextResponse.json({message: "User Registered"}, {status: 201})
  } catch {
    return NextResponse.json({message: "An error occured while registering the user"}, {status: 500});
  }
}