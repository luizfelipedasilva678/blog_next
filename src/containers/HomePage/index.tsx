import { Header } from '../../components/Header';
import { Post, PostsData } from '../../domain/posts/post';
import { Container } from './styles';

export interface HomePageProps {
  posts: PostsData;
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <Container>
        {posts.data.map((post: Post) => (
          <h2 key={post.id}>{post.attributes.title}</h2>
        ))}
      </Container>
    </>
  );
}
