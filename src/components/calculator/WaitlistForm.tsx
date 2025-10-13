
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "🎉 Added to waitlist!",
        description: "You'll be first to know when Voltly AI launches.",
      });
      setEmail('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleWaitlistSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 text-lg rounded-2xl border-2 border-voltly-mint/30 focus:border-voltly-mint"
          required
        />
        <Button 
          type="submit"
          className="gradient-mint text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:shadow-lg hover:shadow-voltly-mint/25 transform hover:-translate-y-1 transition-all duration-300"
        >
          Join the Waitlist
        </Button>
      </form>
    </div>
  );
};

export default WaitlistForm;
