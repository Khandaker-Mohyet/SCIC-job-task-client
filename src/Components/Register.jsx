import { Link } from "react-router-dom";
import lotty from '../assets/register.json'
import Lottie from "lottie-react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animation Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-green-600 mb-5">Register Now!</h1>
          <Lottie animationData={lotty} className="max-w-sm mx-auto lg:mx-0" />
        </div>

        {/* Registration Form */}
        <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
          <form className="mt-4 ">
            <div className="form-control">
              <label className="label font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
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
            </div>
            <div className="mt-4">
              <button className="btn btn-success w-full">Register</button>
            </div>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account? <Link className="text-green-600 font-semibold" to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
)};

export default Register;