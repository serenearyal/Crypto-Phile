import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import "./coindetail.css";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response) {
    return <div className="detailsloading">Loading coin details...</div>;
  }

  return (
    <div className="coin-detail">
      <div className="title">
        <img src={response.image.large} alt={response.name} />
        <h1>{response.name}</h1>
      </div>
      <p dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
    </div>
  );
};

export default CoinDetail;
