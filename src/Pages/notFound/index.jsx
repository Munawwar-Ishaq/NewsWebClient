import React, { useContext } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ActiveTabContext } from "../../Common/context";
import Header from "../../Common/Header";

function NotFound() {
  const navigate = useNavigate();
  const { setActiveTab } = useContext(ActiveTabContext);
  return (
    <>
    <Header showtab={false}  />
      <div className="not-found">
        <h2>Page Not Found</h2>
        <button
          onClick={() => {
            setActiveTab("home"); 
            navigate("/");
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default NotFound;
