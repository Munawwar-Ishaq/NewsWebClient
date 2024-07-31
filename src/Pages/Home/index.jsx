import React from "react";
import HomeGrid from "../../Common/HomeGrid";
import Tags from "../../Common/Tags";
import PopularNews from "../../Common/PopularNews";
import Header from "../../Common/Header";

function Home() {
  return (
    <>
      <Header tab={'home'} showtab={true} />
      <HomeGrid />
      <Tags />
      <PopularNews />
    </>
  );
}

export default Home;
