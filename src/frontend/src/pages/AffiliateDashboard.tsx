import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart3,
  CheckCircle,
  ChevronDown,
  ClipboardCopy,
  CreditCard,
  Home,
  Link2,
  LogOut,
  Settings,
  ShieldCheck,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NAVY = "#0f172a";
const GOLD = "#FFC107";

type Tab =
  | "overview"
  | "links"
  | "leads"
  | "wallet"
  | "withdraw"
  | "settings"
  | "admin";

const REFERRAL_CATEGORIES = [
  {
    category: "Business Registration",
    services: [
      { name: "Private Limited Company Registration", slug: "private-limited" },
      { name: "LLP Registration", slug: "llp" },
      { name: "One Person Company", slug: "opc" },
      { name: "Partnership Firm Registration", slug: "partnership-firm" },
    ],
  },
  {
    category: "Tax & GST",
    services: [
      { name: "GST Registration", slug: "gst-registration" },
      { name: "ITR Filing", slug: "itr-filing" },
      { name: "TDS Return Filing", slug: "tds-return" },
      { name: "GST LUT for Export", slug: "gst-lut" },
    ],
  },
  {
    category: "Government Licenses",
    services: [
      { name: "Trade License", slug: "trade-license" },
      { name: "PSARA License", slug: "psara-license" },
      { name: "PESO License", slug: "peso-license" },
      { name: "AYUSH License", slug: "ayush-license" },
      { name: "Mining License", slug: "mining-license" },
    ],
  },
  {
    category: "Government Registrations",
    services: [
      { name: "Import Export Code", slug: "iec" },
      { name: "ICEGATE Registration", slug: "icegate" },
      { name: "MSME Registration", slug: "msme" },
      { name: "RERA Registration", slug: "rera" },
      { name: "Fire NOC", slug: "fire-noc" },
      { name: "APEDA Registration", slug: "apeda" },
      { name: "BIS Certification", slug: "bis-certification" },
    ],
  },
  {
    category: "ISO Certifications",
    services: [
      { name: "ISO 9001", slug: "iso-9001" },
      { name: "ISO 14001", slug: "iso-14001" },
      { name: "ISO 22000", slug: "iso-22000" },
      { name: "ISO 45001", slug: "iso-45001" },
      { name: "ISO 27001", slug: "iso-27001" },
    ],
  },
  {
    category: "Pollution Control",
    services: [
      { name: "CTE / CTO Certificate", slug: "cte-cto" },
      { name: "EPR Registration", slug: "epr-registration" },
      { name: "Hazardous Waste Management", slug: "hazardous-waste" },
      { name: "Plastic Waste Authorization", slug: "plastic-waste" },
      { name: "Scrap Import Pollution NOC", slug: "scrap-import" },
    ],
  },
  {
    category: "Food Licenses",
    services: [
      { name: "FSSAI Registration", slug: "fssai-registration" },
      { name: "FSSAI State License", slug: "fssai-state" },
      { name: "FSSAI Central License", slug: "fssai-central" },
    ],
  },
  {
    category: "Trademark & IP",
    services: [
      { name: "Trademark Registration", slug: "trademark" },
      { name: "Copyright Registration", slug: "copyright" },
      { name: "Patent Registration", slug: "patent" },
      { name: "Design Registration", slug: "design-registration" },
    ],
  },
  {
    category: "Tender Services",
    services: [
      { name: "GeM Registration", slug: "gem-registration" },
      { name: "Vendor Assessment", slug: "vendor-assessment" },
      { name: "IREPS Registration", slug: "ireps" },
      { name: "Tender Submission Service", slug: "tender-submission" },
    ],
  },
];

const MOCK_LEADS = [
  {
    client: "Rajesh Kumar Singh",
    service: "GST Registration",
    date: "2026-02-12",
    status: "Completed",
    commission: "₹4,500",
  },
  {
    client: "Priya Sharma",
    service: "Private Limited Company",
    date: "2026-02-20",
    status: "In Process",
    commission: "₹8,000",
  },
  {
    client: "Mukesh Agarwal",
    service: "ISO 9001 Certification",
    date: "2026-03-01",
    status: "Completed",
    commission: "₹6,000",
  },
  {
    client: "Sunita Devi",
    service: "FSSAI State License",
    date: "2026-03-05",
    status: "Pending",
    commission: "₹2,500",
  },
  {
    client: "Arjun Mehta",
    service: "EPR Registration",
    date: "2026-03-10",
    status: "In Process",
    commission: "₹5,000",
  },
];

const MOCK_TRANSACTIONS = [
  {
    date: "2026-01-31",
    desc: "Monthly Payout - January 2026",
    amount: "₹18,000",
    type: "credit",
  },
  {
    date: "2026-02-28",
    desc: "Monthly Payout - February 2026",
    amount: "₹24,000",
    type: "credit",
  },
  {
    date: "2026-03-01",
    desc: "Withdrawal to Bank Account",
    amount: "₹12,000",
    type: "debit",
  },
];

const MOCK_PENDING_AFFILIATES = [
  {
    name: "Deepak Verma",
    email: "deepak.v@gmail.com",
    city: "Ranchi",
    type: "Consultant",
  },
  {
    name: "Kavita Singh",
    email: "kavita.s@gmail.com",
    city: "Patna",
    type: "CA / CS",
  },
  {
    name: "Ravi Pandey",
    email: "ravi.p@gmail.com",
    city: "Kolkata",
    type: "Freelancer",
  },
];

const MOCK_ALL_LEADS = [
  {
    affiliate: "Suresh Kumar",
    client: "Amit Jha",
    service: "GST Registration",
    date: "2026-02-10",
    status: "Completed",
  },
  {
    affiliate: "Kavita Singh",
    client: "Nita Gupta",
    service: "MSME Registration",
    date: "2026-02-15",
    status: "In Process",
  },
  {
    affiliate: "Deepak Verma",
    client: "Ramesh Yadav",
    service: "Trade License",
    date: "2026-02-22",
    status: "Pending",
  },
  {
    affiliate: "Suresh Kumar",
    client: "Lata Mishra",
    service: "ISO 9001",
    date: "2026-03-02",
    status: "Completed",
  },
  {
    affiliate: "Ravi Pandey",
    client: "Sanjay Tiwari",
    service: "EPR Registration",
    date: "2026-03-08",
    status: "In Process",
  },
];

const MOCK_TOP_PERFORMERS = [
  {
    name: "Suresh Kumar",
    email: "suresh.k@gmail.com",
    referrals: 12,
    commission: "₹36,000",
  },
  {
    name: "Kavita Singh",
    email: "kavita.s@gmail.com",
    referrals: 8,
    commission: "₹24,000",
  },
  {
    name: "Ravi Pandey",
    email: "ravi.p@gmail.com",
    referrals: 5,
    commission: "₹15,000",
  },
];

const OVERVIEW_CARDS = [
  { label: "Total Referrals", value: "24" },
  { label: "Approved Leads", value: "18" },
  { label: "Commission Earned", value: "₹54,000" },
  { label: "Pending Commission", value: "₹12,000" },
];

const WALLET_CARDS = [
  { label: "Total Earnings", value: "₹54,000", bg: NAVY, textColor: GOLD },
  { label: "Paid", value: "₹42,000", bg: "#16a34a", textColor: "#fff" },
  { label: "Pending", value: "₹12,000", bg: "#d97706", textColor: "#fff" },
];

const BANK_FIELDS = [
  {
    id: "holder",
    label: "Account Holder Name",
    placeholder: "Full name as per bank",
  },
  {
    id: "account",
    label: "Account Number",
    placeholder: "Bank account number",
  },
  { id: "ifsc", label: "IFSC Code", placeholder: "e.g. SBIN0001234" },
  { id: "bank", label: "Bank Name", placeholder: "e.g. State Bank of India" },
];

const SETTINGS_FIELDS = [
  { id: "name", label: "Full Name", placeholder: "Your full name" },
  { id: "phone", label: "Phone Number", placeholder: "10-digit mobile number" },
  { id: "upi", label: "UPI ID", placeholder: "yourname@upi" },
  {
    id: "bankAccount",
    label: "Bank Account Number",
    placeholder: "Account number",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    Pending: { bg: "#FFF3CD", color: "#856404" },
    "In Process": { bg: "#CFE2FF", color: "#084298" },
    Completed: { bg: "#D1E7DD", color: "#0A3622" },
    Approved: { bg: "#D1E7DD", color: "#0A3622" },
    Rejected: { bg: "#F8D7DA", color: "#842029" },
  };
  const s = styles[status] ?? styles.Pending;
  return (
    <span
      className="px-2 py-1 rounded-full text-xs font-semibold"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {status}
    </span>
  );
}

function OverviewIcon({ label }: { label: string }) {
  const iconStyle = { color: GOLD };
  if (label === "Total Referrals") return <Users size={20} style={iconStyle} />;
  if (label === "Approved Leads")
    return <CheckCircle size={20} style={iconStyle} />;
  if (label === "Commission Earned")
    return <BarChart3 size={20} style={iconStyle} />;
  return <Wallet size={20} style={iconStyle} />;
}

export default function AffiliateDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const storedEmail =
    typeof window !== "undefined"
      ? localStorage.getItem("affiliateEmail")
      : null;
  const storedRole =
    typeof window !== "undefined"
      ? localStorage.getItem("affiliateRole")
      : null;
  const storedName =
    typeof window !== "undefined"
      ? localStorage.getItem("affiliateName")
      : null;

  const [loggedIn, setLoggedIn] = useState(!!storedEmail);
  const [role, setRole] = useState<string>(storedRole ?? "affiliate");
  const [name, setName] = useState<string>(storedName ?? "");
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [payMethod, setPayMethod] = useState<"bank" | "upi">("bank");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [bankForm, setBankForm] = useState({
    holder: "",
    account: "",
    ifsc: "",
    bank: "",
  });
  const [upiId, setUpiId] = useState("");
  const [settingsForm, setSettingsForm] = useState({
    name: storedName ?? "Suresh Kumar",
    phone: "9876543210",
    upi: "suresh@upi",
    bankAccount: "XXXX-XXXX-1234",
  });
  const [pendingAffiliates, setPendingAffiliates] = useState(
    MOCK_PENDING_AFFILIATES.map((a) => ({ ...a, status: "Pending" })),
  );
  const [allLeadStatuses, setAllLeadStatuses] = useState(
    MOCK_ALL_LEADS.map((l) => l.status),
  );
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});

  const affiliateId = "AFF-00123";

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === "ymw123") {
      const isAdmin = email === "admin@ymw.com";
      const newRole = isAdmin ? "admin" : "affiliate";
      const newName = isAdmin ? "Admin" : email.split("@")[0];
      localStorage.setItem("affiliateEmail", email);
      localStorage.setItem("affiliateRole", newRole);
      localStorage.setItem("affiliateName", newName);
      setLoggedIn(true);
      setRole(newRole);
      setName(newName);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Try password: ymw123");
    }
  }

  function handleLogout() {
    localStorage.removeItem("affiliateEmail");
    localStorage.removeItem("affiliateRole");
    localStorage.removeItem("affiliateName");
    setLoggedIn(false);
    setRole("affiliate");
    setName("");
    setActiveTab("overview");
  }

  function copyLink(slug: string) {
    const url = `https://ymwcompliance.com/${slug}?ref=${affiliateId}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Copied!", { description: url, duration: 2000 });
    });
  }

  if (!loggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#dbeafe" }}
      >
        <div
          className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: `2px solid ${GOLD}` }}
        >
          <div className="px-8 py-6" style={{ backgroundColor: NAVY }}>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Secure Login", "Partner Portal", "YMW Affiliate"].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${GOLD}33`,
                    color: GOLD,
                    border: `1px solid ${GOLD}55`,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <h1
              className="text-2xl font-extrabold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Affiliate Partner Login
            </h1>
            <p className="text-gray-400 text-sm">
              Sign in to access your partner dashboard.
            </p>
          </div>
          <div className="px-8 py-8 bg-white">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label
                  className="text-xs font-semibold"
                  style={{ color: NAVY }}
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-ocid="affiliate-dashboard.login.input"
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  className="text-xs font-semibold"
                  style={{ color: NAVY }}
                >
                  Password
                </Label>
                <Input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-ocid="affiliate-dashboard.login.input"
                  className="mt-1"
                />
              </div>
              {loginError && (
                <p
                  data-ocid="affiliate-dashboard.login.error_state"
                  className="text-sm text-red-600 font-medium"
                >
                  {loginError}
                </p>
              )}
              <button
                type="submit"
                data-ocid="affiliate-dashboard.login.submit_button"
                className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90"
                style={{ backgroundColor: GOLD, color: NAVY }}
              >
                Login to Dashboard
              </button>
              <p className="text-center text-xs text-gray-400">
                Demo: any email + password <strong>ymw123</strong> | Admin:{" "}
                <strong>admin@ymw.com</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Home size={18} /> },
    { id: "links", label: "Referral Links", icon: <Link2 size={18} /> },
    { id: "leads", label: "My Leads", icon: <Users size={18} /> },
    { id: "wallet", label: "Commission Wallet", icon: <Wallet size={18} /> },
    { id: "withdraw", label: "Withdraw", icon: <CreditCard size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
    ...(role === "admin"
      ? [
          {
            id: "admin" as Tab,
            label: "Admin Controls",
            icon: <ShieldCheck size={18} />,
          },
        ]
      : []),
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#f1f5f9" }}>
      {/* Sidebar */}
      <aside
        className="hidden md:flex flex-col"
        style={{
          width: 240,
          minWidth: 240,
          backgroundColor: NAVY,
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          alignSelf: "flex-start",
        }}
      >
        <div className="px-6 py-6 border-b border-white/10">
          <div
            className="font-extrabold text-lg"
            style={{
              color: GOLD,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            YMW Affiliate
          </div>
          <div className="text-xs text-gray-400 mt-1">Partner Dashboard</div>
        </div>
        <div className="px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{name}</div>
              <Badge
                className="text-[10px] px-1.5 py-0 mt-0.5"
                style={{
                  backgroundColor: role === "admin" ? "#ef4444" : `${GOLD}33`,
                  color: role === "admin" ? "#fff" : GOLD,
                  border: "none",
                }}
              >
                {role === "admin" ? "Admin" : "Affiliate"}
              </Badge>
            </div>
          </div>
          <div
            className="mt-3 text-xs font-mono"
            style={{ color: `${GOLD}99` }}
          >
            ID: {affiliateId}
          </div>
        </div>
        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              data-ocid={`affiliate-dashboard.nav.${item.id}.button`}
              onClick={() => setActiveTab(item.id)}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left"
              style={{
                backgroundColor:
                  activeTab === item.id ? `${GOLD}22` : "transparent",
                color: activeTab === item.id ? GOLD : "#94a3b8",
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleLogout}
            data-ocid="affiliate-dashboard.logout.button"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ color: "#f87171" }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-2 py-2 border-t"
        style={{ backgroundColor: NAVY, borderColor: "#1e293b" }}
      >
        {navItems.slice(0, 5).map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            data-ocid={`affiliate-dashboard.mobile-nav.${item.id}.button`}
            className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg"
            style={{ color: activeTab === item.id ? GOLD : "#64748b" }}
          >
            {item.icon}
            <span className="text-[9px]">{item.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8">
        {/* Overview */}
        {activeTab === "overview" && (
          <div data-ocid="affiliate-dashboard.overview.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              Dashboard Overview
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {OVERVIEW_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                  style={{ border: `1.5px solid ${GOLD}44` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500">
                      {card.label}
                    </span>
                    <OverviewIcon label={card.label} />
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: NAVY }}
                  >
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <h3 className="font-bold text-base mb-4" style={{ color: NAVY }}>
                Recent Leads
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_LEADS.slice(0, 3).map((lead, pos) => (
                    <TableRow
                      key={lead.client}
                      data-ocid={`overview.leads.item.${pos + 1}`}
                    >
                      <TableCell className="font-medium">
                        {lead.client}
                      </TableCell>
                      <TableCell>{lead.service}</TableCell>
                      <TableCell>{lead.date}</TableCell>
                      <TableCell>
                        <StatusBadge status={lead.status} />
                      </TableCell>
                      <TableCell className="font-semibold">
                        {lead.commission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Referral Links */}
        {activeTab === "links" && (
          <div data-ocid="affiliate-dashboard.links.section">
            <h2
              className="text-2xl font-extrabold mb-2"
              style={{ color: NAVY }}
            >
              Referral Links
            </h2>
            <div
              className="inline-block px-4 py-2 rounded-xl text-sm font-mono font-bold mb-6"
              style={{
                backgroundColor: `${GOLD}22`,
                color: NAVY,
                border: `1.5px solid ${GOLD}`,
              }}
            >
              Your Affiliate ID: {affiliateId}
            </div>
            <div className="space-y-4">
              {REFERRAL_CATEGORIES.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                  style={{ border: `1.5px solid ${GOLD}44` }}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-4 font-bold text-sm text-left"
                    style={{ color: NAVY }}
                    onClick={() =>
                      setExpandedCats((prev) => ({
                        ...prev,
                        [cat.category]: !prev[cat.category],
                      }))
                    }
                    data-ocid="links.category.toggle"
                  >
                    {cat.category}
                    <ChevronDown
                      size={16}
                      style={{
                        transform: expandedCats[cat.category]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s",
                        color: GOLD,
                      }}
                    />
                  </button>
                  {expandedCats[cat.category] && (
                    <div className="px-6 pb-4 space-y-2">
                      {cat.services.map((svc) => (
                        <div
                          key={svc.slug}
                          className="flex items-center justify-between py-2 border-t"
                          style={{ borderColor: "#f1f5f9" }}
                        >
                          <span className="text-sm text-gray-700">
                            {svc.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyLink(svc.slug)}
                            data-ocid="links.service.button"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
                            style={{
                              backgroundColor: `${GOLD}22`,
                              color: NAVY,
                            }}
                          >
                            <ClipboardCopy size={13} />
                            Copy Link
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Leads */}
        {activeTab === "leads" && (
          <div data-ocid="affiliate-dashboard.leads.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              My Leads
            </h2>
            <div
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client Name</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Lead Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_LEADS.map((lead, pos) => (
                    <TableRow
                      key={lead.client}
                      data-ocid={`leads.item.${pos + 1}`}
                    >
                      <TableCell className="font-medium">
                        {lead.client}
                      </TableCell>
                      <TableCell>{lead.service}</TableCell>
                      <TableCell>{lead.date}</TableCell>
                      <TableCell>
                        <StatusBadge status={lead.status} />
                      </TableCell>
                      <TableCell className="font-semibold">
                        {lead.commission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        {/* Commission Wallet */}
        {activeTab === "wallet" && (
          <div data-ocid="affiliate-dashboard.wallet.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              Commission Wallet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {WALLET_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="rounded-2xl p-6 text-center shadow-sm"
                  style={{ backgroundColor: card.bg }}
                >
                  <div
                    className="text-sm font-medium mb-2"
                    style={{ color: card.textColor, opacity: 0.8 }}
                  >
                    {card.label}
                  </div>
                  <div
                    className="text-3xl font-extrabold"
                    style={{ color: card.textColor }}
                  >
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "#f1f5f9" }}
              >
                <h3 className="font-bold text-base" style={{ color: NAVY }}>
                  Transaction History
                </h3>
              </div>
              <div className="divide-y" style={{ borderColor: "#f1f5f9" }}>
                {MOCK_TRANSACTIONS.map((tx, pos) => (
                  <div
                    key={tx.date}
                    className="px-6 py-4 flex items-center justify-between"
                    data-ocid={`wallet.item.${pos + 1}`}
                  >
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: NAVY }}
                      >
                        {tx.desc}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {tx.date}
                      </div>
                    </div>
                    <div
                      className="font-bold text-sm"
                      style={{
                        color: tx.type === "credit" ? "#16a34a" : "#ef4444",
                      }}
                    >
                      {tx.type === "credit" ? "+" : "-"}
                      {tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Withdraw */}
        {activeTab === "withdraw" && (
          <div data-ocid="affiliate-dashboard.withdraw.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              Withdrawal Request
            </h2>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm max-w-lg"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div className="flex gap-4 mb-6">
                {(["bank", "upi"] as const).map((m) => (
                  <label
                    key={m}
                    className="flex items-center gap-2 cursor-pointer"
                    data-ocid={`withdraw.${m}.radio`}
                  >
                    <input
                      type="radio"
                      name="payMethod"
                      value={m}
                      checked={payMethod === m}
                      onChange={() => setPayMethod(m)}
                      style={{ accentColor: GOLD }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: NAVY }}
                    >
                      {m === "bank" ? "Bank Transfer" : "UPI"}
                    </span>
                  </label>
                ))}
              </div>
              <div className="space-y-4">
                {payMethod === "bank" ? (
                  <>
                    {BANK_FIELDS.map((f) => (
                      <div key={f.id}>
                        <Label
                          className="text-xs font-semibold"
                          style={{ color: NAVY }}
                        >
                          {f.label}
                        </Label>
                        <Input
                          placeholder={f.placeholder}
                          value={bankForm[f.id as keyof typeof bankForm]}
                          onChange={(e) =>
                            setBankForm({ ...bankForm, [f.id]: e.target.value })
                          }
                          data-ocid="withdraw.bank.input"
                          className="mt-1"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    <Label
                      className="text-xs font-semibold"
                      style={{ color: NAVY }}
                    >
                      UPI ID
                    </Label>
                    <Input
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      data-ocid="withdraw.upi.input"
                      className="mt-1"
                    />
                  </div>
                )}
                <div>
                  <Label
                    className="text-xs font-semibold"
                    style={{ color: NAVY }}
                  >
                    Amount (₹)
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter amount to withdraw"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    data-ocid="withdraw.amount.input"
                    className="mt-1"
                  />
                </div>
                <button
                  type="button"
                  data-ocid="withdraw.submit_button"
                  onClick={() => {
                    toast.success("Withdrawal request submitted!", {
                      description: "We'll process it within 3–5 business days.",
                    });
                    setWithdrawAmount("");
                  }}
                  className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 mt-2"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Submit Withdrawal Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div data-ocid="affiliate-dashboard.settings.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              Account Settings
            </h2>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm max-w-lg"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div className="space-y-4">
                {SETTINGS_FIELDS.map((f) => (
                  <div key={f.id}>
                    <Label
                      className="text-xs font-semibold"
                      style={{ color: NAVY }}
                    >
                      {f.label}
                    </Label>
                    <Input
                      placeholder={f.placeholder}
                      value={settingsForm[f.id as keyof typeof settingsForm]}
                      onChange={(e) =>
                        setSettingsForm({
                          ...settingsForm,
                          [f.id]: e.target.value,
                        })
                      }
                      data-ocid={`settings.${f.id}.input`}
                      className="mt-1"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  data-ocid="settings.save_button"
                  onClick={() => {
                    localStorage.setItem("affiliateName", settingsForm.name);
                    setName(settingsForm.name);
                    toast.success("Settings saved!");
                  }}
                  className="w-full py-3 rounded-lg font-bold text-base transition-all hover:opacity-90 mt-2"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Admin Controls */}
        {activeTab === "admin" && role === "admin" && (
          <div data-ocid="affiliate-dashboard.admin.section">
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ color: NAVY }}
            >
              Admin Controls
            </h2>

            {/* Pending Affiliates */}
            <div
              className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "#f1f5f9", backgroundColor: NAVY }}
              >
                <h3 className="font-bold text-base text-white">
                  Pending Affiliates
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingAffiliates.map((aff, pos) => (
                    <TableRow
                      key={aff.email}
                      data-ocid={`admin.affiliates.item.${pos + 1}`}
                    >
                      <TableCell className="font-medium">{aff.name}</TableCell>
                      <TableCell>{aff.email}</TableCell>
                      <TableCell>{aff.city}</TableCell>
                      <TableCell>{aff.type}</TableCell>
                      <TableCell>
                        <StatusBadge status={aff.status} />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            data-ocid={`admin.affiliates.confirm_button.${pos + 1}`}
                            onClick={() => {
                              const updated = [...pendingAffiliates];
                              updated[pos] = {
                                ...updated[pos],
                                status: "Approved",
                              };
                              setPendingAffiliates(updated);
                              toast.success(`${aff.name} approved!`);
                            }}
                            disabled={aff.status !== "Pending"}
                            className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
                            style={{
                              backgroundColor: "#d1fae5",
                              color: "#065f46",
                            }}
                          >
                            <CheckCircle size={12} /> Approve
                          </button>
                          <button
                            type="button"
                            data-ocid={`admin.affiliates.delete_button.${pos + 1}`}
                            onClick={() => {
                              const updated = [...pendingAffiliates];
                              updated[pos] = {
                                ...updated[pos],
                                status: "Rejected",
                              };
                              setPendingAffiliates(updated);
                              toast.error(`${aff.name} rejected.`);
                            }}
                            disabled={aff.status !== "Pending"}
                            className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
                            style={{
                              backgroundColor: "#fee2e2",
                              color: "#991b1b",
                            }}
                          >
                            <XCircle size={12} /> Reject
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* All Leads */}
            <div
              className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "#f1f5f9", backgroundColor: NAVY }}
              >
                <h3 className="font-bold text-base text-white">All Leads</h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Update</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_ALL_LEADS.map((lead, pos) => (
                    <TableRow
                      key={lead.client}
                      data-ocid={`admin.leads.item.${pos + 1}`}
                    >
                      <TableCell>{lead.affiliate}</TableCell>
                      <TableCell className="font-medium">
                        {lead.client}
                      </TableCell>
                      <TableCell>{lead.service}</TableCell>
                      <TableCell>{lead.date}</TableCell>
                      <TableCell>
                        <StatusBadge status={allLeadStatuses[pos]} />
                      </TableCell>
                      <TableCell>
                        <select
                          value={allLeadStatuses[pos]}
                          onChange={(e) => {
                            const updated = [...allLeadStatuses];
                            updated[pos] = e.target.value;
                            setAllLeadStatuses(updated);
                            toast.success("Status updated!");
                          }}
                          data-ocid="admin.leads.select"
                          className="text-xs px-2 py-1 rounded-lg border outline-none"
                          style={{ borderColor: `${GOLD}88`, color: NAVY }}
                        >
                          <option>Pending</option>
                          <option>In Process</option>
                          <option>Completed</option>
                        </select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Top Performers */}
            <div
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              style={{ border: `1.5px solid ${GOLD}44` }}
            >
              <div
                className="px-6 py-4 border-b"
                style={{ borderColor: "#f1f5f9", backgroundColor: NAVY }}
              >
                <h3 className="font-bold text-base text-white">
                  Top Performers
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Referrals</TableHead>
                    <TableHead>Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_TOP_PERFORMERS.map((aff, pos) => (
                    <TableRow
                      key={aff.email}
                      data-ocid={`admin.performers.item.${pos + 1}`}
                    >
                      <TableCell>
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold inline-flex"
                          style={{ backgroundColor: GOLD, color: NAVY }}
                        >
                          #{pos + 1}
                        </span>
                      </TableCell>
                      <TableCell className="font-medium">{aff.name}</TableCell>
                      <TableCell>{aff.email}</TableCell>
                      <TableCell className="font-semibold">
                        {aff.referrals}
                      </TableCell>
                      <TableCell
                        className="font-semibold"
                        style={{ color: "#16a34a" }}
                      >
                        {aff.commission}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
