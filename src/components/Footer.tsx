
import { ArrowUp } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToElement } from "@/lib/utils";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const links = {
    Product: ["Features", "Pricing", "Security"],
    Company: ["About", "Blog", "Contact"],
    Resources: ["Help Center", "Status"],
    Legal: ["Privacy", "Terms", "GDPR"]
  };

  // Map link names to section IDs for scroll navigation
  const sectionMap: Record<string, string> = {
    "Features": "features",
    "Pricing": "pricing",
    "Security": "features"
  };

  // Map link names to page routes
  const routeMap: Record<string, string> = {
    "About": "/about",
    "Privacy": "/privacy",
    "Terms": "/terms",
    "GDPR": "/gdpr"
  };

  // Map link names to mailto links
  const mailtoMap: Record<string, string> = {
    "Contact": "mailto:support@voltly.ai"
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (item: string) => {
    const sectionId = sectionMap[item];
    if (sectionId) {
      // Check if we're on the home page
      if (location.pathname === '/') {
        // Already on home page, just scroll to section
        scrollToElement(sectionId);
      } else {
        // Navigate to home page first, then scroll after navigation
        navigate('/');
        // Use setTimeout to allow navigation to complete before scrolling
        setTimeout(() => {
          scrollToElement(sectionId);
        }, 100);
      }
    }
  };

  const getLinkElement = (item: string, index: number) => {
    const route = routeMap[item];
    const mailto = mailtoMap[item];
    const baseClasses = "text-gray-400 hover:text-voltly-mint transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block";

    if (route) {
      return (
        <Link key={index} to={route} className={baseClasses}>
          {item}
        </Link>
      );
    }

    if (mailto) {
      return (
        <a key={index} href={mailto} className={baseClasses}>
          {item}
        </a>
      );
    }

    return (
      <button
        key={index}
        onClick={() => handleLinkClick(item)}
        className={baseClasses}
      >
        {item}
      </button>
    );
  };

  return (
    <footer className="bg-voltly-charcoal text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,240,181,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,123,255,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/ad70b136-23cb-429b-b095-2fa01f8f8ff4.png"
                alt="Voltly AI Logo"
                className="h-12 filter brightness-0 invert hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Intelligence for your utility bills. Automate, visualize, and forecast with AI.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social, index) => (
                <button 
                  key={index}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-voltly-blue rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-voltly-blue/25 border border-white/10"
                >
                  <span className="text-sm font-bold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(links).map(([category, items], index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {getLinkElement(item, itemIndex)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Voltly AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            
            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-voltly-mint/20 backdrop-blur-sm hover:bg-voltly-mint rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-voltly-mint/25 group ml-4"
            >
              <ArrowUp className="w-5 h-5 text-voltly-mint group-hover:text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
