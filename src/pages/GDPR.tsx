import { ArrowLeft, Shield, Lock, Eye, FileText, Download, Trash2, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-voltly-gray">
      {/* Header */}
      <div className="bg-voltly-charcoal text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-voltly-mint hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-voltly-mint/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-voltly-mint" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">GDPR Compliance</h1>
              <p className="text-gray-300 mt-2">General Data Protection Regulation</p>
            </div>
          </div>
          <p className="text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Our Commitment to GDPR Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Voltly AI is committed to protecting the privacy and personal data of all individuals in the European Economic Area (EEA), United Kingdom, and Switzerland. We comply with the General Data Protection Regulation (GDPR) and have implemented comprehensive measures to ensure your data is processed lawfully, fairly, and transparently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This page explains how we meet GDPR requirements and outlines your rights under the regulation.
            </p>
          </section>

          {/* Your Rights Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-6">Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under GDPR, you have the following rights regarding your personal data:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Right to Access */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltly-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-voltly-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Access</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You have the right to request a copy of all personal data we hold about you. We will provide this information in a structured, commonly used, and machine-readable format.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right to Rectification */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltly-mint/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-voltly-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Rectification</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You can request correction of any inaccurate or incomplete personal data we hold about you. We will update your information promptly upon verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right to Erasure */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You can request deletion of your personal data when it's no longer necessary for the purposes for which it was collected, or if you withdraw consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right to Data Portability */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltly-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-voltly-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Data Portability</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You have the right to receive your personal data in a structured, commonly used format and transmit it to another controller.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right to Restrict Processing */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Restrict Processing</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You can request restriction of processing your personal data in certain circumstances, such as when you contest the accuracy of the data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right to Object */}
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-voltly-mint/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-voltly-mint" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-voltly-charcoal mb-2">Right to Object</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You have the right to object to processing of your personal data based on legitimate interests, direct marketing, or for research and statistical purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-voltly-blue/10 border-l-4 border-voltly-blue rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Right to Withdraw Consent:</strong> Where we process your data based on your consent, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing based on consent before its withdrawal.
              </p>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds under GDPR:
            </p>

            <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-2">1. Contractual Necessity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Processing is necessary for the performance of our contract with you (i.e., providing our utility bill intelligence services).
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-2">2. Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  You have given explicit consent for specific processing activities, such as marketing communications or optional features.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-2">3. Legitimate Interests</h3>
                <p className="text-gray-700 leading-relaxed">
                  Processing is necessary for our legitimate interests (e.g., improving our services, fraud prevention, security) where these interests are not overridden by your rights.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-2">4. Legal Obligation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Processing is necessary to comply with legal obligations to which we are subject (e.g., tax, accounting, regulatory requirements).
                </p>
              </div>
            </div>
          </section>

          {/* Data We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data We Collect and Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect and process the following categories of personal data:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-3">Identity and Contact Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Phone number (if provided)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-3">Utility Bill Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Utility account numbers</li>
                  <li>Consumption data and usage patterns</li>
                  <li>Billing information and costs</li>
                  <li>Meter readings and identifiers</li>
                  <li>Property addresses (associated with bills)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-3">Technical Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Usage data and analytics</li>
                  <li>Cookie data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-voltly-charcoal mb-3">Transaction Data</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Subscription details</li>
                  <li>Billing history</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Security Measures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement robust technical and organizational measures to protect your personal data:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">🔐 Encryption</h4>
                <p className="text-gray-700 text-sm">AES-256 encryption at rest, TLS/SSL in transit</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">🔒 Access Controls</h4>
                <p className="text-gray-700 text-sm">Role-based access, multi-factor authentication</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">🛡️ Regular Audits</h4>
                <p className="text-gray-700 text-sm">Security assessments and penetration testing</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">📋 SOC 2 Compliance</h4>
                <p className="text-gray-700 text-sm">Independently verified security controls</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">🔍 Data Minimization</h4>
                <p className="text-gray-700 text-sm">We only collect necessary data for our services</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-voltly-charcoal mb-2">⏱️ Retention Policies</h4>
                <p className="text-gray-700 text-sm">Automatic deletion after retention periods</p>
              </div>
            </div>
          </section>

          {/* Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When we transfer your personal data outside the EEA, we ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li><strong>Standard Contractual Clauses (SCCs):</strong> We use EU-approved SCCs with third-party service providers</li>
              <li><strong>Adequacy Decisions:</strong> We transfer data to countries recognized by the EU Commission as providing adequate protection</li>
              <li><strong>Data Processing Agreements:</strong> All processors are bound by GDPR-compliant agreements</li>
              <li><strong>Privacy Shield Alternative Mechanisms:</strong> We comply with current frameworks for US-EU data transfers</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary:
            </p>
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-[140px]">Active accounts:</span>
                  <span>Data retained while your account is active and for legitimate business purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-[140px]">Deleted accounts:</span>
                  <span>Personal data deleted within 30 days (unless legal retention required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-[140px]">Financial records:</span>
                  <span>Retained for 7 years as required by tax and accounting laws</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-[140px]">Marketing data:</span>
                  <span>Retained until you unsubscribe or withdraw consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold min-w-[140px]">Analytics data:</span>
                  <span>Anonymized and retained for service improvement</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Processors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Third-Party Data Processors</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with GDPR-compliant third-party processors to provide our services. All processors are carefully vetted and bound by Data Processing Agreements (DPAs). Categories of processors include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>Cloud infrastructure providers (hosting, storage)</li>
              <li>Payment processors (secure payment handling)</li>
              <li>Email service providers (transactional and marketing emails)</li>
              <li>Analytics and monitoring services</li>
              <li>Customer support platforms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All processors are required to implement appropriate technical and organizational measures to protect your data and comply with GDPR requirements.
            </p>
          </section>

          {/* Data Breach Response */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Breach Response</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-voltly-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-voltly-blue font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700 leading-relaxed">Notify the relevant supervisory authority within 72 hours of becoming aware of the breach</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-voltly-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-voltly-blue font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700 leading-relaxed">Notify affected individuals without undue delay if there is a high risk to their rights</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-voltly-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-voltly-blue font-bold text-sm">3</span>
                </div>
                <p className="text-gray-700 leading-relaxed">Provide clear information about the nature of the breach and recommended actions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-voltly-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-voltly-blue font-bold text-sm">4</span>
                </div>
                <p className="text-gray-700 leading-relaxed">Document the breach and our response in accordance with GDPR requirements</p>
              </div>
            </div>
          </section>

          {/* Exercising Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of your GDPR rights, you can:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-voltly-charcoal mb-3">📧 Email Us</h3>
                <p className="text-gray-700 mb-2">Send a request to:</p>
                <p className="text-voltly-blue font-semibold">privacy@voltly.ai</p>
                <p className="text-voltly-blue font-semibold">gdpr@voltly.ai</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-voltly-charcoal mb-3">⚙️ Account Settings</h3>
                <p className="text-gray-700 mb-2">Access, update, or delete your data directly through your account settings dashboard.</p>
              </div>
            </div>

            <div className="bg-voltly-mint/10 border-l-4 border-voltly-mint rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Response Time:</strong> We will respond to your request within one month. In complex cases, we may extend this by two additional months and will inform you of the extension.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Verification:</strong> To protect your privacy, we may ask you to verify your identity before fulfilling your request.
              </p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Right to Lodge a Complaint</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with a supervisory authority, particularly in:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              <li>The EU member state of your habitual residence</li>
              <li>Your place of work</li>
              <li>The place where the alleged infringement occurred</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to contact us first so we can address your concerns directly. However, you have the right to contact a supervisory authority at any time.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Data Protection Officer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any questions or concerns about how we process your personal data under GDPR, please contact our Data Protection Officer:
            </p>
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 mt-4">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> dpo@voltly.ai</p>
              <p className="text-gray-700 mb-2"><strong>GDPR Inquiries:</strong> gdpr@voltly.ai</p>
              <p className="text-gray-700 mb-2"><strong>Privacy:</strong> privacy@voltly.ai</p>
              <p className="text-gray-700"><strong>General Support:</strong> support@voltly.ai</p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-voltly-charcoal mb-4">Updates to This Page</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this GDPR compliance page from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes and update the "Last updated" date at the top of this page.
            </p>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-voltly-charcoal text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Your privacy is our priority</h3>
          <p className="text-gray-300 mb-6">
            We're committed to protecting your data and ensuring GDPR compliance at every step.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-voltly-mint to-voltly-blue text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-voltly-mint/25 transition-all duration-300 hover:-translate-y-1"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
