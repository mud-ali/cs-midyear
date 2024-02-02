"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    dob: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        window.location.href = responseData.redirect;
        console.log("new user signed up");
      } else {
        console.error("Error during signup:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <main>
      <Navbar at="login" />

      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Sign Up</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form className="py-7 px-5">
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="first_name"
              placeholder="First Name"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="username"
            >
              E-mail / Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
            />
            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
            />

            <label
              className="font-semibold text-sm text-gray-600 pb-1 block"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-600"
            />

            <button
              type="button"
              onClick={handleSignup}
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Sign Up</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap"></div>
              <div className="text-center sm:text-right  whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <Link href="/login/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 inline-block align-text-bottom"
                    >
                      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </svg>
                    <span className="inline-block ml-1">Login</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
