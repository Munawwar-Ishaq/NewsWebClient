import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../Common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../Common/Card";

function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [animateBtn, setAnimationBtn] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY > 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === '/') {
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const searchTerm = searchParams.get("q");
    if (searchTerm) {
      setSearchValue(searchTerm);
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/everything?q=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}&page=1`
        )
        .then((res) => {
          if (res.data.articles.length > 0) {
            const filteredArticles = res.data.articles.filter(
              (article) => article.title !== "[Removed]" && article.description
            );

            filteredArticles.forEach((article) => {
              let im = new Image();
              im.src = article.urlToImage;
              im.onload = () => {
                setArticles((prevArticles) => {
                  if (
                    !prevArticles.some((item) => item.title === article.title)
                  ) {
                    return [...prevArticles, article];
                  }
                  return prevArticles;
                });
              };
              setLoading(false);
            });
          } else setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching articles: ", error);
          setLoading(true);
        });
    } else {
      setLoading(true);
    }
  }, [searchParams]);

  const BacktoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
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
      <div className="bar-search">
        <div className="backtohome" onClick={BacktoHome}>
          <FontAwesomeIcon className="left-button" icon={faArrowLeft} />
          <span>Home</span>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Press Ctrl + / to Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            ref={inputRef}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                navigate(`/Search?q=${searchValue}`);
                window.location.reload();
              }
            }}
          />
          <div
            className="search-icon"
            onClick={() => {
              navigate(`/Search?q=${searchValue}`);
              window.location.reload();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="load-cont">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="search-container">
          <div className="search-result">
            <h3>Your Search : {searchParams.get("q")}</h3>
            <h4>Total Result : {articles.length}</h4>
          </div>
          <div className="search-results-item">
            {articles.length > 0 ? (
              <p>Search Results : </p>
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
    </>
  );
}

export default Search;
