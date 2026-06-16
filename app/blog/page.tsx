import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getBlogPosts } from "@/sanity/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog | Shibashis Mondal",
  description: "Insights on electrical engineering, MEP projects, and industry best practices.",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Insights on electrical engineering, MEP projects, and industry best practices.
          </p>
        </div>

        <div className="space-y-8">
          {posts?.map((post: any) => (
            <article
              key={post._id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden
                shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  {post.category && (
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400
                    font-medium hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {(!posts || posts.length === 0) && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}