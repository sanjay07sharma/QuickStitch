import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCustomization = () => {
  const navigate = useNavigate();
  const [customization, setCustomization] = useState({
    garmentType: '',
    neckline: '',
    sleeveLength: '',
    fabric: ''
  });

  const garmentTypes = ['Shirt', 'Blouse', 'Dress', 'Suit'];
  const necklines = ['Round', 'V-Neck', 'Square', 'Boat'];
  const sleeveLengths = ['Full', 'Half', 'Three-Quarter', 'Sleeveless'];
  const fabrics = ['Cotton', 'Silk', 'Linen', 'Polyester'];

  const handleCustomizationChange = (field, value) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  const proceedToMeasurements = () => {
    if (Object.values(customization).every(val => val)) {
      navigate('/measurements', { state: { customization } });
    } else {
      alert('Please complete all customization options');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Customize Your Garment</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Garment Type */}
        <div>
          <h2 className="text-xl mb-4">Select Garment Type</h2>
          <div className="grid grid-cols-2 gap-4">
            {garmentTypes.map(type => (
              <button
                key={type}
                className={`p-4 rounded-lg ${
                  customization.garmentType === type 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => handleCustomizationChange('garmentType', type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Neckline */}
        <div>
          <h2 className="text-xl mb-4">Choose Neckline</h2>
          <div className="grid grid-cols-2 gap-4">
            {necklines.map(neck => (
              <button
                key={neck}
                className={`p-4 rounded-lg ${
                  customization.neckline === neck 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => handleCustomizationChange('neckline', neck)}
              >
                {neck}
              </button>
            ))}
          </div>
        </div>

        {/* Sleeve Length */}
        <div>
          <h2 className="text-xl mb-4">Sleeve Length</h2>
          <div className="grid grid-cols-2 gap-4">
            {sleeveLengths.map(sleeve => (
              <button
                key={sleeve}
                className={`p-4 rounded-lg ${
                  customization.sleeveLength === sleeve 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => handleCustomizationChange('sleeveLength', sleeve)}
              >
                {sleeve}
              </button>
            ))}
          </div>
        </div>

        {/* Fabric Selection */}
        <div>
          <h2 className="text-xl mb-4">Select Fabric</h2>
          <select
            className="w-full p-3 border rounded-lg"
            value={customization.fabric}
            onChange={(e) => handleCustomizationChange('fabric', e.target.value)}
          >
            <option value="">Choose Fabric</option>
            {fabrics.map(fabric => (
              <option key={fabric} value={fabric}>{fabric}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={proceedToMeasurements}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Continue to Measurements
        </button>
      </div>
    </div>
  );
};

export default ProductCustomization;
