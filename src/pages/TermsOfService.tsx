import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SimpleNav from "@/components/SimpleNav";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-voltly-gray">
      <SimpleNav />

      {/* Header */}
      <div className="bg-voltly-charcoal text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Voltly AI ("Company," "we," "us," or "our") concerning your access to and use of the Voltly AI platform and services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using our services, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes, and your continued use of the services after such changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voltly AI provides an intelligent platform for utility bill management, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Automated data extraction from utility bills</li>
              <li>Data visualization and analytics</li>
              <li>Cost forecasting and predictions</li>
              <li>Variance alerts and notifications</li>
              <li>Report generation and export capabilities</li>
              <li>API access (for applicable plans)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">User Accounts</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of our services, you must create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Account Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 18 years of age to create an account and use our services. By creating an account, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Account Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of our services or platform</li>
              <li>Non-payment of fees</li>
              <li>Request by law enforcement or other government agencies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">User Content and Data</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Your Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain all ownership rights to the data and content you upload to our platform, including utility bills, documents, and related information ("Your Data"). By uploading Your Data, you grant us a limited, non-exclusive, royalty-free license to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Store, process, and analyze Your Data to provide our services</li>
              <li>Use Your Data to improve our algorithms and services (in aggregated, anonymized form)</li>
              <li>Display Your Data back to you through our platform</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Data Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>The accuracy and legality of Your Data</li>
              <li>Ensuring you have the right to upload and share Your Data</li>
              <li>Maintaining backups of Your Data</li>
              <li>Compliance with all applicable laws regarding Your Data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Prohibited Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to upload or transmit any content that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Violates any law or regulation</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains malware, viruses, or harmful code</li>
              <li>Is fraudulent, false, or misleading</li>
              <li>Violates the privacy or rights of others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Use the services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Use automated systems (bots, scrapers) without our written permission</li>
              <li>Reverse engineer, decompile, or disassemble our software</li>
              <li>Resell or redistribute our services without authorization</li>
              <li>Use the services to spam, phish, or engage in fraudulent activities</li>
              <li>Impersonate another person or entity</li>
              <li>Collect or harvest personal information of other users</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Pricing and Payment</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Subscription Plans</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer various subscription plans with different features and pricing. By subscribing to a paid plan, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Pay all fees associated with your chosen plan</li>
              <li>Provide accurate billing information</li>
              <li>Authorize automatic recurring charges (for subscription plans)</li>
              <li>Keep your payment method current and valid</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Billing and Renewals</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription fees are billed in advance on a recurring basis (monthly or annually, depending on your plan). Your subscription will automatically renew unless you cancel before the renewal date.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Price Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify our pricing at any time. We will provide you with at least 30 days' notice of any price changes. Your continued use of the services after the price change takes effect constitutes your acceptance of the new pricing.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are handled on a case-by-case basis. Generally, we do not provide refunds for partial subscription periods. Contact our support team to discuss refund requests.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Voltly AI platform, including all software, algorithms, designs, graphics, text, and other content (excluding Your Data), is owned by or licensed to us and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for their intended purpose. This license does not include the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Copy, modify, or create derivative works of our platform</li>
              <li>Sell, rent, lease, or sublicense access to our services</li>
              <li>Use our trademarks, logos, or branding without permission</li>
              <li>Remove any proprietary notices from our platform</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">API Usage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have access to our API, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Comply with our API documentation and usage guidelines</li>
              <li>Respect rate limits and usage quotas</li>
              <li>Not abuse or overload our API infrastructure</li>
              <li>Properly attribute data obtained through our API</li>
              <li>Keep your API keys secure and confidential</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to revoke API access at any time for violations of these Terms or abuse of the API.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Disclaimers and Limitations</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide reliable, uninterrupted service, but we do not guarantee that our services will be available at all times. Services may be temporarily unavailable due to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Scheduled or emergency maintenance</li>
              <li>Technical issues or system failures</li>
              <li>Third-party service provider outages</li>
              <li>Force majeure events</li>
            </ul>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Accuracy of Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we use advanced AI and data processing technologies, we do not guarantee the accuracy, completeness, or reliability of:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Data extracted from utility bills</li>
              <li>Forecasts and predictions</li>
              <li>Analytics and insights</li>
              <li>Automated alerts and notifications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for verifying all data and using your own judgment when making business decisions based on our services.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">No Financial Advice</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services provide information and tools for utility bill management but do not constitute financial, legal, or professional advice. You should consult with qualified professionals before making financial decisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VOLTLY AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN AN ACTION IN CONTRACT, TORT, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Your use or inability to use our services</li>
              <li>Any errors, inaccuracies, or omissions in our services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Loss of data or business interruption</li>
              <li>Any third-party content or services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Voltly AI, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Your use or misuse of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law or regulation</li>
              <li>Your Data or content you upload</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services may integrate with or contain links to third-party services, applications, or websites. We do not control, endorse, or assume responsibility for any third-party services. Your use of third-party services is governed by their respective terms and privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Dispute Resolution</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any dispute with us, you agree to first contact us and attempt to resolve the dispute informally by contacting our support team at support@voltly.ai.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Arbitration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization]. The arbitration shall take place in [Location], and the decision of the arbitrator shall be final and binding.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate your account at any time by contacting our support team or through your account settings. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Your right to access and use the services will immediately cease</li>
              <li>We will delete Your Data in accordance with our Privacy Policy</li>
              <li>You will remain responsible for any outstanding fees</li>
              <li>Provisions that by their nature should survive termination will remain in effect</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">General Provisions</h2>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Voltly AI regarding the use of our services.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Assignment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-2xl font-semibold text-voltly-charcoal mb-3 mt-6">Notices</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may provide notices to you via email, in-app notifications, or by posting on our website. You agree that electronic notices satisfy any legal requirement for written notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 mt-4">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@voltly.ai</p>
              <p className="text-gray-700 mb-2"><strong>Support:</strong> support@voltly.ai</p>
              <p className="text-gray-700"><strong>Website:</strong> www.voltly.ai</p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-voltly-blue/10 border-l-4 border-voltly-blue rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Acknowledgment:</strong> By using Voltly AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, you must not access or use our services.
              </p>
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

export default TermsOfService;
