"use client";

import React from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Chatbox from "@/components/chatbox";
import styles from "@/styles/createTopic.module.css"; // just use same styles as create topic

export default function submit_opinions() {

  return (
    <main>
      <Navbar at="find-debate" />
      <br />
      <form
        className={`m-auto w-1/2 leading-7 flex flex-col justify-around`}
        action="/store_opinions"
        method="POST"
      >
        <h1 className={`text-4xl text-center mb-4`} > Submit Opinions for a Topic! </h1>
        <div className={styles.topq}>
          <label
            htmlFor="topic"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white underline decoration-sky-500"
          >
            Topic Name:
          </label>
          <input
            type="text"
            id="topic"
            placeholder="Enter topic name here!"
            className="mx-auto block w-2/3 p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>

          <div className={styles.description}>
            <label
              htmlFor="description"
              className="block mb-3 text-sm font-medium text-gray-900 dark:text-white underline decoration-sky-500"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              placeholder="Provide a brief description of the topic..."
              className="mx-auto block w-2/3 p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <button
          type="submit"
          className="mx-auto bg-blue-500 rounded-full w-2/5 mb-9"
        >
          Submit
        </button>
        </div>
      </form>
    </main >
  );
}
