
import { ArrowRight, TrendingUp, Shield, AlertTriangle } from "lucide-react";

const features = [
  {
    title: "Automated Variance Alerts",
    description: "Get notified the moment your utility costs deviate from expected patterns. Never miss a billing anomaly again.",
    icon: AlertTriangle,
    bgColor: "bg-voltly-white",
    textColor: "text-voltly-charcoal"
  },
  {
    title: "Forecast Your Spend",
    description: "AI-powered predictions help you budget accurately and identify cost-saving opportunities before they impact your bottom line.",
    icon: TrendingUp,
    bgColor: "bg-voltly-charcoal",
    textColor: "text-white"
  },
  {
    title: "Secure Data Storage (GDPR & SOC2)",
    description: "Enterprise-grade security with full compliance. Your sensitive utility data is protected with bank-level encryption.",
    icon: Shield,
    bgColor: "bg-voltly-white",
    textColor: "text-voltly-charcoal"
  }
];

const FeaturesDetail = () => {
  return (
    <section className="py-24">
      {features.map((feature, index) => (
        <div key={index} className={`py-20 ${feature.bgColor}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`w-16 h-16 ${index % 2 === 1 ? 'bg-voltly-mint' : 'bg-voltly-blue'} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold ${feature.textColor} mb-6`}>
                  {feature.title}
                </h3>
                <p className={`text-xl ${feature.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                  {feature.description}
                </p>
                <button className={`${feature.textColor === 'text-white' ? 'text-voltly-mint hover:text-white' : 'text-voltly-blue hover:text-voltly-charcoal'} font-semibold text-lg flex items-center gap-2 group transition-colors duration-300`}>
                  Learn More 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`${feature.bgColor === 'bg-voltly-charcoal' ? 'bg-gray-800' : 'bg-gray-100'} rounded-2xl p-8 shadow-xl`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 ${index % 2 === 1 ? 'bg-voltly-mint/20' : 'bg-voltly-blue/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <feature.icon className={`w-8 h-8 ${index % 2 === 1 ? 'text-voltly-mint' : 'text-voltly-blue'}`} />
                      </div>
                      <p className="text-gray-500 font-medium">Interactive Chart Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesDetail;
