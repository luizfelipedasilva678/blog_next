import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { Post } from '../../domain/posts/post';

export type PostProps = {
  post: Post;
};

export const PostPage = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <Header />
      <MainContainer>
        <>
          <Heading>{post.attributes.title}</Heading>
          <PostCover
            alt={post.attributes.cover.data.attributes.formats.large.name}
            coverUrl={post.attributes.cover.data.attributes.formats.large.url}
          ></PostCover>
          <PostDetails
            date={post.attributes.createdAt}
            author={post.attributes.author.data.attributes.name}
            category={post.attributes.category.data.attributes.name}
          />
          <PostContainer content={post.attributes.content} />
        </>
      </MainContainer>
      <Footer />
    </>
  );
};
