import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getBlogPost } from "@/sanity/client";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Shibashis Mondal`,
    description: post.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBody(body: any[]) {
  if (!body) return null;

  return body.map((block: any, index: number) => {
    if (block._type === "block") {
      const children = block.children?.map((child: any) => child.text).join("") || "";

      switch (block.style) {
        case "h1":
          return <h1 key={index} className="text-3xl font-bold mb-4">{children}</h1>;
        case "h2":
          return <h2 key={index} className="text-2xl font-bold mb-3">{children}</h2>;
        case "h3":
          return <h3 key={index} className="text-xl font-semibold mb-2">{children}</h3>;
        default:
          return <p key={index} className="mb-4 leading-relaxed">{children}</p>;
      }
    }
    return null;
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500 dark:text-slate-400">
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

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              {renderBody(post.body)}
            </div>
          </div>
        </article>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400
              font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}