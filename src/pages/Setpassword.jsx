import NavBar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
export default function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <NavBar />
      <div className="flex w-full max-w-2xl mx-auto px-4 py-6 md:px-2 md:py-10 lg:px-2 lg:py-6">
        <div className="">
          <div className="font-poppins font-semibold text-2xl md:text-3xl lg:text-[40px]">
            Set a password
          </div>
          <div className="font-poppins font-normal lg:text-[16px] mt-4">
            Your previous password has been reseted. Please set a new password
            for your account.
          </div>
          <div className="flex justify-betweenborder border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14 mt-8">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="px-4 outline-none w-full"
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
          <div className="flex justify-betweenborder border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14 mt-8">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Reenter password"
              className="px-4 outline-none w-full"
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
            text="Set Password"
            className="bg-brand-10 text-white hover:bg-brand-50 mt-2 w-full max-w-md lg:max-w-2xl h-12 mr-2 mt-5"
          />
        </div>
        <div className="">
          <img
            src="/src/assets/forgot-password/passwordImage.svg"
            alt="Logo"
            className="w-full sm:w-96 md:w-1/2 lg:w-[616px] xl:w-[700px] max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </>
  );
}
