
const logos = [
  { name: "TechCorp", width: "120px" },
  { name: "EnergyFlow", width: "140px" },
  { name: "GreenAnalytics", width: "110px" },
  { name: "SmartGrid Co", width: "130px" },
  { name: "UtilityPro", width: "100px" },
  { name: "DataStream", width: "125px" }
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-voltly-charcoal font-medium text-lg">
            Trusted by leading analysts & consultants
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="h-12 flex items-center justify-center bg-voltly-gray px-6 py-3 rounded-lg"
              style={{ width: logo.width }}
            >
              <span className="text-voltly-charcoal font-semibold text-sm tracking-wide whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
