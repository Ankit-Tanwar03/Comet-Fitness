import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../Appwrite/auth.js";
import Background from "../assets/home/signup/Background.jpg";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      authService.createAccount({ email, password, name });
      console.log(email, name, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }

    scrollToTop();
    return () => {
      window.removeEventListener("load", scrollToTop);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-full mx-5 sm:max-w-md bg-[#0a0a0a] p-8 rounded-lg border-2 border-white shadow-[0_0px_30px_-15px] shadow-white rounded-bl-3xl rounded-tr-3xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Sign Up
        </h2>
        {error && <p className="text-red text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#f56565] text-white font-bold rounded-lg hover:bg-[#d95454] focus:outline-none focus:bg-[#d95454]"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="mt-6 text-center text-gray-400">
            Already have an account?
            <NavLink to="/signin">
              {" "}
              <p className="text-[#f56565]">Sign In</p>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
