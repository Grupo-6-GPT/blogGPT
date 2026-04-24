export type ProjectSlug = 'robots-bailarines' | 'lego-wedo'

export const PROJECT_LABELS: Record<ProjectSlug, string> = {
  'robots-bailarines': 'Robots Bailarines 2.0',
  'lego-wedo': 'PWA LEGO WeDo 2.0',
}

export interface Post {
  id: string
  project: ProjectSlug
  title: string
  content: string
  created_at: string
  author_id: string | null
}
