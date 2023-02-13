import React from "react";
import { useState } from "react";
import data from "../data.json";
import ArticleContent from "./articleContent";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [show, setShow] = useState(false);
  const [index, setKey] = useState(null);
  //   const navigate = useNavigate();
  const handleShow = (key) => {
    setShow(!show);
    setKey(key);
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2  px-10  gap-10 rounded-lg ">
        {data.articles.map((item, key) => (
          <>
            {
              <div className=" border border-slate-600 pb-3">
                <div>
                  <img className="" src={item.urlToImage} alt="" />
                </div>
                <div>
                  <div className="flex justify-between py-2 px-2">
                    <p>{item.author}</p>
                    <span>{item.publishedAt}</span>
                  </div>
                  <div className="px-2">
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            }
          </>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Article;
