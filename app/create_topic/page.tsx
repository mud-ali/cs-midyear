"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "@/styles/createTopic.module.css";

export default function create_topic() {
  const [formData, setFormData] = useState({
    topic_name: "",
    topic_desc: "",
    q1: "",
    a1: "",
    q2: "",
    a2: "",
    q3: "",
    a3: "",
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSend = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit_topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        window.location.href = responseData.redirect;
        console.log("topic submitted");
      } else {
        console.error(
          "Error during topic submission process: ",
          response.statusText,
        );
      }
    } catch (error: any) {
      console.error(
        "error sending topic. please check your network: ",
        error.message,
      );
    }
  };

  return (
    <main>
      <Navbar at="topic-create" />
      <br />
      <form className={`m-auto w-1/2 leading-7 flex flex-col justify-around`}>
        <h1 className={`text-4xl text-center`}> Create a Topic! </h1>
        <div className={styles.topq}>
          <label
            htmlFor="topic_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Topic Name:
          </label>
          <input
            type="text"
            id="topic_name"
            onChange={handleInputChange}
            placeholder="Enter topic name here!"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className={styles.topq}>
          <label
            htmlFor="topic_desc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter a description:
          </label>
          <input
            type="text"
            id="topic_desc"
            placeholder="Please describe your topic!"
            onChange={handleInputChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className={`${styles.question} flex flex-wrap justify-between`}>
          <label
            htmlFor="q1"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Question 1:
          </label>
          <label
            htmlFor="a1"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Option choices:
          </label>
          <textarea
            id="q1"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What's the question?"
          />
          <textarea
            id="a1"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the option choices"
          />
        </div>
        <div className={`${styles.question} flex flex-wrap justify-between`}>
          <label
            htmlFor="q2"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Question 2:
          </label>
          <label
            htmlFor="a2"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Option choices:
          </label>
          <textarea
            id="q2"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What's the question?"
          />
          <textarea
            id="a2"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the option choices"
          />
        </div>
        <div className={`${styles.question} flex flex-wrap justify-between`}>
          <label
            htmlFor="q3"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Question 3:
          </label>
          <label
            htmlFor="a3"
            className="w-2/5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Option choices:
          </label>
          <textarea
            id="q3"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What's the question?"
          />
          <textarea
            id="a3"
            onChange={handleInputChange}
            className="resize-none h-32 block w-2/5 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter the option choices"
          />
        </div>

        <button
          onClick={handleSend}
          className="bg-blue-500 rounded-full w-2/5 mx-auto mb-9"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
