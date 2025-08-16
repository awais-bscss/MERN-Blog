import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div className="mb-8">
      <h3 className="sm:text-2xl text-xl my-8 font-bold text-gray-900">
        Comments:
      </h3>
      {comments.length > 0 ? (
        <ul className="space-y-4 ">
          {comments.map((comment, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-lg">
              <p className="font-semibold">{comment.username}</p>
              <p className="text-gray-700">{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsList;
