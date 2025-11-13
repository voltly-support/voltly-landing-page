import { Link } from "react-router-dom";

const SimpleNav = () => {
  return (
    // <nav className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 border-b border-gray-300 py-5">
    <nav className="relative bg-voltly-charcoal py-5">
      {/* Animated overlay matching Hero */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-voltly-mint/10 via-transparent to-voltly-blue/10" /> */}
      <div className="" />

      <div className="max-w-7xl mx-auto px-6 flex justify-center relative z-10">
        <Link to="/" className="inline-block group">
          <img
            src="/lovable-uploads/ad70b136-23cb-429b-b095-2fa01f8f8ff4.png"
            alt="Voltly AI Logo"
            className="h-24 filter brightness-0 invert hover:scale-105 transition-all duration-300 group-hover:drop-shadow-lg"
          />
        </Link>
      </div>
    </nav>
  );
};

export default SimpleNav;
