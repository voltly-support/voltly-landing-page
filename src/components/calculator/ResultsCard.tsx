
import { Progress } from "@/components/ui/progress";
import { Bot, Keyboard } from "lucide-react";

interface ResultsCardProps {
  invoiceCount: number;
  formatTime: (seconds: number) => string;
}

const ResultsCard = ({ invoiceCount, formatTime }: ResultsCardProps) => {
  const manualPerInvoice = 15 * 60; // 15 minutes in seconds
  const aiPerInvoice = 30; // 30 seconds

  const manualTotal = manualPerInvoice * invoiceCount;
  const aiTotal = aiPerInvoice * invoiceCount;

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Manual Entry Card */}
      <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-2xl flex items-center justify-center">
            <Keyboard className="w-8 h-8 text-gray-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-700">Manual Entry</h3>
            <p className="text-gray-600">Traditional data entry process</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total Time:</span>
              <span className="text-3xl font-bold text-gray-700">{formatTime(manualTotal)}</span>
            </div>
            <Progress value={100} className="h-3 bg-gray-200" />
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Per-Invoice Rate:</span>
            <span className="font-semibold">15 min avg</span>
          </div>
        </div>
      </div>

      {/* Voltly AI Card */}
      <div className="bg-gradient-to-br from-voltly-mint/10 to-voltly-blue/10 rounded-3xl p-8 border-2 border-voltly-mint/30 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-voltly-mint/5 to-voltly-blue/5 animate-pulse" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-voltly-mint/20 rounded-2xl flex items-center justify-center border border-voltly-mint/30">
              <Bot className="w-8 h-8 text-voltly-mint" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-voltly-charcoal">Voltly AI</h3>
              <p className="text-voltly-blue">Automated intelligence</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-voltly-charcoal">Total Time:</span>
                <span className="text-3xl font-bold text-voltly-mint">{formatTime(aiTotal)}</span>
              </div>
              <Progress 
                value={(aiTotal / manualTotal) * 100} 
                className="h-3 bg-white/50"
              />
            </div>
            
            <div className="flex justify-between items-center text-sm text-voltly-blue">
              <span>Per-Invoice Rate:</span>
              <span className="font-semibold">30 s avg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
