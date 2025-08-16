import React from "react";
import { useState } from "react";

const AddComment = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const addComment = async (comment) => {
    try {
      const response = await fetch(
        `/api/articles/${articleName}/add-comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Comment added successfully:", data);
        setArticleInfo(data);
        setUsername("");
        setText("");
      } else {
        console.error("Error adding comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form
      action=""
      className="shadow-md rounded-lg p-4 bg-white max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment:</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        required
        name="username"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your Comment"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows="4"
        required
        name="text"
      ></textarea>
      <button
        type="submit"
        onClick={() => addComment({ username, text })}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
