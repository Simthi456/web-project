import React from 'react';
import { Zap, Shield, LineChart, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ 
        animation: `fadeInUp 0.6s ease-out forwards ${delay}s`,
        opacity: 0,
      }}
    >
      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-600 text-lg">
            Discover the powerful features that set us apart and help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Zap size={24} />}
            title="Lightning Fast"
            description="Our optimized platform ensures quick loading times and seamless performance, keeping your users engaged."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Shield size={24} />}
            title="Secure & Reliable"
            description="End-to-end encryption and robust security measures to keep your data safe and your users protected."
            delay={0.2}
          />
          <FeatureCard 
            icon={<LineChart size={24} />}
            title="Growth Analytics"
            description="Comprehensive analytics to track performance and make data-driven decisions for continuous improvement."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Global Reach"
            description="Reach audiences worldwide with our international infrastructure and multi-language support."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;