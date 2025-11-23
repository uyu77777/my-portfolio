import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProjectCard } from "@/components/project-card"
import projects from "@/data/projects.json"

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero />

        <section id="projects" className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-3">
                <span className="glow-green">$ featured projects</span>
              </h2>
              <p className="text-muted-foreground">A selection of work </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
