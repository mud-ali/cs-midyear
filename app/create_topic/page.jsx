"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar"

export default function create_topic(props) {
    return (
        <main>
            <Navbar at="createtopic"/>
            <br></br>
            <form className="max-w-sm mx-auto">
                <h1 className="text-4xl font-bold text-center mx-auto"> Create a Topic! </h1>
                <br></br>
                <div>
                    <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Name:</label>
                    <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
            </form>
            <form className = "max-w-sm mx-auto flex items-center">
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 1:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Options:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
            </form>
            <form className = "max-w-sm mx-auto flex items-center">
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 2:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Options:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
            </form>
            <form className = "max-w-sm mx-auto flex items-center">
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question 3:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div className="mb-5">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Options:</label>
                    <textarea rows="2" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
            </form>
        </main>
    );
}