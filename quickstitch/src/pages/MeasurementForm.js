import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MeasurementForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
    shoulders: '',
    sleeve: '',
    height: ''
  });

  const handleMeasurementChange = (field, value) => {
    setMeasurements(prev => ({ ...prev, [field]: value }));
  };

  const submitMeasurements = () => {
    if (Object.values(measurements).every(val => val)) {
      // In a real app, you'd send this to backend
      navigate('/cart', { 
        state: { 
          customization: location.state?.customization, 
          measurements 
        } 
      });
    } else {
      alert('Please fill in all measurement fields');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Body Measurements</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {['chest', 'waist', 'hips', 'shoulders', 'sleeve', 'height'].map(field => (
          <div key={field}>
            <label className="block mb-2 capitalize">{field} (inches)</label>
            <input
              type="number"
              className="w-full p-3 border rounded-lg"
              placeholder={`Enter ${field}`}
              value={measurements[field]}
              onChange={(e) => handleMeasurementChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={submitMeasurements}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Measurement Tips:</h3>
        <ul className="list-disc list-inside">
          <li>Use a flexible measuring tape</li>
          <li>Wear fitted clothing while measuring</li>
          <li>Keep the tape snug but not tight</li>
          <li>Stand straight with arms at sides</li>
        </ul>
      </div>
    </div>
  );
};

export default MeasurementForm;
