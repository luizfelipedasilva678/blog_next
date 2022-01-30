import { PostsData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';

export async function countAllPosts(): Promise<number> {
  const url = `${POSTS_URL}`;
  const posts = await fetchJson<PostsData>(url);
  return posts.data.length;
}
