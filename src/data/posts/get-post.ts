import { PostsData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';
import { markdownToHtml } from '../../utils/markdown-to-html';

export async function getPost(slug: string | string[]): Promise<PostsData> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<PostsData>(url);
  const content = await markdownToHtml(jsonPosts.data[0].attributes.content);
  jsonPosts.data[0].attributes.content = content;
  return jsonPosts;
}
