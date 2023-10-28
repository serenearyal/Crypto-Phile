import React from 'react'
import "./cointrending.css"
import { Link } from 'react-router-dom'

const CoinTrending = ({coin}) => {

  return (
      <Link className='coin-trending' to={`coin/${coin.id}`}>
          <span>#{coin.score +1}</span>
          <p>{coin.name} ({coin.symbol})</p>
          <img src={coin.small} alt="" />
      </Link>
  )
}

export default CoinTrending
