// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// Define the project metadata type
export interface ProjectFrontmatter {
  title: string
  description: string
  date: string
  client: string
  services: string[]
  image: string
  category: string
  featured: boolean
  slug: string
}

// Path to the content directory
const contentDirectory = path.join(process.cwd(), 'content')

// Get all project files
export async function getProjectSlugs() {
  const projectsDirectory = path.join(contentDirectory, 'projetos')
  
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true })
    return []
  }
  
  const files = fs.readdirSync(projectsDirectory)
  return files.filter(file => file.endsWith('.mdx')).map(file => file.replace(/\.mdx$/, ''))
}

// Get a specific project by slug
export async function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDirectory, 'projetos', `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { frontmatter, content } = await compileMDX<ProjectFrontmatter>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    },
  })
  
  return {
    metadata: { ...frontmatter, slug },
    content,
  }
}

// Get all projects with their metadata
export async function getAllProjects() {
  const slugs = await getProjectSlugs()
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await getProjectBySlug(slug)
      return project?.metadata
    })
  )
  
  // Filter out any null values and sort by date (newest first)
  return projects
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime())
}

// Get featured projects
export async function getFeaturedProjects() {
  const projects = await getAllProjects()
  return projects.filter(project => project!.featured)
}