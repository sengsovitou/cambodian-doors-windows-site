import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { images: true },
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Our Projects</h1>
        <p className="text-neutral-400 mb-10">
          Real installations completed by our team across Cambodia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors"
            >
              {project.images.length > 0 && (
                <img
                  src={project.images[0].url}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wide text-neutral-500">
                    {project.location}
                  </span>
                  {project.beforeAfter && (
                    <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded">
                      Before & After
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
