"use client";
import React from "react";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar at="home" />

      <div className="text-6xl/loose block w-2/3 h-2/3 text-center mx-auto mt-40 ">
        Welcome!
      </div>
      <div className="flex justify-evenly w-1/3 mx-auto p-6">
        <Link
          href="/signup"
          className="mx-auto transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-1/3 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          Get Started
        </Link>
        <a
          href="https://github.com/mud-ali/cs-midyear"
          target="_blank"
          className="mx-auto transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-1/3 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          Learn more
        </a>
      </div>
    </main>
  );
}
