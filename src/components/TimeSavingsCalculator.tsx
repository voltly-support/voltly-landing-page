
import { useState } from "react";
import CalculatorInput from "./calculator/CalculatorInput";
import ResultsCard from "./calculator/ResultsCard";
import BenefitsGrid from "./calculator/BenefitsGrid";


const TimeSavingsCalculator = () => {
  const [invoiceCount, setInvoiceCount] = useState(100);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  const handleSliderChange = (value: number[]) => {
    setInvoiceCount(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setInvoiceCount(Math.min(Math.max(value, 1), 1000));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-voltly-gray via-white to-voltly-gray">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-voltly-charcoal mb-6">
            See How Much Time You'll Save with{" "}
            <span className="bg-gradient-to-r from-voltly-mint to-voltly-blue bg-clip-text text-transparent">
              Voltly.AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your invoice volume and see the dramatic time savings instantly
          </p>
        </div>

        <CalculatorInput
          invoiceCount={invoiceCount}
          onInputChange={handleInputChange}
          onSliderChange={handleSliderChange}
        />

        <ResultsCard
          invoiceCount={invoiceCount}
          formatTime={formatTime}
        />

        <BenefitsGrid />
      </div>
    </section>
  );
};

export default TimeSavingsCalculator;
