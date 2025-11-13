import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SimpleNav from "@/components/SimpleNav";

const About = () => {
  const teamMembers = [
    {
      role: "CEO",
      name: "Adrian Bond",
      title: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years of experience in energy technology and AI innovation. Passionate about transforming utility management through intelligent automation.",
      image: "/placeholder-ceo.jpg",
      linkedin: "#",
      email: "ceo@voltly.ai"
    },
    {
      role: "CTO",
      name: "Alan Bond",
      title: "Chief Technology Officer",
      bio: "Technology expert specializing in AI/ML systems and cloud infrastructure. Leading our technical vision to build cutting-edge utility intelligence solutions.",
      image: "/placeholder-cto.jpg",
      linkedin: "#",
      email: "cto@voltly.ai"
    },
    {
      role: "CIO",
      name: "Collin Partee",
      title: "Chief Innovation Officer",
      bio: "Information systems strategist focused on data security, compliance, and enterprise architecture. Ensuring our platform meets the highest standards of reliability and security.",
      image: "/placeholder-cio.jpg",
      linkedin: "#",
      email: "cio@voltly.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-voltly-gray">
      <SimpleNav />

      {/* Header */}
      <div className="bg-voltly-charcoal text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Voltly AI</h1>
          <p className="text-gray-300 mt-4 text-lg">
            Transforming utility bill management with intelligent automation
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-voltly-charcoal mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At Voltly AI, we're on a mission to revolutionize how businesses manage their utility bills.
            By combining advanced AI technology with deep industry expertise, we're eliminating the manual
            burden of bill processing and empowering organizations to make smarter, data-driven decisions
            about their energy consumption.
          </p>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-voltly-charcoal mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where every organization has complete visibility and control over
              their utility costs, enabling them to operate more efficiently and sustainably while
              reducing operational overhead.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-voltly-charcoal mb-4">Our Values</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-voltly-mint mt-1">•</span>
                <span><strong>Innovation:</strong> Pushing the boundaries of AI technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-voltly-mint mt-1">•</span>
                <span><strong>Transparency:</strong> Building trust through clarity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-voltly-mint mt-1">•</span>
                <span><strong>Excellence:</strong> Delivering exceptional results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-voltly-mint mt-1">•</span>
                <span><strong>Security:</strong> Protecting your data above all</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-voltly-charcoal text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.role}
                className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder Image */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-voltly-mint to-voltly-blue flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {member.role}
                  </span>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-voltly-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-voltly-blue font-semibold mb-4">
                    {member.title}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>

                {/* Contact Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-full bg-voltly-charcoal hover:bg-voltly-blue text-white transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-voltly-charcoal hover:bg-voltly-mint text-white transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-voltly-mint to-voltly-blue rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">80%</div>
              <div className="text-lg opacity-90">Time Saved</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-voltly-charcoal text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Us on Our Journey</h3>
          <p className="text-gray-300 mb-6">
            Be part of the future of utility bill management. Join our waitlist today.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-voltly-mint to-voltly-blue text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-voltly-mint/25 transition-all duration-300 hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
