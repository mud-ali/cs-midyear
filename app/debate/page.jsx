"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Chatbox from "../../components/chatbox";
// import styles from "@/styles/join.module.css";

export default function join(props) {
  return (
    <main>
      <Navbar at="topic-create" />
      <div className="message-box">
        <h2 className="{styles.debate-room-title}">Debate Room:</h2>
       <Chatbox />
      </div>
    </main>
  );
}
