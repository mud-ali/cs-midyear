"use client";

import {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/debateRoom.module.css";

export default function Join() {
  const [result, setResult] = useState('');
  const [user1Id, setUser1Id] = useState('');
  const [user2Id, setUser2Id] = useState('');
  const [user1Message, setUser1Message] = useState('');
  const [user2Message, setUser2Message] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/process_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user1_id: user1Id,
          user2_id: user2Id,
        }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error processing input:', error);
    }
  };

  const handleUser1Submit = (e) => {
    e.preventDefault();
    setUser1Message('');
  };

  const handleUser2Submit = (e) => {
    e.preventDefault();
    setUser2Message('');
  };

  return (
    <div className="flex h-screen text-black">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-200 p-4">
        <h2 className="text-lg font-bold mb-4">Chat Users</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="user1Input" className="block text-sm font-medium text-black mb-2">
              User 1 ID:
            </label>
            <input
              type="text"
              id="user1Input"
              className="border p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Type here..."
              value={user1Id}
              onChange={(e) => setUser1Id(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="user2Input" className="block text-sm font-medium text-black mb-2">
              User 2 ID:
            </label>
            <input
              type="text"
              id="user2Input"
              className="border p-2 w-full focus:outline-none focus:border-green-500"
              placeholder="Type here..."
              value={user2Id}
              onChange={(e) => setUser2Id(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
            Process Input
          </button>
        </form>

        {/* Display Result in Sidebar */}
        {result && (
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Result</h2>
            <p>{result}</p>
          </div>
        )}
      </div>

      {/* Chat Boxes */}
      <div className="flex-1 flex p-4">
        {/* User 1 Chat Box */}
        <div className="flex-1 p-4 border rounded bg-yellow-100">
          <h2 className="text-lg font-bold mb-2">User 1 ID</h2>
          <div>
            <p>{user1Message}</p>
          </div>
          <form onSubmit={handleUser1Submit}>
            <input
              type="text"
              className="border p-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              value={user1Message}
              onChange={(e) => setUser1Message(e.target.value)}
            />
          </form>
        </div>

        {/* User 2 Chat Box */}
        <div className="flex-1 p-4 ml-4 border rounded bg-green-100">
          <h2 className="text-lg font-bold mb-2">User 2 ID</h2>
          <div>
            <p>{user2Message}</p>
          </div>
          <form onSubmit={handleUser2Submit}>
            <input
              type="text"
              className="border p-2 w-full focus:outline-none focus:border-green-500"
              placeholder="Type your message..."
              value={user2Message}
              onChange={(e) => setUser2Message(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}