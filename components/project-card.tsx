"use client"

import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group cursor-pointer transition-glow h-full">
        <div className="glass rounded-lg overflow-hidden hover:border-glow-green transition-all duration-300">
          <div className="relative h-40 overflow-hidden">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4">
            <h3 className="font-mono font-semibold text-accent-green group-hover:glow-green transition-all mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.summary}</p>

            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-card rounded font-mono text-accent-cyan"
                  style={{ border: "1px solid rgb(30 35 53)" }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 text-muted-foreground">+{project.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
