import React from "react";

const Articles = ({ articleContent }) => {
  return (
    <>
      {articleContent ? (
        <div className="space-y-4 mb-40">
          <img
            src={articleContent.thumbnail}
            alt={articleContent.title}
            className="w-full h-64 object-cover mb-4"
          />
          {articleContent.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 ">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-red-500">Article not found.</p>
      )}
    </>
  );
};

export default Articles;
