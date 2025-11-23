import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import projects from "@/data/projects.json"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return {
    title: `${project?.title} | Kai`,
    description: project?.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <Link
            href="/#projects"
            className="text-sm text-muted-foreground hover:text-accent-green transition-colors mb-6 inline-block"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-bold mb-3">
            <span className="glow-green">{project.title}</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8">{project.summary}</p>

          <div className="space-y-8">
            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold text-accent-cyan mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold text-accent-cyan mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-accent-green mt-1">→</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold text-accent-cyan mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-card rounded-full font-mono text-sm text-accent-green"
                    style={{ border: "1px solid rgb(30 35 53)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.links.github || project.links.live) && (
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded hover:bg-accent-green hover:text-background transition-all duration-300 font-mono text-sm border-glow-green"
                  >
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded hover:bg-accent-cyan hover:text-background transition-all duration-300 font-mono text-sm border-glow-cyan"
                  >
                    Link
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
