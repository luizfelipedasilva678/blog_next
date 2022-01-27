import { GetStaticProps } from 'next';
import { Post, PostsData } from '../domain/posts/post';
interface HomeProps {
  posts: PostsData;
}

async function getPosts(): Promise<PostsData> {
  const posts = await fetch(
    'https://protected-reaches-35471.herokuapp.com/api/post?populate=*',
  );
  const jsonPosts = await posts.json();

  return jsonPosts;
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.data.map((post: Post) => (
        <h2 key={post.id}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};
