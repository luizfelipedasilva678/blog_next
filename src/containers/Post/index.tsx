import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
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
          <h2>{post.attributes.title} </h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.attributes.content }}
          ></div>
        </>
      </MainContainer>
      <Footer />
    </>
  );
};
