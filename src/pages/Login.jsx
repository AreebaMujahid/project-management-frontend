import Button from "../components/Button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import PasswordInput from "../components/PasswordInput";
import Input from "../components/Input";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2  items-center justify-center">
        <img
          src="/src/assets/signup/login.svg"
          alt="Login"
          className="w-3/4 h-auto object-contain"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-6">
          <form className="space-y-4">
            {/* Heading */}
            <h1 className="text-4xl font-extrabold mb-2">Welcome back, Yash</h1>

            {/* Sub Heading */}
            <p className="text-xl font-normal text-gray-500 mb-10">
              Welcome back! Please enter your details
            </p>

            {/* Email */}
            <div className="mb-8">
              <Input type="email" placeholder="Email" />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <PasswordInput placeholder="Password" />
            </div>

            {/* Terms + Forgot Password */}
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm">Terms & Conditions</span>
              </label>

              <a href="#" className="text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              text="Login"
              className="w-full bg-black text-white py-4 rounded-lg mt-6"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-black font-medium hover:underline"
              >
                Signup for free
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
