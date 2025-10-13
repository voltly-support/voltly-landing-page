
import { FileText, BarChart, Download, Users } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Instant PDF Ingestion",
    description: "Upload any utility bill and watch our AI extract every data point instantly.",
    color: "voltly-mint"
  },
  {
    icon: BarChart,
    title: "Pitch-Deck Reports",
    description: "Beautiful visualizations that tell your energy story at a glance.",
    color: "voltly-blue"
  },
  {
    icon: Download,
    title: "Excel Export",
    description: "Complete data sets ready for your existing workflows and analysis tools.",
    color: "voltly-mint"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our energy analysts can review and validate your most critical reports.",
    color: "voltly-blue"
  }
];

const CoreBenefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-voltly-gray to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,240,181,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,123,255,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-voltly-charcoal mb-6">
            Core Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful features that transform how you handle utility bills and energy analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glass Card */}
              <div className="bg-white/40 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color} to-${benefit.color === 'voltly-mint' ? 'voltly-blue' : 'voltly-mint'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10`}>
                  <benefit.icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-voltly-charcoal mb-4 group-hover:text-voltly-blue transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-${benefit.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;
