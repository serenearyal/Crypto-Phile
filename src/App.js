import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CryptoHome/>}/>
        <Route path='/coin/:id' element={<CryptoDetail/>}/>
      </Routes>
      <div className='footer'>
        <p>All rights reserved. Serene Aryal</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
