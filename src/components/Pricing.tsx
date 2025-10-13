
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "14 days",
    description: "Perfect for testing our platform",
    features: [
      "Upload up to 10 bills",
      "Basic visualizations",
      "Excel export",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For growing businesses and consultants",
    features: [
      "Unlimited bill uploads",
      "Advanced analytics",
      "Automated alerts",
      "API access",
      "Priority support",
      "Custom reports"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
      "Training & onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-voltly-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-voltly-charcoal mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-voltly-mint transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-voltly-mint text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-voltly-charcoal mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-voltly-charcoal">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-voltly-mint flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'gradient-mint text-white hover:shadow-lg transform hover:-translate-y-1' 
                    : 'bg-voltly-charcoal text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
