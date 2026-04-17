export type Theme = 'light' | 'dark';

export type TimelineItemType = {
  year: string;
  title: string;
  duration: string;
  company: string;
  stack: string[];
  details: string;
};

// Add this alongside your existing types
export type ProjectItemType = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tag?: string;
  readingTime?: string;
  hero?: string;
  heroAlt?: string;
  draft?: boolean;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};
