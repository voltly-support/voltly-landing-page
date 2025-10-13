
import { Clock, Shield, TrendingUp } from "lucide-react";

const BenefitsGrid = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="text-center">
        <div className="w-16 h-16 bg-voltly-mint/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-voltly-mint/30">
          <TrendingUp className="w-8 h-8 text-voltly-mint" />
        </div>
        <h4 className="text-lg font-bold text-voltly-charcoal mb-2">99.9% Accuracy</h4>
        <p className="text-gray-600">Eliminate typos & re-work</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-voltly-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-voltly-blue/30">
          <Clock className="w-8 h-8 text-voltly-blue" />
        </div>
        <h4 className="text-lg font-bold text-voltly-charcoal mb-2">Instant Reports</h4>
        <p className="text-gray-600">Charts & insights in seconds</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-voltly-mint/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-voltly-mint/30">
          <Shield className="w-8 h-8 text-voltly-mint" />
        </div>
        <h4 className="text-lg font-bold text-voltly-charcoal mb-2">Enterprise Security</h4>
        <p className="text-gray-600">GDPR & SOC2 encryption</p>
      </div>
    </div>
  );
};

export default BenefitsGrid;
