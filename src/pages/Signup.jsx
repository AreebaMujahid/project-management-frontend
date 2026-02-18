import Button from "../components/Button";
export default function Signup() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center m-6">
          <img
            src="/src/assets/signup/logo.svg"
            alt="Logo"
            className="h-[45px] w-[50px]"
          />
          <h1 className="text-3xl font-bold text-brand-50">AProjectO</h1>
        </div>

        <div className="flex items-center m-6">
          <img
            src="/src/assets/signup/frame.svg"
            alt="Logo"
            className="h-[45px] w-[50px]"
          />
          <h1 className="text-3xl font-bold text-brand-50">
            Asite Project System
          </h1>
        </div>
      </div>
      <div className="flex">
        <div className="w-[763px] h-[865px]">
          <img src="/src/assets/signup/login.svg" alt="Logo" className="" />
        </div>
        <div className="flex items-center m-2.5">
          <div className="">
            <h2>Welcome back , Yash</h2>
            <h5>Welcome back! Please enter your details</h5>
            <div className="w-[430px] h-[48px] items-center">Email</div>
            <div className="flex w-[430px] h-[48px] items-center justify-between">
              <h3>Password</h3>
              <img
                src="/src/assets/signup/EyeSlashFill.svg"
                alt="checkbox"
                className=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <img
                  src="/src/assets/signup/checkbox1.svg"
                  alt="checkbox"
                  className=""
                />
                <h3>Terms and conditions</h3>
              </div>
              <div>
                <h2>Forgot Password</h2>
              </div>
            </div>
            <Button text="Log in" />
            <h3>Dont have an account? Signup for free</h3>
          </div>
        </div>
      </div>
    </>
  );
}
