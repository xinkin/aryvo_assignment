"use client";
import React, { useState, ChangeEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config.js";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (): Promise<void> => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res && res.user) {
        console.log("Login successful:", res.user);
        setEmail("");
        setPassword("");
        router.push("/landing");
      } else {
        alert("Login failed: User does not exist or incorrect credentials");
      }
    } catch (e) {
      console.error("Error during login:", e);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#2A56FE] p-8 rounded shadow-md w-2/5 2xl:w-2/6">
        <div className="text-2xl font-bold mb-4 text-center text-white">
          Log In
        </div>
        <div className="flex items-center w-full mb-4 gap-5">
          <div className="text-2xl text-white">
            <IoPerson />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="mt-1 p-2 border rounded-lg w-full"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="flex items-center w-full mb-6 gap-5">
          <div className="text-2xl text-white">
            <RiLockPasswordFill />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-1 p-2 border rounded-lg w-full"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          className="w-full bg-white text-[#2A56FE] p-2 rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
