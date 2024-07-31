import React, { useEffect, useState } from "react";
import "./style.css";
import { HomeGridData } from "../../data";


function HomeGrid() {

  const [articles, setArticles] = useState([]);
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    setArticles(HomeGridData)
    setLoading(false)
  }, []);

  return (
    <>
      {!loading && (
        <div className="home-grid">
          <div className="first-grit-item">
            <div className="back-light"></div>
            <img src={articles[1].urlToImage} alt="pic" />
            <div className="title">{articles[1].title}</div>
            <div className="content">
              <div className="description">{articles[1].description}</div>
              <div className="link">
                <a href={articles[1].url} target="_blank" rel="noreferrer">
                  Read More
                </a>
                <div className="source">{articles[1].source.name}</div>
              </div>
              <div className="author">Author : {articles[1].author}</div>
            </div>
          </div>
          <div className="second-sec">
            <div className="second-grit-item">
            <div className="back-light"></div>
              <img src={articles[0].urlToImage} alt="pic" />
              <div className="title">{articles[0].title}</div>
              <div className="content">
                <div className="description">{articles[0].description.length > 100 ? articles[0].description.substring(0, 100) + '[...]' : articles[0].description}</div>
                <div className="link">
                  <a href={articles[0].url} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                  <div className="source">{articles[0].source.name}</div>
                </div>
                <div className="author">Author : {articles[0].author}</div>
              </div>
            </div>
            <div className="trird-grit-item">
            <div className="back-light"></div>
              <img src={articles[2].urlToImage} alt="pic" />
              <div className="title">{articles[2].title}</div>
              <div className="content">
                <div className="description">{articles[2].description.length > 100 ? articles[2].description.substring(0, 100) + '[...]' : articles[2].description}</div>
                <div className="link">
                  <a href={articles[2].url} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                  <div className="source">{articles[2].source.name}</div>
                </div>
                <div className="author">Author : {articles[2].author}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeGrid;
