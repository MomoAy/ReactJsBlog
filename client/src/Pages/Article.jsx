import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import CommentList from "../Components/comment_list";
import articleContent from "./Article_Content";
import Articles from "../Components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.data;
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentList info={articleInfo.comments} />
      <h1 className="sm:text-2xl text-xl font-bold my-4">Other Articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );

};

export default Article;
