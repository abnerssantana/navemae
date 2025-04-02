import fs from 'fs';
import path from 'path';

// Define the project interface
export interface Project {
  slug: string;
  title: string;
  description: string;
  client: string;
  date: string;
  category: string;
  services: string[];
  image?: string;
  images?: string[];
  content: {
    sections: Array<{
      type: 'text' | 'image' | 'quote';
      content: string;
    }>;
  };
}

// Define the project directory
const projectsDirectory = path.join(process.cwd(), 'data/projects');

// Function to get all projects
export function getAllProjects(): Project[] {
  // Get all file names in the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);
  
  // Parse each file and return the data
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      // Remove ".json" from file name to get the slug
      const slug = fileName.replace(/\.json$/, '');
      
      // Read the file content
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      
      // Parse the JSON data
      const projectData = JSON.parse(fileContent) as Omit<Project, 'slug'>;
      
      // Return the project data with the slug
      return {
        slug,
        ...projectData,
      };
    });
  
  // Sort projects by date
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get a specific project by slug
export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.json`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the JSON data
    const projectData = JSON.parse(fileContent) as Omit<Project, 'slug'>;
    
    // Return the project data with the slug
    return {
      slug,
      ...projectData,
    };
  } catch (error) {
    // Return null if the project doesn't exist
    return null;
  }
}

// Function to get related projects (excluding the current project)
export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const allProjects = getAllProjects();
  return allProjects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit);
}