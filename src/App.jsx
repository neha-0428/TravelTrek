import './App.css'
import Home from './components/features/Home';
import About from './components/features/About';
import Contact from './components/features/Contact';
import SearchResults from './components/features/SearchResult';
import AttractionCard from './components/common/AttractionCard';
import FlightCard from './components/common/FlightCard';
import HotelCard from './components/common/HotelCard';
import HotelDetails from './components/features/HotelDetails';
import Popular from './components/features/Popular';
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
