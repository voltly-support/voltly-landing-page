
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface CalculatorInputProps {
  invoiceCount: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSliderChange: (value: number[]) => void;
}

const CalculatorInput = ({ invoiceCount, onInputChange, onSliderChange }: CalculatorInputProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
        <div className="space-y-6">
          <div>
            <label className="block text-voltly-charcoal font-semibold text-lg mb-4">
              Number of Invoices to Process
            </label>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={invoiceCount}
                onChange={onInputChange}
                min="1"
                max="1000"
                className="w-32 text-center text-lg font-semibold border-2 border-voltly-mint/30 focus:border-voltly-mint"
              />
              <div className="flex-1">
                <Slider
                  value={[invoiceCount]}
                  onValueChange={onSliderChange}
                  max={1000}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Drag the slider or enter a number (1-1,000 invoices)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorInput;
