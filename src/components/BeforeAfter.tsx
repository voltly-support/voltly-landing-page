
const BeforeAfter = () => {
  return (
    <section className="py-24 bg-voltly-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-voltly-charcoal mb-6">
            From chaos to clarity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We untangle your billing process so you can focus on savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Before */}
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                <div className="relative w-20 h-20">
                  {/* Tangled wires representation */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full text-red-500">
                      <path d="M10,10 Q40,40 70,10 Q40,40 10,70 Q40,40 70,70" 
                            stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse"/>
                      <path d="M70,10 Q40,40 10,10 Q40,40 70,70 Q40,40 10,70" 
                            stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-voltly-charcoal mb-4">Pre-Voltly</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Manual data entry</li>
                <li>Scattered spreadsheets</li>
                <li>Hours of analysis</li>
                <li>Error-prone calculations</li>
              </ul>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-voltly-mint rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
          {/* After */}
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <div className="relative w-20 h-20">
                  {/* Clean flowchart representation */}
                  <svg viewBox="0 0 80 80" className="w-full h-full text-voltly-mint">
                    <rect x="10" y="10" width="15" height="15" fill="currentColor" rx="2"/>
                    <rect x="35" y="10" width="15" height="15" fill="currentColor" rx="2"/>
                    <rect x="60" y="10" width="15" height="15" fill="currentColor" rx="2"/>
                    <rect x="10" y="35" width="15" height="15" fill="currentColor" rx="2"/>
                    <rect x="35" y="35" width="15" height="15" fill="currentColor" rx="2"/>
                    <rect x="60" y="35" width="15" height="15" fill="currentColor" rx="2"/>
                    <line x1="25" y1="17.5" x2="35" y2="17.5" stroke="currentColor" strokeWidth="2"/>
                    <line x1="50" y1="17.5" x2="60" y2="17.5" stroke="currentColor" strokeWidth="2"/>
                    <line x1="17.5" y1="25" x2="17.5" y2="35" stroke="currentColor" strokeWidth="2"/>
                    <line x1="42.5" y1="25" x2="42.5" y2="35" stroke="currentColor" strokeWidth="2"/>
                    <line x1="67.5" y1="25" x2="67.5" y2="35" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-voltly-charcoal mb-4">Post-Voltly</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Instant data extraction</li>
                <li>Unified dashboard</li>
                <li>Seconds to insights</li>
                <li>AI-powered accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
