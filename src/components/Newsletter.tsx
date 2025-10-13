
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-24 bg-voltly-gray">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-voltly-charcoal mb-6">
          Stay ahead of the curve
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join our newsletter for billing best practices, industry insights, and product updates.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-lg border-gray-300 rounded-lg focus:ring-2 focus:ring-voltly-mint focus:border-transparent"
            />
            <Button 
              className="gradient-mint text-white px-8 py-3 text-lg font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
