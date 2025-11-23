export interface Project {
  id: string
  title: string
  slug: string
  summary: string
  description: string
  image: string
  thumbnail: string
  technologies: string[]
  features: string[]
  links: {
    github?: string
    live?: string
  }
  date: string
  featured?: boolean
}

export interface SiteConfig {
  name: string
  title: string
  tagline: string
  description: string
  navigation: Array<{
    label: string
    href: string
  }>
  socialLinks: Array<{
    name: string
    url: string
    icon: string
  }>
}
