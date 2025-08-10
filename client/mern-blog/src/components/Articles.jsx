import React from "react";
import NotFound from "../pages/NotFound";
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
        <NotFound />
      )}
    </>
  );
};

export default Articles;
