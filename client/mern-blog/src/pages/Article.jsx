import React from "react";
import CommentsList from "../components/CommentsList";
import Articles from "../components/Articles";
import { Link, useParams } from "react-router-dom";
import posts from "../pages/ArticleContent";
import NotFound from "./NotFound";
import { useState } from "react";
import { useEffect } from "react";

const Article = () => {
  const { name } = useParams();
  const articleContent = posts.find((post) => post.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      if (result.ok) {
        const data = await result.json();
        setArticleInfo(data);
        console.log("Article data fetched successfully:", data);
      } else {
        console.error("Error fetching article data");
      }
    };
    fetchData();
    console.log("Fetching article info for:", name);
  }, [name]);
  if (!articleContent) {
    return <NotFound />;
  }

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {articleContent.title}
      </h1>

      <Articles articleContent={articleContent} />
      {/* <CommentsList comments={articleInfo.comments} /> */}
      <CommentsList comments={articleInfo?.comments || []} />

      <h1 className="sm:text-2xl text-xl font-bold -mt-90 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-3">
        {posts
          .filter((post) => post.name !== name)
          .map((article) => (
            <div key={article.name} className="p-4 md:w-1/2 lg:w-1/3">
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
          ))}
      </div>

      <div className="text-center mb-10">
        <Link
          to="/articleslist"
          className="text-white inline-flex items-center py-2 px-4 bg-blue-600 rounded hover:bg-blue-950 transition duration-300"
        >
          Back to Articles List
        </Link>
      </div>
    </>
  );
};

export default Article;
