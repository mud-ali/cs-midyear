'use client'
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"
import CreateTopic from "../components/CreateTopic"

export default function Home() {
  return (
    <main>
      <Navbar/>
      {/* Below is createTopic test */}
      <CreateTopic/>
    </main>
  );
}
