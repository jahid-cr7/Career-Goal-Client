import Lottie from "lottie-react";
import React, { use, useState } from "react";
import animationData from "../../assets/Login.json";
import { AuthContext } from "../../ContextAPI/ContextAuth";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showpassword, setShowpassword] = useState(false);
  const { createUser } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one letter and one number",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        toast.success("User Created Successfully", {
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
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-l from-[#F0E4D3] to-[#DCC5B2] rounded-lg shadow-lg p-10 lg:p-16 p-10">
        <div className="text-center lg:text-left lg:block hidden">
          <Lottie animationData={animationData} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm py-10 lg:px-5">
          <h1 className="text-3xl text-center font-bold">Registation Now </h1>
          <div className="card-body px-12">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter Your Name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="Photo URL"
                />
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
                <button className="btn bg-[#d9a299] mt-4">Register Now</button>
              </fieldset>
              <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
