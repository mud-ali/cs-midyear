'use client'
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar at="home"/>
    </main>
  );
}
