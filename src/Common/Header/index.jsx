import React, { useEffect, useRef, useState } from "react";
// import HeadLogo from "../../Images/logo.png";
import HeadNewsLogo from "../../Images/images.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style.css";
function Header({ tab, showtab }) {
  const [showsn, setshowsn] = useState(true);
  const [activeBar, setActiveBar] = useState(false);
  const [SearchVal, setSearchVal] = useState("");
  const [activeTab] = useState(tab);
  const [devicesmall, setDeviceSmall] = useState(false);
  const navigate = useNavigate();
  const inputref = useRef(null);
  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value !== "") {
      setshowsn(false);
    } else {
      setshowsn(true);
    }
  };
  useEffect(() => {
    if (window.innerWidth < 960) {
      setDeviceSmall(true);
      setActiveBar(false);
    } else {
      setDeviceSmall(false);
      setActiveBar(true);
    }
  }, []);

  const handleSearchClick = () => {
    if (SearchVal !== "") {
      navigate("/Search?q=" + SearchVal);
    }
  };
  // const { activeTab , setActiveTab } = useContext(ActiveTabContext)
  return (
    <>
      <div className="header">
        <div className="head">
          <h2>Echo News Network</h2>
          <img src={HeadNewsLogo} alt="pic" />
        </div>
          <div className="navbar" style={{
            display : showtab ? 'flex' : 'none',
          }}>
            <div className="bar" onClick={() => setActiveBar(!activeBar)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div
              className="navs"
              style={{
                transform: activeBar ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
                visibility: activeBar ? "visible" : "hidden",
              }}
            >
              <li
                className={activeTab === "home" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/"}>Home</Link>
              </li>
              <li
                className={activeTab === "about" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/About"}>About</Link>
              </li>
              <li
                className={activeTab === "contact" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li
                className={activeTab === "channel" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/Channels"}>Channel</Link>
              </li>
              <li
                className={activeTab === "sports" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/News/Sports"}>Sports</Link>
              </li>
              <li
                className={activeTab === "today" ? "activetab" : ""}
                onClick={() => {
                  if (devicesmall) {
                    setActiveBar(false);
                  }
                }}
              >
                <Link to={"/News/latest"}>Latest News</Link>
              </li>
            </div>
            <div className="search">
              <span
                style={{
                  display: showsn ? "block" : "none",
                }}
                onClick={() => {
                  inputref.current.focus();
                }}
              >
                Search News
              </span>
              <input
                type="text"
                value={SearchVal}
                onChange={handleSearch}
                ref={inputref}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSearchClick();
                  }
                }}
              />
              <div
                className="searchicon"
                style={{
                  cursor: "pointer",
                }}
                onClick={handleSearchClick}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Header;
