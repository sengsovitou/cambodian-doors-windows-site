import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-neutral-500 text-sm hover:text-white mb-8 block"
        >
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-neutral-500">{post.author.name}</span>
          <span className="text-neutral-700">·</span>
          <span className="text-xs text-neutral-500">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div className="text-neutral-300 leading-relaxed text-lg">
          {post.content}
        </div>

        <div className="mt-12 bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-3">
            Interested in our products?
          </h2>
          <p className="text-neutral-400 mb-6">
            Get a free quote for your project today.
          </p>
          <Link
            href="/quote-request"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
