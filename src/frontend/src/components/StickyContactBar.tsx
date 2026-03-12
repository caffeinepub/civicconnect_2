import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+91", label: "+91" },
  { code: "+1", label: "+1" },
  { code: "+44", label: "+44" },
  { code: "+971", label: "+971" },
  { code: "+61", label: "+61" },
  { code: "+65", label: "+65" },
  { code: "+60", label: "+60" },
  { code: "+880", label: "+880" },
  { code: "+92", label: "+92" },
  { code: "+977", label: "+977" },
];

function setOpacity(el: HTMLElement, value: string) {
  el.style.opacity = value;
}

export default function StickyContactBar() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;
    const message = encodeURIComponent(
      `Hi, I need a callback.\nName: ${name}\nMobile: ${countryCode} ${mobile}`,
    );
    window.open(`https://wa.me/918102906339?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setMobile("");
    }, 3000);
  };

  const whatsappUrl = `https://wa.me/918102906339?text=${encodeURIComponent("Hi, I need expert consultation.")}`;

  return (
    <>
      <div
        data-ocid="sticky_bar.section"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 9999,
          backgroundColor: "#FFC107",
          boxShadow: "0 -2px 12px rgba(0,0,0,0.18)",
          height: 70,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
            height: "100%",
          }}
        >
          {/* Left: Call info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              minWidth: 200,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#1a2e5a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={18} color="#FFC107" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#1a2e5a",
                  lineHeight: 1.2,
                  fontFamily: "Poppins, Inter, sans-serif",
                }}
              >
                Call Now – Expert Consultation
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#3a4d6e",
                  fontWeight: 500,
                  fontFamily: "Poppins, Inter, sans-serif",
                  marginTop: 2,
                }}
              >
                Response within minutes — No charges
              </div>
            </div>
          </div>

          {/* Right: Form + WhatsApp */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  backgroundColor: "#1a2e5a",
                  color: "#FFC107",
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: "Poppins, Inter, sans-serif",
                }}
              >
                ✓ We'll call you shortly!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="sticky_bar.submit_button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {/* Name input */}
                <input
                  data-ocid="sticky_bar.input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    height: 38,
                    padding: "0 12px",
                    borderRadius: 8,
                    border: "1.5px solid rgba(26,46,90,0.3)",
                    backgroundColor: "#fffde7",
                    fontSize: 13,
                    fontFamily: "Poppins, Inter, sans-serif",
                    color: "#1a2e5a",
                    outline: "none",
                    width: 130,
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.07)",
                  }}
                />

                {/* Country code + mobile combined */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 8,
                    border: "1.5px solid rgba(26,46,90,0.3)",
                    backgroundColor: "#fffde7",
                    overflow: "hidden",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.07)",
                    height: 38,
                  }}
                >
                  <select
                    data-ocid="sticky_bar.select"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      height: "100%",
                      padding: "0 4px 0 8px",
                      border: "none",
                      borderRight: "1.5px solid rgba(26,46,90,0.2)",
                      backgroundColor: "transparent",
                      fontSize: 12,
                      fontFamily: "Poppins, Inter, sans-serif",
                      color: "#1a2e5a",
                      fontWeight: 600,
                      outline: "none",
                      cursor: "pointer",
                      minWidth: 56,
                    }}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    data-ocid="sticky_bar.input"
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    required
                    maxLength={12}
                    style={{
                      height: "100%",
                      padding: "0 10px",
                      border: "none",
                      backgroundColor: "transparent",
                      fontSize: 13,
                      fontFamily: "Poppins, Inter, sans-serif",
                      color: "#1a2e5a",
                      outline: "none",
                      width: 130,
                    }}
                  />
                </div>

                {/* Call Me Free button */}
                <button
                  type="submit"
                  data-ocid="sticky_bar.primary_button"
                  onMouseEnter={(e) => setOpacity(e.currentTarget, "0.88")}
                  onMouseLeave={(e) => setOpacity(e.currentTarget, "1")}
                  style={{
                    height: 38,
                    padding: "0 18px",
                    borderRadius: 8,
                    backgroundColor: "#1a2e5a",
                    color: "#FFC107",
                    fontWeight: 800,
                    fontSize: 13,
                    fontFamily: "Poppins, Inter, sans-serif",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 8px rgba(26,46,90,0.25)",
                    transition: "opacity 0.15s",
                  }}
                >
                  Call Me Free
                </button>
              </form>
            )}

            {/* WhatsApp / Chat with Us button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="sticky_bar.button"
              onMouseEnter={(e) => setOpacity(e.currentTarget, "0.88")}
              onMouseLeave={(e) => setOpacity(e.currentTarget, "1")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                height: 38,
                padding: "0 16px",
                borderRadius: 20,
                backgroundColor: "#25D366",
                color: "#fff",
                fontWeight: 800,
                fontSize: 13,
                fontFamily: "Poppins, Inter, sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
                transition: "opacity 0.15s",
                flexShrink: 0,
              }}
            >
              <MessageCircle size={16} />
              Chat with Us
            </a>
          </div>
        </div>

        {/* Responsive styles */}
        <style>{`
          @media (max-width: 768px) {
            [data-ocid="sticky_bar.section"] {
              height: auto !important;
              min-height: 70px !important;
              padding: 8px 0 !important;
            }
            [data-ocid="sticky_bar.section"] > div {
              flex-direction: column !important;
              padding: 8px 12px !important;
              gap: 6px !important;
              justify-content: center !important;
              height: auto !important;
            }
            [data-ocid="sticky_bar.section"] > div > div:first-child {
              justify-content: center;
              min-width: unset !important;
            }
            [data-ocid="sticky_bar.section"] > div > div:last-child {
              justify-content: center !important;
              width: 100%;
            }
          }
          @media (max-width: 480px) {
            [data-ocid="sticky_bar.section"] form {
              flex-direction: column !important;
              align-items: stretch !important;
              width: 100% !important;
            }
            [data-ocid="sticky_bar.section"] form input,
            [data-ocid="sticky_bar.section"] form button {
              width: 100% !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
