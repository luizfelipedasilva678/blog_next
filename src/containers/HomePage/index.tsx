import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { Post, PostsData } from '../../domain/posts/post';
import { Container, Category } from './styles';

export interface HomePageProps {
  posts: PostsData;
  category?: string;
}

export default function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog"></meta>
      </Head>
      <Header />
      {category && <Category> Categoria: {category} </Category>}
      <MainContainer>
        <Container>
          {posts.data.map((post: Post) => (
            <>
              <PostCard
                key={post.id}
                slug={post.attributes.slug}
                cover={post.attributes.cover.data.attributes.formats.small.url}
                title={post.attributes.title}
              />
            </>
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
