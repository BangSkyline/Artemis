
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const motorcycles = [
  {
    id: 1,
    name: 'CFMoto 700MT',
    model: '700MT',
    tagline: 'Trail Routier',
    image: '/images/700MT.webp',
    specs: {
      engine: '693cc Bicylindre',
      power: '70hp @ 8500rpm',
      torque: '61.5Nm @ 6500rpm',
      weight: '240kg',
      fuelCapacity: '24L',
      topSpeed: '180 km/h'
    }
  },
  {
    id: 2,
    name: 'CFMoto 675NK',
    model: '675NK',
    tagline: 'Naked Power',
    image: '/images/675NK.webp',
    specs: {
      engine: '3 Cylindres - 675cc',
      power: '89hp @ 10500rpm',
      torque: '65Nm @ 8750rpm',
      weight: '185kg',
      fuelCapacity: '15L',
      topSpeed: '230 km/h'
    }
  },
  {
    id: 3,
    name: 'CFMoto 675SR',
    model: '675SR',
    tagline: 'Développée pour la Piste',
    image: '/images/675SR.webp',
    specs: {
      engine: '3 Cylindres - 675cc',
      power: '89hp @ 10500rpm',
      torque: '65Nm @ 8750rpm',
      weight: '191kg',
      fuelCapacity: '17L',
      topSpeed: '240 km/h'
    }
  },
  {
    id: 4,
    name: 'Ducati Panigale V2',
    model: 'Panigale V2',
    tagline: 'Excellence Italienne',
    image: '/images/Panigale-V2.webp',
    specs: {
      engine: '955cc L-Twin',
      power: '155hp @ 10750rpm',
      torque: '104Nm @ 9000rpm',
      weight: '200kg',
      fuelCapacity: '17L',
      topSpeed: '280 km/h'
    }
  },
  {
    id: 5,
    name: 'Zontes 703RR',
    model: '703RR',
    tagline: 'La guêpe',
    image: '/images/703RR.webp',
    specs: {
      engine: '3 Cylindres - 703cc',
      power: '95hp @ 9500rpm',
      torque: '79Nm @ 7000rpm',
      weight: '188kg',
      fuelCapacity: '16L',
      topSpeed: '210 km/h'
    }
  }
];

// Pre-generated positions for particles to avoid hydration mismatch
const particlePositions = [
  { left: 15, top: 20, duration: 4, delay: 0 },
  { left: 85, top: 75, duration: 5, delay: 1 },
  { left: 45, top: 10, duration: 6, delay: 0.5 },
  { left: 70, top: 90, duration: 3.5, delay: 1.5 },
  { left: 25, top: 60, duration: 4.5, delay: 0.8 },
  { left: 90, top: 30, duration: 5.5, delay: 1.2 },
  { left: 10, top: 80, duration: 3.8, delay: 0.3 },
  { left: 60, top: 40, duration: 4.2, delay: 1.8 },
  { left: 35, top: 15, duration: 5.2, delay: 0.7 },
  { left: 80, top: 65, duration: 3.7, delay: 1.3 },
  { left: 50, top: 85, duration: 4.8, delay: 0.2 },
  { left: 20, top: 50, duration: 5.8, delay: 1.7 },
  { left: 75, top: 25, duration: 4.3, delay: 0.9 },
  { left: 40, top: 70, duration: 3.9, delay: 1.1 },
  { left: 65, top: 5, duration: 5.3, delay: 0.4 },
  { left: 95, top: 55, duration: 4.7, delay: 1.6 },
  { left: 30, top: 35, duration: 3.6, delay: 0.6 },
  { left: 55, top: 95, duration: 5.7, delay: 1.4 },
  { left: 85, top: 45, duration: 4.1, delay: 0.1 },
  { left: 5, top: 75, duration: 5.9, delay: 1.9 }
];

export default function Home() {
  const [currentBike, setCurrentBike] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBike((prev) => (prev + 1) % motorcycles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#e6e6e6] font-['Montserrat'] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#461044] via-[#461044] to-[#dbb979]">
        <div 
          className="absolute inset-0 bg-black/20"
          style={{
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        />
        
        <div className={`relative z-10 text-center text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            Artémis
            <span className="text-[#ffdb8d]">.Cosmos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto px-4">
            Les motos créées et imaginées par l'IA
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-[#dbb979] text-[#461044] font-bold text-lg rounded-full hover:bg-[#ffdb8d] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Explorer la collection
            </button>
            <button 
              onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 border-2 border-[#ffdb8d] text-[#ffdb8d] font-bold text-lg rounded-full hover:bg-[#ffdb8d] hover:text-[#461044] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Specs
            </button>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ffdb8d] rounded-full opacity-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </section>

      {/* Motorcycle Showcase */}
      <section id="showcase" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-[#461044] mb-6">La Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos créations.
            </p>
          </div>

          {/* Interactive Bike Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 bg-[#e6e6e6] rounded-full p-2">
              {motorcycles.map((bike, index) => (
                <button
                  key={bike.id}
                  onClick={() => setCurrentBike(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    currentBike === index
                      ? 'bg-[#461044] text-white shadow-lg'
                      : 'text-[#461044] hover:bg-[#dbb979] hover:text-white'
                  }`}
                >
                  {bike.model}
                </button>
              ))}
            </div>
          </div>

          {/* Current Bike Display */}
          <div className="max-w-6xl mx-auto">
            <div 
              key={currentBike}
              className="bg-gradient-to-r from-[#461044] to-[#dbb979] rounded-3xl p-8 md:p-12 text-white animate-fadeIn"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">
                    {motorcycles[currentBike].name}
                  </h3>
                  <p className="text-2xl text-[#ffdb8d] mb-6">
                    {motorcycles[currentBike].tagline}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-[#ffdb8d] text-sm font-semibold">Moteur</p>
                      <p className="text-lg">{motorcycles[currentBike].specs.engine}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-[#ffdb8d] text-sm font-semibold">Puissance</p>
                      <p className="text-lg">{motorcycles[currentBike].specs.power}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-[#ffdb8d] text-[#461044] font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    Afficher les specs
                  </button>
                </div>
                <div className="relative">
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <img
                      src={motorcycles[currentBike].image}
                      alt={motorcycles[currentBike].name}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specs Section */}
      <section id="specs" className="py-20 bg-[#e6e6e6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#461044] mb-6">Spécifications Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plongez dans les spécifications techniques derrière chaque moto
            </p>
          </div>

          <div className="space-y-20">
            {motorcycles.map((bike, index) => (
              <div 
                key={bike.id}
                className={`max-w-7xl mx-auto transition-all duration-1000 ${
                  index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                }`}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}>
                  {/* Specs Content */}
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                      <h3 className="text-3xl font-bold text-[#461044] mb-2">{bike.name}</h3>
                      <p className="text-xl text-[#dbb979] mb-8">{bike.tagline}</p>
                      
                      <div className="grid grid-cols-1 gap-6">
                        {Object.entries(bike.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-3 border-b border-[#e6e6e6]">
                            <span className="font-semibold text-[#461044] capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </span>
                            <span className="text-gray-700 font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-[#e6e6e6]">
                        <button className="w-full py-4 bg-gradient-to-r from-[#461044] to-[#dbb979] text-white font-bold rounded-lg hover:from-[#dbb979] hover:to-[#ffdb8d] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
                          {bike.model}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#461044] to-[#dbb979] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                        <img
                          src={bike.image}
                          alt={bike.name}
                          className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#461044] to-[#dbb979] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Choisissez votre modèles et contactez votre concessionnaire.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-4 bg-[#ffdb8d] text-[#461044] font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
              Book Test Ride
            </button>
            <button className="px-12 py-4 border-2 border-[#ffdb8d] text-[#ffdb8d] font-bold text-lg rounded-full hover:bg-[#ffdb8d] hover:text-[#461044] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
              Contact Dealer
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </div>
  );
}
