import { PostsData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';

export async function getAllPosts(query = ''): Promise<PostsData> {
  const url = `${POSTS_URL}&${query}`;
  console.log('url', url);
  const posts = await fetchJson<PostsData>(url);
  return posts;
}
