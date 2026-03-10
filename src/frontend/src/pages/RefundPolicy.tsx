import React from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";

const LAST_UPDATED = "January 1, 2025";

const SECTIONS = [
  {
    title: "1. Overview",
    content:
      "At YMW Compliance Services LLP, we strive to deliver high-quality compliance services. We understand that circumstances may change, and we have established this Refund Policy to address such situations fairly and transparently.",
  },
  {
    title: "2. Eligibility for Refunds",
    content:
      "You may be eligible for a refund under the following circumstances:\n\n• Service not initiated within 7 working days of payment due to our fault\n• Duplicate payment made for the same service\n• Service cancelled before any work has commenced\n• Significant deviation from the agreed scope of service\n\nRefund requests must be submitted within 15 days of the payment date.",
  },
  {
    title: "3. Non-Refundable Items",
    content:
      "The following are strictly non-refundable:\n\n• Government fees, statutory fees, and filing charges paid to government authorities\n• Stamp duty and notarization charges\n• Services already completed or substantially in progress\n• Digital Signature Certificate (DSC) charges once issued\n• Services where work has been initiated and documents submitted to authorities\n• Consultation fees for advisory services already rendered",
  },
  {
    title: "4. Refund Request Process",
    content:
      'To request a refund, please follow these steps:\n\n1. Send an email to info@ymwcompliance.com with subject "Refund Request"\n2. Include your full name, contact number, service name, and payment details\n3. Provide the reason for the refund request\n4. Attach proof of payment (receipt or transaction ID)\n\nOur team will review your request within 3-5 working days and respond with a decision.',
  },
  {
    title: "5. Refund Timeline",
    content:
      "Once a refund is approved:\n\n• Bank Transfer / NEFT: 5-7 working days\n• UPI Payments: 3-5 working days\n• Credit/Debit Card: 7-10 working days (depending on your bank)\n\nRefunds will be processed to the original payment method used at the time of purchase.",
  },
  {
    title: "6. Partial Refunds",
    content:
      "In cases where work has been partially completed, we may offer a partial refund at our discretion. The refund amount will be calculated based on the work completed versus the total scope of service. Our team will communicate the partial refund amount clearly before processing.",
  },
  {
    title: "7. Cancellation Policy",
    content:
      "If you wish to cancel a service:\n\n• Cancellation before work commencement: Full refund of professional fees (government fees excluded)\n• Cancellation after work commencement: Partial refund based on work completed\n• Cancellation after service completion: No refund applicable\n\nTo cancel a service, please contact us immediately at +91 8102906339 or info@ymwcompliance.com.",
  },
  {
    title: "8. Contact Us",
    content:
      "For refund-related queries, please contact us:\n\nYMW Compliance Services LLP\nDhanbad, Jharkhand, India\nPhone: +91 8102906339\nEmail: info@ymwcompliance.com",
  },
];

export default function RefundPolicy() {
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
            Refund <span style={{ color: "#f5c518" }}>Policy</span>
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
              This Refund Policy outlines the terms and conditions under which
              YMW Compliance Services LLP processes refunds. Please read this
              policy carefully before availing our services.
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
