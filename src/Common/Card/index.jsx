import React from "react";

function Card({article , index}) {
  return (
    <div className="result-item">
      <img src={article.urlToImage} alt={article.title} />
      <div className="card-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
