// 'use client'
// import { useEffect, useState } from 'react';
// const UseEffectUsed = () => {
// // Initialization: `count` is initialized to 0 here.
// const [count, setCount] = useState(0);

// // Mounting: This effect runs once when the component mounts.
// useEffect(() => {
//   console.log("Counter mounted");

//   // Unmounting: This cleanup function runs when the component is unmounted.
//   return function() {
//     console.log("Unmounted counter");
//   };
// }, []); // Empty dependency array ensures this effect only runs on mount and unmount.

// // Updating: This effect runs whenever `count` changes.
// useEffect(() => {
//   console.log("User Updated Account");
// }, [count]);

// const handleAdd = () => {
//   if (count < 20) {
//     // Updating: Calling `setCount` here will trigger an update, re-rendering the component.
//     setCount(count + 1);
//   }
// };

// const handleRemove = () => {
//   if (count > 0) {
//     // Updating: Calling `setCount` here will also trigger an update.
//     setCount(count - 1);
//   }
// };
//   return (
//     <div>
//     <div className="flex flex-col items-center space-y-4">
//       <h1>useEffect Hooks</h1>
//        <p className="text-2xl font-semibold">Count: {count}</p>
//        <div className="space-x-4">
//          <button
//            onClick={handleAdd}
//            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//          >
//            Add
//          </button>
//          <button
//            onClick={handleRemove}
//            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//          >
//            Remove
//          </button>
//        </div>
//      </div>
//      </div>
//   )
// }

// export default UseEffectUsed


import React, { useState, useEffect } from "react";

// Define the makePost function here if it only applies to this component
const makePost = async () => {
  // Replace this URL with your actual API endpoint
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "Sample Post", body: "This is a test post." }),
  });
  return response;
};

const UseEffectUsed = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: ""
  });
  const [submitForm, setSubmitForm] = useState(false);

  const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    if (submitForm) {
      // Call makePost and handle the response
      makePost().then((response) => {
        if (response.ok) {
          setUserInfo({ name: "", email: "" }); // Reset form fields
          setSubmitForm(false); // Reset submit form trigger
        }
      });
    }
  }, [submitForm]);

  return (
    <main>
      <form className="form flex flex-col gap-4">
        <h1 className="text-[22px] font-[700]">Form</h1>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleUpdateUser}
          className="outline-none border w-[450px] px-4 py-2 border-gray-400 rounded-md" 
        />
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleUpdateUser}
          className="outline-none border w-[450px]  px-4 py-2 border-gray-400 rounded-md" 
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmitForm(true); // Trigger form submission
          }}
          className="bg-blue-600 px-4 py-2 w-[120px] rounded-md border border-blue-600 text-white" 
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default UseEffectUsed;
