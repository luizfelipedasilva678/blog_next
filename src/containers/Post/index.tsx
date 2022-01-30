import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostCover } from '../../components/PostCover';
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

          <div
            dangerouslySetInnerHTML={{ __html: post.attributes.content }}
          ></div>
        </>
      </MainContainer>
      <Footer />
    </>
  );
};
