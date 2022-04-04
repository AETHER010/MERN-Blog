import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./Articles-content";
import Articles from "../components/Articles";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/commentsList";
import Addcomment from "../components/Addcomment";

const Article = () => {
  const { name } = useParams();
  const [articleInfo, setarticleInfo] = useState({ comments: [] });

  const fetchData = async () => {
    return await fetch(`/api/articles/${name}`)
      .then((response) => response.json())
      .then((data) => setarticleInfo(data));
  };
  //     return axios
  //       .get(`/api/articles/${name}`)
  //       .then((response) => console.log(response.data));
  //   };

  useEffect(() => {
    fetchData();
  }, [name]);

  const article = articleContent.find((articles) => articles.name === name);

  if (!article) return <NotFoundPage />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <div className="overflow-hidden flex-column">
        <CommentsList comments={articleInfo.comments} />
        <Addcomment articleName={name} setarticleInfo={setarticleInfo} />
      </div>
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex fex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
