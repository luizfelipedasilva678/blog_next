import { useRouter } from 'next/router';

export default function Username() {
  const router = useRouter();

  console.log(router);
  return <h1>Username: {router.query.username} </h1>;
}
