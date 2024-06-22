import { getPostById } from '@/app/_lib/post-data';
import { Post } from '@/app/_utils/postType';
import Image from 'next/image';

export default async function page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const { body, title }: Post = await getPostById(postId);
  return (
    <section className="mb-20">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <Image
              alt=""
              fill
              src="/blogImg.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-lg text-gray-600">
              <p>{body}</p>

              <p>{body}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
