import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  debugger
  const services = [
    {
      title: "Custom Garments",
      description: "Personalized clothing tailored to your exact measurements",
      icon: "✂️"
    },
    {
      title: "Fabric Selection",
      description: "Choose from premium fabrics or upload your own",
      icon: "🧵"
    },
    {
      title: "Quick Delivery",
      description: "Fast turnaround and doorstep delivery",
      icon: "🚚"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Perfect Fit, Perfect Style
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Custom tailoring made easy with personalized measurements
        </p>
        <Link 
          to="/customize" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start Your Custom Order
        </Link>
      </header>

      <section className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
