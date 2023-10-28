import React from 'react'
import HistoricChart from '../components/detailspage/historic-chart/HistoricChart'
import CoinDetail from '../components/detailspage/coin-detail/CoinDetail'

const CryptoDetail = () => {
  return (
    <div className='crypto-detail'>
      <HistoricChart/>
      <CoinDetail/>
    </div>
  )
}

export default CryptoDetail
