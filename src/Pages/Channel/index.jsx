import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Header from "../../Common/Header";

function Channel() {
  const [channelData, setChannelData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/top-headlines/sources?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        setChannelData(res.data.sources);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header showtab={true} tab={'channel'} />
      <div className="channel-container">
        {loading ? (
          <div className="load-cont">
            <div className="loader"></div>
          </div>
        ) : (
          channelData.map((item) => {
            return (
              <div
                className="channel-item"
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
              >
                <h3>Channel Name - {item.name}</h3>
                <span>----Description----</span>
                <p className="desc">{item.description}</p>
                <p className="cat">Category - {item.category}</p>
                <p className="lang">Language - {item.language.toUpperCase()}</p>
                <p className="coun">Country - {item.country.toUpperCase()}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Channel;
