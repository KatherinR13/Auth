import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg/30 p-5 rounded-lg border-t-4 border-b-4 border-blue-800">
        <h1 className="text-lg font-bold my-4 ">Login</h1>

        <form className="flex flex-col gap-5">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="bg-blue-950 text-white py-2 rounded-b-full font-bold cursor-pointer">
            Login
          </button>
        </form>

        <div className="bg-red-700 text-white my-3 w-fit py-1 px-3 rounded-xl">
          {" "}
          Error message
        </div>

        <Link href={"/register"} className="text-sm">
          Don&apos;t have an account?{" "}
          <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
}
