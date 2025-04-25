import Nav from "@/components/nav";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa6";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <Nav active="profile" />
      <div className="flex flex-2 w-screen h-screen overflow-y-auto  scrollbar-thin rounded-2xl">
        <div className="bg-zinc-900 m-2 text-white font-bold rounded-2xl gap-5 w-full h-full">
          <form
            className="flex flex-col align-center items-center p-20 gap-5"
            onSubmit={submitLogin}
          >
            <label>Email</label>
            <div className="relative">
              <input
                className="pl-10 py-2 rounded-md w-100 text-xl bg-zinc-700 focus:ring-3 focus:ring-dusty-blue outline-none"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <FaUser
                color="#9f9fa9"
                size={20}
                className="absolute top-3 left-2"
              />
            </div>
            <label>Password</label>
            <div className="relative">
              <input
                className="pl-10 py-2 rounded-md w-100 text-xl bg-zinc-700 focus:ring-3 focus:ring-dusty-blue outline-none"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <FaLock
                color="#9f9fa9"
                size={20}
                className="absolute top-3 left-2"
              />
            </div>
            <button
              type="submit"
              className="bg-dusty-blue w-40 h-10 rounded-lg cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
