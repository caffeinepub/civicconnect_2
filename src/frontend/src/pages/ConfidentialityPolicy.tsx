import React from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";

const LAST_UPDATED = "January 1, 2025";

const SECTIONS = [
  {
    title: "1. Our Commitment to Confidentiality",
    content:
      "YMW Compliance Services LLP is committed to maintaining the highest standards of confidentiality for all client information. We understand that the documents and information you share with us are sensitive and critical to your business. We treat all client information with the utmost discretion and professionalism.",
  },
  {
    title: "2. Scope of Confidential Information",
    content:
      "The following categories of information are treated as strictly confidential:\n\n• Personal identification documents (PAN, Aadhaar, Passport, etc.)\n• Business financial statements and tax records\n• Company incorporation documents and agreements\n• Bank account details and financial information\n• Business strategies, plans, and trade secrets\n• Client lists and business relationships\n• Any other information marked as confidential or that a reasonable person would consider confidential",
  },
  {
    title: "3. How We Protect Your Information",
    content:
      "We implement the following measures to protect your confidential information:\n\n• Secure document storage with restricted access\n• Encrypted digital transmission of sensitive documents\n• Access controls limiting information to authorized personnel only\n• Regular security audits and compliance checks\n• Secure deletion of documents after the retention period\n• Non-disclosure agreements with all staff and associates",
  },
  {
    title: "4. Employee Confidentiality Obligations",
    content:
      "All employees, consultants, and associates of YMW Compliance Services LLP are bound by strict confidentiality obligations. They are required to:\n\n• Sign confidentiality and non-disclosure agreements\n• Access client information only on a need-to-know basis\n• Not discuss client matters outside of professional contexts\n• Report any suspected breach of confidentiality immediately\n• Maintain confidentiality obligations even after their engagement with us ends",
  },
  {
    title: "5. Exceptions to Confidentiality",
    content:
      "We may be required to disclose confidential information in the following limited circumstances:\n\n• When required by law, court order, or regulatory authority\n• When disclosure is necessary to prevent fraud or illegal activity\n• When you have given explicit written consent for disclosure\n• When information is already in the public domain through no fault of ours\n• When required by government authorities for service delivery on your behalf\n\nIn all such cases, we will notify you to the extent permitted by law.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain client documents and information for the period required by applicable laws and regulations, typically:\n\n• Company registration documents: 8 years after service completion\n• Tax-related documents: 7 years as per Income Tax Act requirements\n• General correspondence: 3 years\n• Consultation records: 2 years\n\nAfter the retention period, documents are securely destroyed or deleted.",
  },
  {
    title: "7. Breach Notification",
    content:
      "In the unlikely event of a data breach that may affect your confidential information, we will:\n\n• Notify you within 72 hours of becoming aware of the breach\n• Provide details of the nature and extent of the breach\n• Outline the steps we are taking to address the breach\n• Advise on any protective measures you should take",
  },
  {
    title: "8. Contact Us",
    content:
      "For any questions or concerns regarding our Confidentiality Policy, please contact us:\n\nYMW Compliance Services LLP\nDhanbad, Jharkhand, India\nPhone: +91 8102906339\nEmail: ymwcompliances@gmail.com",
  },
];

export default function ConfidentialityPolicy() {
  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518",
            }}
          >
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Confidentiality <span style={{ color: "#f5c518" }}>Policy</span>
          </h1>
          <p className="text-base text-gray-400">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 mb-8"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-gray-300 leading-relaxed">
              At YMW Compliance Services LLP, we recognize that client trust is
              the foundation of our business. This Confidentiality Policy
              describes how we safeguard the sensitive information entrusted to
              us by our clients.
            </p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: "#f5c518" }}
                >
                  {section.title}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FreeConsultationSection />
    </div>
  );
}
