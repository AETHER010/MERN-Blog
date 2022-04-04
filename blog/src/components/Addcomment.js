import React, { useState } from "react";

const Addcomment = ({ articleName, setarticleInfo }) => {
  const [username, setusername] = useState("");
  const [comment, setcomment] = useState("");

  const addcomment = async () => {
    console.log(username, comment);
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "POST",
      body: JSON.stringify({ username, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setarticleInfo(body);
    setusername("");
    setcomment("");
  };
  return (
    <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900"></h3>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        value={username}
        placeholder="Enter your username"
        onChange={(e) => setusername(e.target.value)}
      />
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="comment"
      >
        Comment
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="comment"
        type="text"
        value={comment}
        placeholder="Enter your comment"
        onChange={(e) => setcomment(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => addcomment()}
      >
        Add Comment
      </button>
    </form>
  );
};

export default Addcomment;
