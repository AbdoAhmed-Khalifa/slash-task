import CardList from './CardList';
import { getPosts } from '../_lib/post-data';
import { Post } from '../_utils/postType';
export default async function PostsSections() {
  const posts: Post[] = await getPosts();
  return <CardList posts={posts as Post[]} />;
}
