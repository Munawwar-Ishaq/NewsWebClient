import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import axios from "axios";
import Card from "../../Common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

function TodayNews() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [animateBtn, setAnimationBtn] = useState(true);

  const [carosuleData] = useState([
    {
      author: "insider@insider.com (Molly Grace)",
      content:
        "Affiliate links for the products on this page are from partners that compensate us (see our advertiser disclosure with our list of partners for more details). However, our opinions are our own. See h… [+4674 chars]",
      description:
        "These are today's mortgage and refinance rates. If the latest CPI data shows that inflation slowed in June, mortgage rates could tick down this week.",
      publishedAt: "2024-07-08T10:00:05Z",
      source: { id: "business-insider", name: "Business Insider" },
      title:
        "Mortgage Interest Rates Today, July 8, 2024 | Will Rates Drop This Week?",
      url: "https://www.businessinsider.com/best-mortgage-refinance-rates-today-monday-8-2024-7",
      urlToImage:
        "https://i.insider.com/626ff3a10983640018c0aaf7?width=1200&format=jpeg",
    },
    {
      author: "Brandon Widder",
      content:
        "Apples AirTags are on sale for $23.99 a pop, matching their all-time low\r\nApples AirTags are on sale for $23.99 a pop, matching their all-time low\r\n / You can also score savings on the Apple Watch Se… [+3170 chars]",
      description:
        "Apple’s handy location trackers are on sale for $5 off at Amazon and Walmart. You can also save on the Apple Watch Series 9 and Acer’s Chromebook Plus Spin 714.",
      publishedAt: "2024-07-25T19:26:52Z",
      source: { id: "the-verge", name: "The Verge" },
      title:
        "Apple’s AirTags are on sale for $23.99 a pop, matching their all-time low",
      url: "https://www.theverge.com/2024/7/25/24202063/airtag-location-tracker-apple-watch-series-9-deal-sale",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/u8svg6UO_9e_JkZiFcWwNDhgDfo=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22461387/vpavic_4547_20210421_0074.jpg",
    },
    {
      author: "Paul McNally",
      content:
        "Just like we covered Flight Sim Expo 24 a couple of weeks ago, it seems the right thing to do to cover the similar event that is held in honor of the giant of (weird) gaming that is Farming Simulator… [+1611 chars]",
      description:
        "Just like we covered Flight Sim Expo 24 a couple of weeks ago, it seems the right thing to do… Continue reading FarmCon 24 was attended by over 3500 people all hyped to see the latest Farming Simulator game\nThe post FarmCon 24 was attended by over 3500 people…",
      publishedAt: "2024-07-11T14:14:17Z",
      source: { id: null, name: "ReadWrite" },
      title:
        "FarmCon 24 was attended by over 3500 people all hyped to see the latest Farming Simulator game",
      url: "https://readwrite.com/farming-simulator-farmcon-24/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/07/FC24_1-1.jpg",
    },
  ]);

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/everything?q=latest&apiKey=${process.env.REACT_APP_API_KEY}&page=1`
      )
      .then((res) => {
        console.log(res.data);
        const filteredArticles = res.data.articles.filter(
          (article) => article.title !== "[Removed]" && article.description
        );

        filteredArticles.forEach((article) => {
          let im = new Image();
          im.src = article.urlToImage;
          im.onload = () => {
            setArticles((prevArticles) => {
              if (!prevArticles.some((item) => item.title === article.title)) {
                return [...prevArticles, article];
              }
              return prevArticles;
            });
          };
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles: ", error);
        setLoading(true);
      });
  }, []);
  return (
    <>
      <div className="news-container">
        {scrollToTop && (
          <div
            className={
              animateBtn ? "scrolltotp scroltopbtnanimation" : "scrolltotp"
            }
            onMouseEnter={() => {
              setAnimationBtn(false);
            }}
            onMouseLeave={() => {
              setAnimationBtn(true);
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )}
        <Header showtab={true} tab={"today"} />
        <Carousel autoPlay={true}>
          {carosuleData.map((data, index) => (
            <div key={index} className="crl-container">
              <img
                src={data.urlToImage}
                alt={data.title}
              />
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </Carousel>
        {loading ? (
          <div className="load-cont">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="search-container">
            <h1 className="latest-news-label">Latest News</h1>
            <div className="search-results-item">
              {articles.length > 0 ? (
                <p></p>
              ) : (
                <div className="no-result"> No Result Found </div>
              )}
              <div className="results">
                {articles.map((article, index) => (
                  <Card article={article} key={index} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TodayNews;
