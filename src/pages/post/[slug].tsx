import { GetStaticPaths, GetStaticProps } from 'next';
import { PostPage } from '../../containers/Post';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { Post } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: Post;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <PostPage post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[pageSize]=${numberOfPosts}`);

  return {
    paths: posts.data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);

  return {
    props: { post: posts.data[0] },
  };
};
