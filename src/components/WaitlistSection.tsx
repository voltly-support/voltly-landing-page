
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', formData);
    
    // Show success toast with confetti effect
    toast({
      title: "🎉 Welcome to the waitlist!",
      description: "You'll be first to know when Voltly AI launches.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-voltly-charcoal via-gray-900 to-voltly-charcoal relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,181,0.1),transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,123,255,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-voltly-mint/10 backdrop-blur-sm rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-voltly-blue/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Interested in early access?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
          Join our exclusive waitlist and be among the first to experience the future of utility bill intelligence.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input 
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-gray-400 px-6 py-4 text-lg rounded-2xl focus:ring-2 focus:ring-voltly-mint focus:border-transparent transition-all duration-300"
                  required
                />
                <Input 
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-gray-400 px-6 py-4 text-lg rounded-2xl focus:ring-2 focus:ring-voltly-mint focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-4">
                <Input 
                  type="text"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-gray-400 px-6 py-4 text-lg rounded-2xl focus:ring-2 focus:ring-voltly-mint focus:border-transparent transition-all duration-300"
                />
                <Button 
                  type="submit"
                  className="w-full gradient-mint text-white px-8 py-4 text-xl font-semibold rounded-2xl hover:shadow-lg hover:shadow-voltly-mint/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Join the Waitlist</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-voltly-mint to-voltly-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
              </div>
            </div>
          </form>
          
          <p className="text-sm text-gray-400 mt-6">
            No spam, unsubscribe at any time. We respect your privacy and will only contact you about Voltly AI updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
