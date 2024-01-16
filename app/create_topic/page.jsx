"use client";

import React from "react";
import Navbar from "../../components/Navbar"
import styles from "@/styles/createTopic.css"

export default function create_topic(props) {
    return (
        <main>
            <Navbar at="topic-create"/>
            <br />
            <form className={styles.topicaddform} action="/submit_topic" method="POST">
                <h1 className=""> Create a Topic! </h1>
                <div className="topq">
                    <label htmlFor="topic_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Name:</label>
                    <input type="text" id="topic_name" placeholder="Enter topic name here!" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div className="topq">
                    <label htmlFor="topic_desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a description:</label>
                    <input type="text" id="topic_desc" placeholder="Please describe your topic!" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div className="question">
                    <label htmlFor="q1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 1:</label>
                    <input type="text" id="q1" placeholder="What's the question?" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    <label htmlFor="a1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option choices:</label>
                    <input type="text" id="a1" placeholder="Enter the option choices!" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                
                <div className="question">
                    <label htmlFor="q2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 2:</label>
                    <input type="text" id="q2" placeholder="What's the question?" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    <label htmlFor="a2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option choices:</label>
                    <input type="text" id="a2" placeholder="Enter the option choices!" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div className="question">
                    <label htmlFor="q3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 3:</label>
                    <input type="text" id="q3" placeholder="What's the question?" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    <label htmlFor="a3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Option choices:</label>
                    <input type="text" id="a3" placeholder="Enter the option choices!" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}