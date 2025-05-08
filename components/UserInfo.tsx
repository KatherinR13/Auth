export default function UserInfo() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-xl p-8 rounded-xl border-2 border-blue-900">
        <div>Name: <span className="font-bold">John</span></div>
        <div>Email: <span className="font-bold">john@gmail.com</span></div>
        <button className="bg-red-700 mt-5 py-1 px-5 rounded-lg text-white font-bold">Log Out</button>
      </div>
    </div>
  )
}