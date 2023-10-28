import React from 'react'
import useAxios from '../../hooks/useAxios'
import Coin from './Coin';
import "./market.css"

const Market = () => {

    const {response} = useAxios("coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    return (
    <div className='market'>
      <h2>Market <span>$$</span></h2>
      <div className='coins'>
        {response && response.map((coin)=>{
          return (
              <Coin key={coin.id} coin={coin}/>
          )
        })}
      </div>

    </div>
  )
}

export default Market
