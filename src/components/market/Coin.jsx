import React from 'react'
import { Link } from 'react-router-dom'
import "./coin.css"

const Coin = ({coin}) => {
  return (
    <Link className='coin' to={`coin/${coin.id}`}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div className='name-logo'>
            <img src={coin.image} alt="" />
            <p>{coin.name} <span>({coin.symbol})</span></p>
        </div>

        <div className='coin-price'>
            <p>$ {coin.current_price}</p>
        </div>

        <div className={coin.price_change_percentage_24h >0? "up":"down"}>
            <p><span class="material-symbols-outlined" style={{color: coin.price_change_percentage_24h >0? "green":"red"}}>
                trending_{coin.price_change_percentage_24h >0? "up":"down"}
                </span>
                {coin.price_change_percentage_24h}%
            </p>
        </div>

        <div className='marketcap'>
            <p>$ {coin.market_cap}</p>
        </div>
    </Link>
  )
}

export default Coin
