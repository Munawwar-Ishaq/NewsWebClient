import React, { useState } from "react";
import { popularData, TopHeadline, sportData } from "../../data";
import "./style.css";
function PopularNews() {
  const [popularNews] = useState(popularData);
  const [Headlines] = useState(TopHeadline);
  const [sportsData] = useState(sportData);

  return (
    <>
      <div className="popular-container">
        <div className="popular-news">
          <div className="popular">
            <h2>Popular News</h2>
            <div className="popular-news-container">
              {popularNews.map((news, index) => (
                <div className="popular-news-card" key={index}>
                  <img src={news.urlToImage} alt={news.title} />
                  <div className="popular-news-card-content">
                    <h3>{news.title}</h3>
                    <p>{news.description}</p>
                  </div>
                  <div className="author">By {news.author}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sports">
            <h2>Sports</h2>
            <div className="sports-container">
              <div className="line-articles"></div>
              {sportsData.map((news, index) => (
                <div key={index}>
                  <div className="sports-card">
                    <img src={news.urlToImage} alt={news.title} />
                    <div className="sports-card-content">
                      <h3>{news.title}</h3>
                      <p>{news.content}</p>
                      <a className="readmore" target="_blank" rel="noreferrer" href={news.url}>
                        Read more
                      </a>
                      <div className="author">By {news.author}</div>
                    </div>
                  </div>
                  <div className="line-articles"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="headlines">
          <h2>Headlines</h2>
          <div className="headlines-car-contaciner">
            {Headlines.map((news, index) => (
              <div className="headlines-card" key={index}>
                <img src={news.urlToImage} alt={news.title} />
                <div className="headlines-card-content">
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
                <div className="author">By {news.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularNews;
