import { PostsData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';

export async function getAllPosts(): Promise<PostsData> {
  const posts = await fetchJson<PostsData>(POSTS_URL);
  return posts;
}
