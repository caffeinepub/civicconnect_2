import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Building2, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Company {
  cin: string;
  company_name: string;
  roc: string;
  status: string;
}

// Sample dataset of real Indian companies for demonstration
const SAMPLE_COMPANIES: Company[] = [
  {
    cin: "U72900MH2010PTC123456",
    company_name: "Reliance Industries Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L15122GJ1966PLC001183",
    company_name: "Reliance Capital Limited",
    roc: "RoC-Ahmedabad",
    status: "Active",
  },
  {
    cin: "L17110MH1973PLC019786",
    company_name: "Tata Consultancy Services Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L74999MH1945PLC004520",
    company_name: "Tata Motors Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L32201MH1945PLC004520",
    company_name: "Tata Steel Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L36911MH2000PLC128208",
    company_name: "Infosys Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "L72200KA1981PLC013880",
    company_name: "Infosys BPM Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "L25209MH1945PLC004534",
    company_name: "Wipro Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "L72300KA1945PLC020800",
    company_name: "HCL Technologies Limited",
    roc: "RoC-Delhi",
    status: "Active",
  },
  {
    cin: "L74140DL1975PLC007710",
    company_name: "HCL Infosystems Limited",
    roc: "RoC-Delhi",
    status: "Inactive",
  },
  {
    cin: "L65929MH1994PLC080618",
    company_name: "HDFC Bank Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L99999MH1977PLC019882",
    company_name: "HDFC Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L65191KA1994PLC016002",
    company_name: "ICICI Bank Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L65190GJ1994PLC021756",
    company_name: "ICICI Lombard General Insurance",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L65110MH1994PLC080618",
    company_name: "Axis Bank Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L52599MH2007PLC168306",
    company_name: "Flipkart Internet Private Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "U74900KA2001PTC028721",
    company_name: "Amazon Seller Services Private Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "U72200DL2008PLC186164",
    company_name: "Paytm Payments Bank Limited",
    roc: "RoC-Delhi",
    status: "Active",
  },
  {
    cin: "U74999DL2000PTC104516",
    company_name: "Zomato Limited",
    roc: "RoC-Delhi",
    status: "Active",
  },
  {
    cin: "U63040MH2011FTC226084",
    company_name: "Ola Electric Mobility Private Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "U72900MH2010PTC199926",
    company_name: "Nykaa Fashion Private Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "U72900KA2008PTC046445",
    company_name: "Byju's Think and Learn Private Limited",
    roc: "RoC-Bangalore",
    status: "Struck Off",
  },
  {
    cin: "U72200MH2014PTC256752",
    company_name: "Dream Sports Private Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "U74900HR2016PTC064003",
    company_name: "PolicyBazaar Insurance Brokers",
    roc: "RoC-Delhi",
    status: "Active",
  },
  {
    cin: "U72200KA2018PTC110698",
    company_name: "Swiggy Private Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "U72200MH2018PTC315813",
    company_name: "CRED Club Private Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "U67190MH2003PTC143003",
    company_name: "Zerodha Broking Limited",
    roc: "RoC-Bangalore",
    status: "Active",
  },
  {
    cin: "U74999DL2011PTC219229",
    company_name: "Snapdeal Private Limited",
    roc: "RoC-Delhi",
    status: "Inactive",
  },
  {
    cin: "L15200WB1945PLC013886",
    company_name: "ITC Limited",
    roc: "RoC-Kolkata",
    status: "Active",
  },
  {
    cin: "L35100MH1945PLC012803",
    company_name: "Mahindra and Mahindra Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L31400GJ1960PLC001028",
    company_name: "Larsen and Toubro Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L51909MH1994PLC081941",
    company_name: "Sun Pharmaceutical Industries Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L24230GJ1952PLC000832",
    company_name: "Cipla Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L24239MH1945PLC004685",
    company_name: "Dr Reddys Laboratories Limited",
    roc: "RoC-Hyderabad",
    status: "Active",
  },
  {
    cin: "L74120DL2004PLC128077",
    company_name: "Bharti Airtel Limited",
    roc: "RoC-Delhi",
    status: "Active",
  },
  {
    cin: "L74899DL1994PLC059552",
    company_name: "Jio Platforms Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "U45200MH2007PLC170589",
    company_name: "Adani Enterprises Limited",
    roc: "RoC-Ahmedabad",
    status: "Active",
  },
  {
    cin: "L40100GJ1994PLC021235",
    company_name: "Adani Green Energy Limited",
    roc: "RoC-Ahmedabad",
    status: "Active",
  },
  {
    cin: "L72200DL1996PLC077881",
    company_name: "Tech Mahindra Limited",
    roc: "RoC-Mumbai",
    status: "Active",
  },
  {
    cin: "L22100MH1984PLC032746",
    company_name: "Zee Entertainment Enterprises Limited",
    roc: "RoC-Mumbai",
    status: "Struck Off",
  },
];

function searchInSampleData(query: string): Company[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return SAMPLE_COMPANIES.filter(
    (c) =>
      c.company_name.toLowerCase().includes(q) ||
      c.cin.toLowerCase().includes(q),
  ).slice(0, 10);
}

function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase();
  if (s === "active") {
    return (
      <Badge className="bg-green-100 text-green-800 border border-green-200 font-semibold">
        ● Active
      </Badge>
    );
  }
  if (s === "struck off") {
    return (
      <Badge className="bg-red-100 text-red-800 border border-red-200 font-semibold">
        ● Struck Off
      </Badge>
    );
  }
  return (
    <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold">
      ● {status}
    </Badge>
  );
}

export default function CompanySearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Search on debounced query
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    // Simulate async call
    const timer = setTimeout(() => {
      const results = searchInSampleData(debouncedQuery);
      setSuggestions(results);
      setShowDropdown(true);
      setIsLoading(false);
      setHighlightedIndex(-1);
    }, 150);
    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSelect(company: Company) {
    setSelectedCompany(company);
    setQuery(company.company_name);
    setShowDropdown(false);
    setSuggestions([]);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!showDropdown || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < suggestions.length) {
        handleSelect(suggestions[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
      setHighlightedIndex(-1);
    }
  }

  function handleClear() {
    setQuery("");
    setDebouncedQuery("");
    setSuggestions([]);
    setSelectedCompany(null);
    setShowDropdown(false);
    inputRef.current?.focus();
  }

  return (
    <main className="min-h-screen pb-32" style={{ backgroundColor: "#dbeafe" }}>
      {/* Hero Header */}
      <section
        className="py-14 px-4 text-center"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              <Building2 className="w-4 h-4" />
              MCA Company Database
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
            Company Name <span style={{ color: "#f5c518" }}>Search</span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-xl mx-auto">
            Search from our database of registered Indian companies. Find CIN,
            ROC details, and registration status instantly.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 -mt-8">
        {/* Search Box */}
        <div className="relative" data-ocid="company.search_input">
          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-2xl border-2"
            style={{
              backgroundColor: "#fff",
              borderColor: showDropdown ? "#f5c518" : "#e2e8f0",
              transition: "border-color 0.2s",
            }}
          >
            <Search
              className="w-5 h-5 flex-shrink-0"
              style={{ color: "#f5c518" }}
            />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedCompany(null);
                if (!e.target.value.trim()) {
                  setShowDropdown(false);
                  setSuggestions([]);
                }
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (suggestions.length > 0) setShowDropdown(true);
              }}
              placeholder="Search company name..."
              className="border-0 shadow-none focus-visible:ring-0 text-base font-medium p-0 h-auto"
              style={{ color: "#0a1628" }}
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={showDropdown}
              aria-haspopup="listbox"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Clear search"
                data-ocid="company.search_input"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 mt-2 rounded-xl shadow-2xl border overflow-hidden z-50"
              style={{ backgroundColor: "#fff", borderColor: "#e2e8f0" }}
              data-ocid="company.dropdown_menu"
            >
              {isLoading ? (
                <div
                  className="p-4 space-y-3"
                  data-ocid="company.loading_state"
                >
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-lg" />
                  ))}
                </div>
              ) : suggestions.length === 0 ? (
                <div
                  className="px-5 py-6 text-center text-sm"
                  style={{ color: "#64748b" }}
                  data-ocid="company.empty_state"
                >
                  <Building2 className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  No companies found for &quot;{debouncedQuery}&quot;
                </div>
              ) : (
                <div className="py-1">
                  {suggestions.map((company, index) => (
                    <button
                      type="button"
                      key={company.cin}
                      data-ocid={`company.item.${index + 1}`}
                      className="w-full flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors text-left"
                      style={{
                        backgroundColor:
                          highlightedIndex === index
                            ? "#f0f7ff"
                            : "transparent",
                        borderLeft:
                          highlightedIndex === index
                            ? "3px solid #f5c518"
                            : "3px solid transparent",
                      }}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onMouseLeave={() => setHighlightedIndex(-1)}
                      onClick={() => handleSelect(company)}
                    >
                      <Building2
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#f5c518" }}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-medium truncate text-sm"
                          style={{ color: "#0a1628" }}
                        >
                          {company.company_name}
                        </div>
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: "#64748b" }}
                        >
                          {company.cin} · {company.roc}
                        </div>
                      </div>
                      <StatusBadge status={company.status} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-3" style={{ color: "#64748b" }}>
          Start typing to search — up to 10 suggestions shown
        </p>

        {/* Selected Company Details */}
        {selectedCompany && (
          <div
            className="mt-8 rounded-2xl overflow-hidden shadow-xl border"
            style={{ borderColor: "#e2e8f0" }}
            data-ocid="company.card"
          >
            {/* Card Header */}
            <div
              className="flex items-center gap-3 px-6 py-4"
              style={{ backgroundColor: "#0a1628" }}
            >
              <Building2 className="w-5 h-5" style={{ color: "#f5c518" }} />
              <h2 className="text-white font-bold text-lg">Company Details</h2>
              <span
                className="ml-auto text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                }}
              >
                MCA Registered
              </span>
            </div>

            {/* Card Body */}
            <div className="bg-white px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#94a3b8" }}
                  >
                    Company Name
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: "#0a1628" }}
                  >
                    {selectedCompany.company_name}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#94a3b8" }}
                  >
                    CIN
                  </p>
                  <p
                    className="text-sm font-mono font-medium"
                    style={{ color: "#0a1628" }}
                  >
                    {selectedCompany.cin}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#94a3b8" }}
                  >
                    ROC
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#0a1628" }}
                  >
                    {selectedCompany.roc}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "#94a3b8" }}
                  >
                    Registration Status
                  </p>
                  <StatusBadge status={selectedCompany.status} />
                </div>
              </div>

              <div
                className="mt-6 pt-5 border-t flex flex-col sm:flex-row gap-3"
                style={{ borderColor: "#f1f5f9" }}
              >
                <a
                  href="https://www.mca.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                  data-ocid="company.primary_button"
                >
                  View on MCA Portal
                </a>
                <a
                  href="tel:+919279242122"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:bg-slate-50"
                  style={{ borderColor: "#0a1628", color: "#0a1628" }}
                  data-ocid="company.secondary_button"
                >
                  Get Expert Help
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Empty / Initial state */}
        {!selectedCompany && !showDropdown && !query && (
          <div
            className="mt-10 rounded-2xl p-8 text-center border"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              borderColor: "#e2e8f0",
            }}
            data-ocid="company.empty_state"
          >
            <Building2
              className="w-12 h-12 mx-auto mb-3"
              style={{ color: "#f5c518" }}
            />
            <h3 className="text-lg font-bold mb-1" style={{ color: "#0a1628" }}>
              Search Indian Companies
            </h3>
            <p className="text-sm" style={{ color: "#64748b" }}>
              Type a company name above to find CIN, ROC, and registration
              status from our MCA database.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Reliance", "Tata", "Infosys", "HDFC", "Wipro"].map((name) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => {
                    setQuery(name);
                    setSelectedCompany(null);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors hover:bg-yellow-50"
                  style={{ borderColor: "#f5c518", color: "#0a1628" }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
