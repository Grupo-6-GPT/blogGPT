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
  image_url: string | null
  created_at: string
  author_id: string | null
}

export interface Resource {
  id: string
  title: string
  description: string | null
  url: string
  icon: string
  badge: string | null
  created_at: string
}
