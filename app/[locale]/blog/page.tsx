import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-neutral-400 text-lg mb-12">
          Tips, guides, and insights about doors, windows, and glass
          installations.
        </p>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors block"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-neutral-500">
                  {post.author.name}
                </span>
                <span className="text-neutral-700">·</span>
                <span className="text-xs text-neutral-500">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                {post.content}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
