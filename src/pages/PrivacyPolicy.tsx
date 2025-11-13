import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SimpleNav from "@/components/SimpleNav";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-voltly-gray">
      <SimpleNav />

      {/* Header */}
      <div className="bg-voltly-charcoal text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Voltly AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our utility bill intelligence platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Information We Collect</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Register for an account</li>
              <li>Express interest in our services through our waitlist</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include: name, email address, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Utility Bill Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our services, you may upload utility bills and related documents. We collect and process:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Utility bill documents and images</li>
              <li>Usage data and consumption patterns</li>
              <li>Account numbers and meter information</li>
              <li>Cost and billing information</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you visit, use, or navigate our platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Log and usage data (IP address, browser type, operating system)</li>
              <li>Device information</li>
              <li>Location data (general geographic location)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Process and analyze your utility bills</li>
              <li>Generate insights, forecasts, and automated alerts</li>
              <li>Improve and personalize your experience</li>
              <li>Communicate with you about updates, features, and support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement enterprise-grade security measures to protect your personal information and utility data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
              <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
              <li><strong>Compliance:</strong> GDPR and SOC 2 compliant infrastructure</li>
              <li><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
              <li><strong>Data Isolation:</strong> Your data is isolated and protected from other users</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (cloud hosting, analytics, customer support)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information and utility data only for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              When you delete your account, we will delete or anonymize your personal data within 30 days, unless we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on it</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us at privacy@voltly.ai
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">GDPR Compliance (EU Users)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), we process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Performance of a contract with you</li>
              <li>Your consent</li>
              <li>Our legitimate business interests</li>
              <li>Compliance with legal obligations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Types of cookies we use:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the platform to function</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Posting the new privacy policy on this page</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending you an email notification (for material changes)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of our services after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 mt-4">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@voltly.ai</p>
              <p className="text-gray-700 mb-2"><strong>Support:</strong> support@voltly.ai</p>
              <p className="text-gray-700"><strong>Website:</strong> www.voltly.ai</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-voltly-charcoal text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-gray-300 mb-6">
            Join our waitlist and be the first to experience intelligent utility bill management.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-voltly-mint to-voltly-blue text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-voltly-mint/25 transition-all duration-300 hover:-translate-y-1"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
