import type { BlogFrontmatter, BlogPostMeta } from '$lib/types/shared';

type MdsvexModule = {
  default: unknown;
  metadata: BlogFrontmatter;
};

const modules = import.meta.glob<MdsvexModule>('/src/lib/content/blog/*.svx', {
  eager: true
});

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? '';
  return file.replace(/\.svx$/, '');
}

export function getAllPosts(): BlogPostMeta[] {
  return Object.entries(modules)
    .map(([path, mod]) => ({ ...mod.metadata, slug: slugFromPath(path) }))
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string) {
  const entry = Object.entries(modules).find(
    ([path]) => slugFromPath(path) === slug
  );
  if (!entry) return null;
  const [, mod] = entry;
  return {
    component: mod.default,
    meta: { ...mod.metadata, slug } as BlogPostMeta
  };
}
