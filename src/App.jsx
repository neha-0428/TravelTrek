import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SearchResults from './components/SearchResult';
import AttractionCard from './components/AttractionCard';
import FlightCard from './components/FlightCard';
import HotelCard from './components/HotelCard';
import HotelDetails from './components/HotelDetails';
import Popular from './components/Popular';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/searchResult" element={<SearchResults />} />
        <Route path="/attractionCard" element={<AttractionCard />} />
        <Route path="/flightCard" element={<FlightCard />} />
        <Route path="/hotelCard" element={<HotelCard />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
