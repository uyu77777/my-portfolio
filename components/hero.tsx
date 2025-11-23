export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="glow-green">Hi, I'm Kai.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            I like to build <span className="text-accent-cyan font-mono">kind of cool</span> and{" "}
            <span className="text-accent-green font-mono">fun stuff.</span>
          </p>

          <p className="text-muted-foreground max-w-lg leading-relaxed">
            A free spirit passionate about creating captivating experiences.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="/#projects"
            className="inline-flex items-center justify-center px-6 py-3 font-mono font-semibold rounded border-glow-green hover:bg-accent-green hover:text-background transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 font-mono font-semibold rounded hover:border-glow-cyan transition-all duration-300"
            style={{ border: "1px solid rgb(30 35 53)" }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
