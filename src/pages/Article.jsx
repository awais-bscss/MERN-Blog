import React from "react";
import { useParams } from "react-router-dom";
import posts from "../pages/ArticleContent";
const Article = () => {
  const { name } = useParams();
  const articleContent = posts.find((post) => post.name === name);
  return (
    <div>
      <h1 className="sm:text-4xl  text-2xl font-bold my-10  text-gray-900">
        {articleContent ? articleContent.title : "Article Not Found"}
      </h1>
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
    </div>
  );
};

export default Article;
