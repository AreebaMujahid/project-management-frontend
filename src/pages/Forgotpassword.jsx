import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";
export default function Forgotpassword() {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-5xl mx-auto px-4 py-6 md:px-2 md:py-10 lg:px-2 lg:py-6">
        <div className="">
          <div className="flex gap-2">
            <img
              src="/src/assets/forgot-password/back.svg"
              alt="Logo"
              className=""
            />
            Back to login
          </div>
          <div className="font-poppins font-semibold text-2xl md:text-3xl lg:text-[40px]">
            Forgot Your Password?
          </div>
          <div className="font-poppins font-normal lg:text-[16px] mt-4">
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </div>
          <div className="border border-[#79747E] w-full max-w-md lg:max-w-2xl rounded-md h-14 mt-8">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-[#79747E] px-4 w-full max-w-md lg:max-w-4xl rounded-md h-14"
            />
          </div>
          <Button
            text="Submit"
            className="bg-brand-10 text-white hover:bg-brand-50 mt-2 w-full max-w-md lg:max-w-2xl h-12 mr-2 mt-5"
          />
          <SocialMedia />
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
