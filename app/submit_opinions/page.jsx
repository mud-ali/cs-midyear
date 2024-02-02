"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/createTopic.module.css";

export default function submit_opinions() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [questions, setQuestions] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const search = async (e) => {
    e.preventDefault(); 
    if (e.key=="Enter") {
      try {
        const response = await fetch("/api/get_topic_questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        });
    
        if (response.ok) {
          const responseData = await response.json();
          setQuestions([responseData.q1, responseData.q2, responseData.q3]);
          console.log("search happened");
        } else {
          console.error("Error during searcing process:", response.statusText);
        }
      } catch (error) {
        console.error("some Error during searching process:", error.message);
      }
    }
  }

  const sendOpinion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/store_opinion", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        console.log("user opinion saved");
      } else {
        console.error("Error during saving process:", response.statusText);
      }
    } catch (error) {
      console.error("some Error during saving process:", error.message);
    }
  }

  return (
    <main>
      <Navbar at="find-debate" />
      <br />
      <form
        className={`m-auto w-1/2 leading-7 flex flex-col justify-around`}
        onSubmit={search}
      >
        <h1 className={`text-4xl text-center`}>
          Submit Opinions for a Topic!
        </h1>
        <div className={styles.topq}>
          <label
            htmlFor="topic"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white underline decoration-sky-500"
          >
            Topic Name:
          </label>
          <input
            type="text"
            name="topic"
            placeholder="Enter topic name here! (Hit enter to find)"
            onChange={handleInputChange}
            onKeyUp={search}
            className="mx-auto block w-2/3 p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>

          {
            questions.map((question, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={`q${index + 1}`}
                    className="block my-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="underline decoration-sky-500">
                      Question {index + 1}:
                    </span>&nbsp;&nbsp;
                    {question[0]}
                  </label>
                  {
                    [0,1,2].map((i) => {
                      return (
                        <div key={i}>
                          <input
                            type="radio"
                            name={`q${index + 1}-a`}
                            value={question[1][i]}
                            className="mr-2"
                          ></input>
                          <label htmlFor={`q${index + 1}-a`}>
                            {question[1][i]}
                          </label>
                        </div>
                      );
                    })
                  }
                  
                </div>
              );
            })
          }

          <button
            onClick={sendOpinion}
            className="bg-blue-500 rounded-full w-2/5 mx-auto mb-9 block mt-8"
          >
            Submit
          </button>
        </div>
      </form>
    </main >
  );
}
