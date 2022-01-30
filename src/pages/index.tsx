import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostsData } from '../domain/posts/post';
interface HomeProps {
  posts: PostsData;
}

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:asc&pagination[page]=1&pagination[pageSize]=2',
  );

  return {
    props: { posts },
  };
};
