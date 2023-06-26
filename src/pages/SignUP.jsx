import React from 'react'
import { useState } from 'react';
import OAuth from '../components/OAuth';
import { Link } from 'react-router-dom';
import { AiFillEye ,AiFillEyeInvisible } from 'react-icons/ai';

export default function SignUP() {
    const [formData, setFormData] = useState({ name : "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const { name ,email, password } = formData;
  
    function onChange(event) {
      setFormData((prevState) => ({
        ...prevState,
        [event.target.id]: [event.target.value],
      }));
    }
    return (
      <section>
        <h1 className=" text-3xl font-bold mt-6 text-center">Sign Up</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
          <div className="md:w-2/3 lg:w-2/4 mb-12 md:mb-6">
            <img
              src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
              alt="key"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-2/3 lg:w-2/5 lg:ml-20">
            <form>
              <input
                type="text"
                id="name"
                value={name}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out mb-6"
                onChange={onChange}
                placeholder="Full Name"
              />
              <input
                type="email"
                id="email"
                value={email}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out mb-6"
                onChange={onChange}
                placeholder="Email Address"
              />
              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition-all ease-in-out"
                  onChange={onChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className=" absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className=" absolute right-3 top-3 text-xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <div className="flex justify-between whitespace-nowrap text-sm md:text-lg">
                <p className="mb-6">
                   have an account?
                  <Link
                    to="/sign-in"
                    className=" text-red-600 hover:text-red-700 transition-colors duration-200 ease-in-out
                   ml-1"
                  >
                    Sign In
                  </Link>
                </p>
                <Link
                  to="/forgot-password"
                  className=" text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out
                   "
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className=" uppercase font-medium w-full rounded text-white px-7 py-3 bg-blue-600 text-sm shadow-md hover:bg-blue-700 transition-colors duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                Sign Up
              </button>
              <div className="flex  items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth/>
            </form>
          </div>
        </div>
      </section>
  )
}
