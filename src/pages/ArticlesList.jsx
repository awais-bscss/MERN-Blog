import React from "react";
import ArticleContent from "./ArticleContent";
import { Link } from "react-router-dom";
const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl  text-2xl font-bold my-10  text-gray-900">
        Articles
      </h1>
      <div className="mx-auto py-4 container">
        <div className="flex flex-wrap -m-4">
          {ArticleContent.map((article) => {
            return (
              <div key={article.name} className="p-4   md:w-2/3 lg:w-1/2">
                <div className="h-full border-[1px] border-gray-700 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={article.thumbnail}
                    alt={article.title}
                  />
                  <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-3">
                      {article.content[0].substring(0, 150)}...
                    </p>
                    <Link
                      to={`/article/${article.name}`}
                      className="text-indigo-700 inline-flex items-center"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
