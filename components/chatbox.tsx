import React, { useState } from "react";
import { chat } from "@/types/chatTypes";
import ChatMessage from "./ChatMessage";

const Chatbox = () => {
  const [chats, setChats] = useState([] as chat[]);
  const [newChat, setNewChat] = useState("");
  const maxChats = 15;

  const send = () => {
    if (maxChats < chats.length) {
      chats.shift();
    }

    setChats([...chats, { text: newChat, sender: "user" }]);
    setNewChat("");
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      send();
    }
  };

  return (
    <div className="chatbox h-screen w-full">
      <h2>Chatbox:</h2>
      <div className="messages w-full">
        {chats.map((message, index) => (
          <div>
            <ChatMessage
              key={index}
              name={message.sender}
              message={message.text}
            />
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={newChat}
          onChange={(e) => setNewChat(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="What would you like to say..."
          className="border-gray-300 rounded-md w-full text-black"
        ></input>

        <button
          onClick={send}
          className="bg-blue-500 rounded-full w-2/5 mx-20 mt-2 mb-3 hover:bg-indigo-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
