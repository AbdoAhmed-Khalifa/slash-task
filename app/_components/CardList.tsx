'use client';
import { useState } from 'react';
import { Post } from '../_utils/postType';
import Card from './Card';
import Pagination from './Pagination';

export default function CardList({ posts }: { posts: Post[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {currentPosts.map((post: Post) => (
          <Card key={String(post.id)} {...post} />
        ))}
      </ul>
      <Pagination
        totalPages={Math.ceil(posts.length / postsPerPage)}
        currentPage={currentPage}
        onPageChange={paginate}
      />
    </>
  );
}
