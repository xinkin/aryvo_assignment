"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config.js";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      alert("Sign Up Successfull");
      setEmail("");
      setPassword("");
      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-2/5 2xl:w-2/6">
        <div className="text-2xl font-semibold mb-4 text-center">Sign Up</div>
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
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <div className="text-xs w-full flex justify-end mt-2 mr-2 gap-1">
          Already a User?{" "}
          <button
            className="underline hover:text-[#2A56FE]"
            onClick={() => router.push("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
