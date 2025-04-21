import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team collaborating"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded in 2025, Horizon has been at the forefront of web design and development, 
              creating beautiful digital experiences that help businesses succeed in the 
              digital landscape.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our team combines technical expertise with creative vision to deliver websites 
              that not only look stunning but also perform exceptionally well. We believe 
              in the power of thoughtful design and clean code to create meaningful connections 
              between brands and their audiences.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">95%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;