import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import { useState } from "react";
export default function Signup2() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="">
          <img
            src="/src/assets/signup2/sideimage.svg"
            alt="Logo"
            className="w-full sm:w-96 md:w-1/2 lg:w-[816px] xl:w-[900px] max-h-[80vh] object-contain"
          />
        </div>

        <div className="ml-3 lg:ml-12 w-full max-w-md lg:max-w-2xl mt-12 mr-8">
          <div className="font-poppins font-semibold text-md md:text-2xl lg:text-3xl">
            Sign up
          </div>
          <h3>
            Let’s get you all st up so you can access your personal account.
          </h3>
          <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-2 mr-2">
            <input
              type="text"
              placeholder="Enter first name"
              className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
            />
            <div className="border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14">
              <input
                type="text"
                placeholder="Enter last name"
                className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row mt-5 gap-4 mr-2">
            <div className="border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14">
              <input
                type="text"
                placeholder="Enter email"
                className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
              />
            </div>
            <div className="border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14">
              <input
                type="text"
                placeholder="Enter phone no"
                className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
              />
            </div>
          </div>
          <div className="flex justify-between border border-[#79747E] mt-4 w-full max-w-md lg:max-w-4xl h-14 mr-2 rounded-md">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="px-4 outline-none"
            />
            <Button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img
                  src="/src/assets/forgot-password/eyelidopen.svg"
                  alt="Hide password"
                />
              ) : (
                <img
                  src="/src/assets/forgot-password/eye-off.svg"
                  alt="Show password"
                />
              )}
            </Button>
          </div>
          <div className="flex justify-between border border-[#79747E] mt-4 w-full max-w-md lg:max-w-4xl rounded-md h-14">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Confirm password"
              className="px-4 outline-none"
            />
            <Button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img
                  src="/src/assets/forgot-password/eyelidopen.svg"
                  alt="Hide password"
                />
              ) : (
                <img
                  src="/src/assets/forgot-password/eye-off.svg"
                  alt="Show password"
                />
              )}
            </Button>
          </div>
          <Button
            text="Create Account"
            className="bg-brand-10 text-white hover:bg-brand-50 mt-2 w-full max-w-md lg:max-w-2xl h-12 mr-2 mt-5"
          />
          <div className="flex mt-4 text-sm text-[#110d14] items-center justify-center">
            Already have an account?{" "}
            <a href="/login" className="text-[#e03b11]">
              Log in
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
