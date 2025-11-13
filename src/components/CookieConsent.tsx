import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Here you would typically initialize analytics/tracking scripts
    console.log("Cookies accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    // Here you would ensure only essential cookies are used
    console.log("Cookies declined");
  };

  const handleClose = () => {
    // Closing without choosing is treated as declined
    handleDecline();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in" />

      {/* Cookie Consent Popup */}
      <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50 animate-slide-up">
        <div className="bg-white/95 backdrop-blur-lg border-2 border-voltly-mint/30 rounded-t-3xl md:rounded-3xl shadow-2xl p-6 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close cookie consent"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-voltly-mint/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-voltly-mint" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-voltly-charcoal mb-2">
                We value your privacy
              </h3>
            </div>
          </div>

          {/* Content */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
            By clicking "Accept All", you consent to our use of cookies.
          </p>

          <p className="text-gray-600 text-xs mb-6">
            Read our{" "}
            <Link to="/privacy" className="text-voltly-blue hover:text-voltly-mint underline">
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link to="/gdpr" className="text-voltly-blue hover:text-voltly-mint underline">
              GDPR Compliance
            </Link>
            {" "}for more information.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 gradient-mint text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-voltly-mint/25 transition-all duration-300"
            >
              Accept All
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              Decline
            </Button>
          </div>

          {/* Essential Cookies Notice */}
          <p className="text-gray-500 text-xs mt-4 text-center">
            Essential cookies are always enabled to ensure the site functions properly.
          </p>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
