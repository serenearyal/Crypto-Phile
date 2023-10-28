import React from 'react'
import Trending from '../components/trending/Trending'
import Market from '../components/market/Market'

const CryptoHome = () => {
  return (
    <div className='crypto-home'>
      <Trending/>
      <Market/>
    </div>
  )
}

export default CryptoHome
