"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config.js";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-2/5 2xl:w-2/6">
        <div className="text-2xl font-bold mb-4 text-center">Login</div>
        <div className="flex items-center w-full mb-4 gap-5">
          <div className="text-2xl">
            <IoPerson />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="mt-1 p-2 border rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center w-full mb-6 gap-5">
          <div className="text-2xl">
            <RiLockPasswordFill />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-1 p-2 border rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-[#2A56FE] text-white p-2 rounded-full hover:bg-indigo-600 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
