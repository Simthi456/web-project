import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <div 
        className={`container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Create Beautiful Experiences
          </h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            Empower your digital presence with our elegant, responsive designs that captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Workspace with modern devices"
              className="w-full h-auto max-w-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12">
        <a 
          href="#features" 
          className="animate-bounce p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;