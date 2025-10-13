
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    status: "Coming Soon",
    description: "Perfect for testing our platform",
    features: [
      "Upload up to 10 bills",
      "Basic visualizations", 
      "Excel export",
      "Email support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    status: "Early Access",
    description: "For growing businesses and consultants",
    features: [
      "Unlimited bill uploads",
      "Advanced analytics",
      "Automated alerts", 
      "API access",
      "Priority support",
      "Custom reports"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    status: "Custom Pricing",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee", 
      "On-premise deployment",
      "Training & onboarding"
    ],
    highlight: false
  }
];

const PricingPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-voltly-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,240,181,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(0,123,255,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-voltly-charcoal mb-6">
            Pricing Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent pricing coming soon. Join our waitlist to be first in line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group ${
                plan.highlight ? 'transform scale-105' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-voltly-mint to-voltly-blue text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-white/60 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                plan.highlight 
                  ? 'border-voltly-mint/50 shadow-voltly-mint/10 shadow-xl' 
                  : 'border-white/20 shadow-lg hover:border-voltly-blue/30'
              }`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  plan.highlight ? 'from-voltly-mint to-voltly-blue' : 'from-voltly-blue to-voltly-mint'
                }`} />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-voltly-charcoal mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`text-lg font-semibold px-4 py-2 rounded-full ${
                        plan.highlight 
                          ? 'bg-voltly-mint/20 text-voltly-mint' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {plan.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          plan.highlight 
                            ? 'bg-voltly-mint group-hover/item:bg-voltly-blue' 
                            : 'bg-voltly-blue group-hover/item:bg-voltly-mint'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-voltly-charcoal transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      plan.highlight 
                        ? 'gradient-mint text-white hover:shadow-voltly-mint/25' 
                        : 'bg-white border-2 border-voltly-charcoal text-voltly-charcoal hover:bg-voltly-charcoal hover:text-white'
                    }`}
                  >
                    Join Waitlist to be First
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
