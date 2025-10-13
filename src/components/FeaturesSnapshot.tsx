
import { FileText, BarChart, Download, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Instant Bill Ingestion",
    subtitle: "PDF to data in one click",
    description: "Upload any utility bill and watch our AI extract every data point instantly."
  },
  {
    icon: BarChart,
    title: "Visual Reports",
    subtitle: "Pitch-deck-style charts, not paragraphs",
    description: "Beautiful visualizations that tell your energy story at a glance."
  },
  {
    icon: Download,
    title: "Excel Export",
    subtitle: "Full raw data whenever you need it",
    description: "Complete data sets ready for your existing workflows and analysis tools."
  },
  {
    icon: Users,
    title: "Optional Human Support",
    subtitle: "Expert review on demand",
    description: "Our energy analysts can review and validate your most critical reports."
  }
];

const FeaturesSnapshot = () => {
  return (
    <section className="py-24 bg-voltly-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-voltly-charcoal mb-6">
            Everything you need to master your utility data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful features that transform how you handle utility bills and energy analysis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-voltly-mint to-voltly-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-voltly-charcoal mb-2">{feature.title}</h3>
                <p className="text-voltly-mint font-semibold text-sm mb-3">{feature.subtitle}</p>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSnapshot;
