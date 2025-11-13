
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { scrollToWaitlist, scrollToElement } from "@/lib/utils";

const Hero = () => {
  const scrollToVideo = () => {
    scrollToElement('demo-video');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Chrome Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-voltly-mint/10 via-transparent to-voltly-blue/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,181,0.1),transparent_50%)] animate-float" />
      </div>
      
      {/* DVD-style Bouncing Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl animate-bounce-dvd border border-white/30" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-voltly-mint/20 backdrop-blur-sm rounded-2xl animate-bounce-dvd-delayed border border-voltly-mint/30" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-voltly-blue/20 backdrop-blur-sm rounded-xl animate-bounce-dvd-slow border border-voltly-blue/30" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-voltly-mint/15 backdrop-blur-sm rounded-2xl animate-bounce-dvd-reverse border border-voltly-mint/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          {/* <img 
            src="/lovable-uploads/ad70b136-23cb-429b-b095-2fa01f8f8ff4.png"
            alt="Voltly AI Logo"
            className="h-20 mx-auto filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          /> */}
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in text-voltly-charcoal">
          <span className="bg-gradient-to-r from-voltly-mint via-voltly-blue to-voltly-mint bg-clip-text text-transparent bg-size-200 animate-gradient">
            Voltly.AI
          </span>
          <br />
          <span className="text-4xl md:text-5xl text-gray-700">
            Intelligence for Your Utility Bills
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
          Automate data extraction, visualize trends, forecast costs—no spreadsheets required.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button
            size="lg"
            onClick={scrollToWaitlist}
            className="gradient-blue text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-voltly-blue/25 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group"
          >
            Create Free Account
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-voltly-blue to-electric-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
          
          <button onClick={scrollToVideo} className="text-voltly-charcoal hover:text-voltly-blue transition-colors duration-300 flex items-center gap-3 text-xl font-medium group bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-voltly-mint/50 hover:bg-white hover:border-voltly-mint shadow-lg hover:shadow-xl">
            <div className="w-12 h-12 bg-voltly-mint/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-voltly-mint/30">
              <Play className="w-6 h-6 text-voltly-mint group-hover:animate-pulse" fill="currentColor" />
            </div>
            Watch Demo
          </button>
        </div>
        
        {/* Demo Video */}
        <div id="demo-video" className="mt-20 relative animate-fade-in p-8 pb-24" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-voltly-mint/20 transition-all duration-500 hover:scale-[1.02]">
            <video
              className="aspect-video rounded-2xl w-full shadow-2xl"
              controls
              preload="metadata"
              poster="/lovable-uploads/ad70b136-23cb-429b-b095-2fa01f8f8ff4.png"
            >
              <source src="https://odkfyjnbwjj1o4iy.public.blob.vercel-storage.com/voltly_promo_vid_2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
