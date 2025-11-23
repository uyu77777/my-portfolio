import { Navigation } from "@/components/navigation"

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">
            <span className="glow-green">$ about me</span>
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              I'm a full-stack developer with a passion for building delightful digital experiences. I started my
              journey in web development a few years ago and have since worked on projects ranging from small startups
              to larger-scale applications.
            </p>

            <p className="leading-relaxed">
              My expertise spans across modern web technologies including React, Next.js, TypeScript, and Tailwind CSS.
              I'm particularly interested in AI integration, real-time applications, and creating seamless user
              experiences.
            </p>

            <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or tinkering
              with side projects. I believe in continuous learning and staying up-to-date with the latest developments
              in web technologies.
            </p>

            <div className="pt-4">
              <h2 className="text-2xl font-mono font-semibold text-accent-cyan mb-4">Skills & Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "Supabase",
                  "Git",
                  "AI SDK",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 rounded font-mono text-sm text-accent-green"
                    style={{ border: "1px solid rgb(30 35 53)" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
