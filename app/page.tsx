"use client";
import React, { useState, ChangeEvent } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config.js";
import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { Oval } from "react-loader-spinner";

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignUp = async (): Promise<void> => {
    try {
      setIsLoading(true);

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        setIsLoading(false);
        return;
      }

      const res = await createUserWithEmailAndPassword(email, password);
      if (!res) {
        alert("User Already Exists, Please Login");
        setIsLoading(false);
        return;
      }
      console.log(res);

      setIsSignUpSuccessful(true);
      setEmail("");
      setPassword("");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
        </div>

        <button
          className="w-full bg-[#2A56FE] text-white p-2 rounded-full hover:bg-indigo-600 focus:outline-none flex justify-center items-center"
          onClick={handleSignUp}
          disabled={isLoading}
        >
          {isLoading ? (
            <Oval color="#FFFFFF" height={20} width={20} />
          ) : (
            "Sign Up"
          )}
        </button>

        {isSignUpSuccessful && (
          <div className="text-green-600 mt-2 text-center">
            Sign Up Successful! Redirecting to login page...
          </div>
        )}

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
