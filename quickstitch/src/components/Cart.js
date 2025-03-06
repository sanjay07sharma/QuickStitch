import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const customization = location.state?.customization || {};
  const measurements = location.state?.measurements || {};

  const calculatePrice = () => {
    // Basic pricing logic
    const basePrice = 50; // Base price for tailoring
    const fabricMultiplier = {
      'Cotton': 1,
      'Silk': 1.5,
      'Linen': 1.2,
      'Polyester': 0.9
    };

    return basePrice * (fabricMultiplier[customization.fabric] || 1) * quantity;
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Customization</h3>
            <p>Garment: {customization.garmentType}</p>
            <p>Neckline: {customization.neckline}</p>
            <p>Sleeve: {customization.sleeveLength}</p>
            <p>Fabric: {customization.fabric}</p>
          </div>

          <div>
            <h3 className="font-bold">Measurements</h3>
            {Object.entries(measurements).map(([key, value]) => (
              <p key={key} className="capitalize">{key}: {value} inches</p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <label className="mr-4">Quantity:</label>
          <input 
            type="number" 
            min="1" 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 p-2 border rounded"
          />
        </div>

        <div className="mt-6 text-right">
          <p className="text-xl font-bold">
            Total Price: ${calculatePrice().toFixed(2)}
          </p>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
