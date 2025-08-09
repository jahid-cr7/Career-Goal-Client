import Lottie from "lottie-react";
import React, { use, useState } from "react";
import loginAnimation from "../../assets/register.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../ContextAPI/ContextAuth";
import { toast, ToastContainer } from "react-toastify";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInWithGoogle, signIn } = use(AuthContext);
  const [showpassword, setShowpassword] = useState(false);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successfully by Google", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google Sign-In failed", {
          position: "top-center",
        });
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset();
      })
      .catch((error) => {
        toast.error("Wrong Email and Password");
        console.log(error);
        // Handle error appropriately, e.g., show a toast notification
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-l from-[#F0E4D3] gap-24 to-[#DCC5B2] rounded-lg shadow-lg p-16">
        <div className="text-center lg:text-left lg:block hidden">
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm py-10 px-5">
          <h1 className="text-3xl text-center font-bold">Login Now</h1>
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showpassword ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => setShowpassword(!showpassword)}
                    type="button"
                    className="absolute top-3 right-4.5"
                  >
                    {showpassword ? (
                      <FaEyeSlash size={15} />
                    ) : (
                      <FaEye size={15} />
                    )}
                  </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-[#d9a299] mt-4">Login Now</button>
                <div className="flex w-full flex-col -mt-3">
                  <div className="divider">OR</div>
                </div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-[#d9a299] -mt-3 flex items-center justify-center gap-2"
                >
                  <span>
                    <FcGoogle size={20}></FcGoogle>
                  </span>{" "}
                  Sign in with Google
                </button>
              </fieldset>
              <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
