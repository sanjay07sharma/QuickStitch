import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductCustomization from './pages/ProductCustomization';
import MeasurementForm from './pages/MeasurementForm';
// import OrderTracking from './pages/OrderTracking';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/customize" element={<ProductCustomization />} /> */}
          {/* <Route path="/measurements" element={<MeasurementForm />} /> */}
          {/* <Route path="/track-order" element={<OrderTracking />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
