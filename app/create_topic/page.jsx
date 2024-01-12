"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar"
import "@/styles/createTopic.css"

export default function create_topic(props) {
    return (
        <main>
            <Navbar at="topic-create"/>
            <br></br>
            <form className="topicaddform" action="/submit_topic" method="POST">
                <h1 className=""> Create a Topic! </h1>
                <div className="question">
                    <label for="q1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Name:</label>
                    <input type="text" id="q1" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                {/* add submit button here */}
            </form>
        </main>
    );
}