import { Post } from '../_utils/postType';

export async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}
export async function getPostById(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
}
