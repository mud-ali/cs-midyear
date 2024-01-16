"use client";

import React from "react";
import Navbar from "../../components/Navbar";
// import styles from "@/styles/join.module.css";

export default function join(props) {
  return (
    <main>
      <Navbar at="topic-create" />
      <div className= "message-box">
        <h2 className = "{styles.debate-room-title}">Debate Room:</h2>
        <div className="messages" id="messages"></div>
        <div className="inputs">
          <input
            type="text"
            rows="3"
            placeholder="Message"
            name="message"
            id="message"
          />
          <button
            type="button"
            name="send"
            id="send-btn"
            onClick="sendMessage()"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
