import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
import { useState } from "react";
export default function Forgotpasswordverify() {
  const [showPasword, setShowPassword] = useState(false);
  return (
    <>
      <Navbar />
      <div className="mt-2 ml-20">
        <div className="flex">
          <div className="lg:ml-12 w-full max-w-md lg:max-w-md mt-12 mr-8">
            <div className="font-poppins font-semibold text-2xl md:text-3xl lg:text-[40px]">
              Login
            </div>
            <div className="font-poppins font-normal lg:text-[16px] mt-4">
              Login to access your account
            </div>
            <div className="border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14 mt-8">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
              />
            </div>
            <div className="flex justify-between border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14 mt-8">
              <input
                type={showPasword ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 px-4 h-full outline-none"
              />
              <Button onClick={() => setShowPassword(!showPasword)}>
                {showPasword ? (
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
            <label className="flex items-center justify-between mt-4 cursor-pointer">
              <div className="flex gap-2 items-center">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Remember me</span>
              </div>
              <div className="ml-2 text-xs text-[#f70606]">
                Forgot Password?
              </div>
            </label>
            <Button
              text="Login"
              className="bg-brand-10 text-white hover:bg-brand-50 mt-2 w-full max-w-md lg:max-w-2xl h-12 mr-2 mt-5"
            />
            <div className="flex items-center justify-center font-poppins font-normal lg:text-[16px] mt-4 gap-2">
              Don't have an account?{" "}
              <span className="text-[#fd682c] cursor-pointer">Sign up</span>
            </div>
            <SocialMedia />
          </div>
          <div className="">
            <img
              src="/src/assets/forgot-password/verifypasswordcode.svg"
              alt="Logo"
              className="w-full sm:w-96 md:w-1/2 lg:w-[616px] xl:w-[700px] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
