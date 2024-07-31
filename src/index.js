import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









  // const [newss, setNews] = useState({});
  // const key = 'eHkjhuKDAOV8NJtLi9F8GlAkB7vdNOlR1h8XyqMg';
  // const key = 'bbd8003414b34d4ca59c1082905a0e8f';




  // useEffect(() => {
  //   axios.get('https://newsapi.org/v2/everything?q=latest&apiKey=bbd8003414b34d4ca59c1082905a0e8f&page=2').then((res) => {
  //     console.log(res.data);
  //   })
  // }, []);