// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projects';

// Exportando um GET handler para a rota /api/projects
export async function GET() {
  try {
    const projects = getAllProjects();
    // Limitando para os 3 projetos mais recentes
    const recentProjects = projects.slice(0, 3);
    return NextResponse.json(recentProjects);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar projetos' },
      { status: 500 }
    );
  }
}