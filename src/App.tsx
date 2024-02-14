import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import etsy from './assets/etsy.json'

import Stars from './components/stars/Stars'
import Listing from './components/listing/Listing';

const HomeLinks = () => (
  <ol>
    <li><Link to={'/ra3/rayting'}>Рейтинг фильмов.</Link></li>
    <li><Link to={'/ra3/list'}>Список предложений.</Link></li>
  </ol>
)

function App() {
  const countStars = Math.floor(Math.random() * 5) + 1;

  const data = etsy.map(item => {
    if (item.state === 'removed') return;

    return {
      listing_id: item.listing_id,
      url: item.url || '',
      MainImage: item.MainImage?.url_570xN || '',
      title: item.title || '',
      currency_code: item.currency_code || '',
      price: item.price || '',
      quantity: item.quantity || null
    }
  });

  return (
    <Routes>
      <Route path='/ra3/' element={<HomeLinks />} />
      <Route path='/ra3/rayting' element={<Stars count={countStars} />} />
      <Route path='/ra3/list' element={<Listing items={data} />} />
    </Routes>
  )
}

export default App
