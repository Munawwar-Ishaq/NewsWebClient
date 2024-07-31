import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import axios from "axios";
import Card from "../../Common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

function SportNews() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [animateBtn, setAnimationBtn] = useState(true);

  const [carosuleData] = useState([
    {
      author: "Mykenna Maniece",
      content:
        "Jessica Pegula competed at the Ecotrans Ladies Open Berlin in June 2024.Robert Prange/Contributor/Getty Images\r\n<ul><li>Jessica Pegula, 30, is the No. 6 women's tennis player in the world.</li><li>Sh… [+10393 chars]",
      description:
        "Tennis star Jessica Pegula, 30, is set to compete in the Olympics. She's the daughter of billionaires Terry and Kim Pegula who own the Buffalo Bills.",
      publishedAt: "2024-07-20T13:27:02Z",
      source: { id: "business-insider", name: "Business Insider" },
      title:
        "Meet Jessica Pegula, the Team USA tennis player whose parents are the billionaire owners of the Buffalo Bills",
      url: "https://www.businessinsider.com/jessica-pegula-heiress-tennis-star-2024-7",
      urlToImage:
        "https://i.insider.com/6699788dfb2b6bedb058863f?width=1200&format=jpeg",
    },
    {
      author: "Oscar Hartzog",
      content:
        "If you purchase an independently reviewed product or service through a link on our website, Rolling Stone may receive an affiliate commission.\r\nFox Sports broadcasts some of the nation’s biggest spor… [+3522 chars]",
      description:
        "Here’s how to watch Fox Sports online without cable in 2024, including ways to get free Fox Sports live streams.",
      publishedAt: "2024-07-19T22:04:32Z",
      source: { id: null, name: "Rolling Stone" },
      title: "How to Watch Fox Sports Online Without Cable",
      url: "http://www.rollingstone.com/product-recommendations/lifestyle/watch-fox-sports-online-without-cable-free-1235064373/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2024/07/GettyImages-1590298801.jpg?w=1600&h=900&crop=1",
    },
    {
      author: "Kevin Lynch",
      content:
        "The quarterfinals at UEFA Euro 2024 look set to kick off in some style with a mouth-watering matchup in Stuttgart between hosts Germany and the tournament's stand-out team so far, Spain. \r\nHaving nav… [+4865 chars]",
      description:
        "The quarterfinals get underway with a clash of European heavyweights in Stuttgart.",
      publishedAt: "2024-07-05T15:15:00Z",
      source: { id: null, name: "CNET" },
      title:
        "How to Watch Euro 2024: Spain vs. Germany – Livestream Soccer From Anywhere",
      url: "https://www.cnet.com/tech/services-and-software/how-to-watch-euro-2024-spain-vs-germany-livestream-soccer-from-anywhere/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/b25a5b392fb4a8608428a0c8596415c0ed0be86a/hub/2024/07/05/e5f6d4d1-ce66-45a1-b801-e082aebd7981/gettyimages-2159919899.jpg?auto=webp&fit=crop&height=675&width=1200",
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
        `${process.env.REACT_APP_API_URL}/everything?q=sports&apiKey=${process.env.REACT_APP_API_KEY}&page=1`
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
        <Header showtab={true} tab={"sports"} />
        <Carousel autoPlay={true}>
          {carosuleData.map((data, index) => (
            <div key={index} className="crl-container">
              <img src={data.urlToImage} alt={data.title} />
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

export default SportNews;
