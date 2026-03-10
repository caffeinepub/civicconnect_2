import { Calendar, ChevronDown, ChevronUp, User } from "lucide-react";
import React from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";
import { Skeleton } from "../components/ui/skeleton";
import { useListBlogPosts } from "../hooks/useQueries";
import { formatTimestamp } from "../utils/dateUtils";

export default function Blog() {
  const { data: posts, isLoading, isError } = useListBlogPosts();
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* Page Hero */}
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
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Compliance <span style={{ color: "#f5c518" }}>Knowledge Hub</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest compliance news, regulatory changes,
            and business tips for India.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-4xl mx-auto">
          {isLoading && (
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Skeleton
                    className="h-6 w-3/4 mb-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  />
                  <Skeleton
                    className="h-4 w-1/2 mb-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  />
                  <Skeleton
                    className="h-4 w-full mb-2"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  />
                  <Skeleton
                    className="h-4 w-5/6"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div
              className="p-8 rounded-2xl text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-red-400 font-medium">
                Failed to load blog posts. Please try again later.
              </p>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length === 0 && (
            <div
              className="p-12 rounded-2xl text-center"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-2">
                No Posts Yet
              </h3>
              <p className="text-gray-400">
                Check back soon for compliance tips and business insights.
              </p>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h2 className="text-xl font-bold text-white">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatTimestamp(post.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {expandedId === post.id && (
                    <div className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-wrap border-t border-white/10 pt-4">
                      {post.content}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(expandedId === post.id ? null : post.id)
                    }
                    className="flex items-center gap-1 text-sm font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: "#f5c518" }}
                  >
                    {expandedId === post.id ? (
                      <>
                        Read Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
