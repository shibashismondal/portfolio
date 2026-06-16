import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9bxlvlzv",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "readTime": round(length(pt::text(body)) / 5 / 200) + " min read",
      category,
      mainImage
    }
  `);
}

export async function getBlogPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      body,
      "readTime": round(length(pt::text(body)) / 5 / 200) + " min read",
      category,
      mainImage
    }
  `, { slug });
}