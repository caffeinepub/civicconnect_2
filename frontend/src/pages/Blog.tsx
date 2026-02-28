import { useState } from 'react';
import { Calendar, User, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { useListBlogPosts } from '@/hooks/useQueries';
import { formatTimestamp } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import type { BlogPost } from '../backend';

function BlogPostCard({ post }: { post: BlogPost }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="civic-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.1)', color: 'oklch(var(--civic-teal))' }}
        >
          Community Update
        </span>
      </div>

      <h2
        className="text-xl sm:text-2xl font-bold mb-3 text-foreground leading-snug"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {post.title}
      </h2>

      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <User size={14} />
          {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={14} />
          {formatTimestamp(post.createdAt)}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{post.excerpt}</p>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">{post.content}</p>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors mt-2"
        style={{ color: 'oklch(var(--civic-teal))' }}
      >
        {expanded ? (
          <>Show Less <ChevronUp size={16} /></>
        ) : (
          <>Read More <ChevronDown size={16} /></>
        )}
      </button>
    </article>
  );
}

function BlogSkeleton() {
  return (
    <div className="civic-card p-6 sm:p-8 space-y-4">
      <Skeleton className="h-5 w-32 rounded-full" />
      <Skeleton className="h-7 w-3/4" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-28" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-20" />
    </div>
  );
}

export default function Blog() {
  const { data: posts, isLoading, isError } = useListBlogPosts();

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Community Blog
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Stay informed with the latest news, updates, and stories from our community.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => <BlogSkeleton key={i} />)}
            </div>
          )}

          {isError && (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'oklch(var(--destructive) / 0.1)' }}
              >
                <BookOpen size={28} style={{ color: 'oklch(var(--destructive))' }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Failed to Load Posts</h3>
              <p className="text-sm text-muted-foreground">Please try refreshing the page.</p>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length === 0 && (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.1)' }}
              >
                <BookOpen size={28} style={{ color: 'oklch(var(--civic-teal))' }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No Posts Yet</h3>
              <p className="text-sm text-muted-foreground">Check back soon for community updates and news.</p>
            </div>
          )}

          {!isLoading && !isError && posts && posts.length > 0 && (
            <div className="space-y-6">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
