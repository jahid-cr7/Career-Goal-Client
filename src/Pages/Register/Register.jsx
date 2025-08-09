import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/Login.json";

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-l from-[#F0E4D3] to-[#DCC5B2] rounded-lg shadow-lg p-16">
        <div className="text-center lg:text-left">
          <Lottie  animationData={animationData} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm py-10 px-5">
          <h1 className="text-3xl text-center font-bold">Registation Now </h1>
          <div className="card-body">
            <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input w-full" placeholder="Enter Your Name" />
              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input w-full" placeholder="Photo URL" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input w-full" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-[#d9a299] mt-4">Register Now</button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
