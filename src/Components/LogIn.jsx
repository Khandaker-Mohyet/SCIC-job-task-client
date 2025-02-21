import Lottie from "lottie-react";
import lotty from '../assets/Login.json'
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Google from "./Google";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animation Section */}
        <div className="flex-1 text-center lg:text-left">
          <Lottie className='max-w-sm mx-auto lg:mx-0' animationData={lotty} />
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login to Your Account</h2>
          <form className="mt-4 space-y-4">
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-14 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
              </label>
            </div>
            <div className="mt-4">
              <button className="btn btn-success w-full">Login</button>
            </div>
          </form>
          <Google></Google>
          <p className="text-center mt-4 text-gray-600">
          <Link className="text-red-600 font-semibold" to="/register">Only use Google login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;