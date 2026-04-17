import { error } from '@sveltejs/kit';
import { getAllPosts, getPost } from '$lib/blog';
import type { PageLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  getAllPosts().map((p) => ({ slug: p.slug }));

export const load: PageLoad = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) throw error(404, 'Article not found');
  return { post };
};
