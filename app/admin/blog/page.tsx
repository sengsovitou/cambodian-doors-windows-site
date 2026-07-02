import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
          <Link
            href="/admin"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Title
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Author
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Status
                </th>
                <th className="text-left p-4 text-neutral-400 font-medium">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-neutral-800 last:border-0 hover:bg-neutral-800 transition-colors"
                >
                  <td className="p-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-neutral-300"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="p-4 text-neutral-400">{post.author.name}</td>
                  <td className="p-4">
                    {post.published ? (
                      <span className="text-green-400 text-xs bg-green-900 px-2 py-1 rounded">
                        Published
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-xs bg-neutral-800 px-2 py-1 rounded">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-neutral-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
