import { Suspense } from 'react';
import Hero from './_components/Hero';
import PostsSection from './_components/PostsSection';
import Spinner from './_components/Spinner';
export default function Home() {
  return (
    <main className="mx-auto container">
      <Hero />
      <Suspense fallback={<Spinner />}>
        <PostsSection />
      </Suspense>
    </main>
  );
}
