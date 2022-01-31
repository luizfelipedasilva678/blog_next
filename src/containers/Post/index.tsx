import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { Post } from '../../domain/posts/post';
import { removeHtml } from '../../utils/remove-html';

export type PostProps = {
  post: Post;
};

export const PostPage = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content).slice(0, 150)}
        ></meta>
      </Head>
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
