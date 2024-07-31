import { Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
import NotFound from "./Pages/notFound";
import "./App.css";
import Footer from "./Common/Footer";
import { ActiveTab } from "./Common/context";
import Channel from "./Pages/Channel";
import SportNews from "./Pages/SportsNews";
import TodayNews from "./Pages/TodayNews";
import ContactUs from "./Pages/Contact";

function App() {
  return (
    <ActiveTab>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/News/latest" element={<TodayNews />} />
          <Route path="/News/Sports" element={<SportNews />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Channels" element={<Channel />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ActiveTab>
  );
}

export default App;
