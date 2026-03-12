import { c as createLucideIcon, j as jsxRuntimeExports, e as useListBlogPosts, o, U as User, a as ChevronDown } from "./index-pQi0h6D3.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-WfcUtkp_.js";
import { c as cn } from "./utils-Bmita3Ip.js";
import { f as formatTimestamp } from "./dateUtils-B-JEV3ft.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode);
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function Blog() {
  const { data: posts, isLoading, isError } = useListBlogPosts();
  const [expandedId, setExpandedId] = o.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 text-center",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4",
              style: {
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518"
              },
              children: "Blog & Insights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
            "Compliance ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Knowledge Hub" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Stay updated with the latest compliance news, regulatory changes, and business tips for India." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-6 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-6 w-3/4 mb-3",
                style: { backgroundColor: "rgba(255,255,255,0.08)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-4 w-1/2 mb-4",
                style: { backgroundColor: "rgba(255,255,255,0.06)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-4 w-full mb-2",
                style: { backgroundColor: "rgba(255,255,255,0.06)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-4 w-5/6",
                style: { backgroundColor: "rgba(255,255,255,0.06)" }
              }
            )
          ]
        },
        i
      )) }),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-8 rounded-2xl text-center",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 font-medium", children: "Failed to load blog posts. Please try again later." })
        }
      ),
      !isLoading && !isError && posts && posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-12 rounded-2xl text-center",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "📝" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "No Posts Yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Check back soon for compliance tips and business insights." })
          ]
        }
      ),
      !isLoading && !isError && posts && posts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "p-6 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white", children: post.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                post.author
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                formatTimestamp(post.createdAt)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm leading-relaxed mb-4", children: post.excerpt }),
            expandedId === post.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-wrap border-t border-white/10 pt-4", children: post.content }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setExpandedId(expandedId === post.id ? null : post.id),
                className: "flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition-opacity",
                style: { color: "#f5c518" },
                children: expandedId === post.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Read Less ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Read More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                ] })
              }
            )
          ]
        },
        post.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  Blog as default
};
