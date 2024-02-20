import React from "react";
import useAxios from "../../hooks/useAxios";
import CoinTrending from "./CoinTrending";
import "./trending.css";

const Trending = () => {
  const { response } = useAxios("search/trending");

  if (!response) {
    return <div className="loading">Loading Trending Coins...</div>;
  }

  return (
    <div className="trending">
      <h2>Trending Today!!</h2>

      {response &&
        response.coins.map((coin) => {
          return <CoinTrending key={coin.item.coin_id} coin={coin.item} />;
        })}
    </div>
  );
};

export default Trending;
