import Link from 'next/link';

type Post = {
  userId: Number;
  id: string;
  title: string;
  body: string;
};
export default function Card({ id, title, body }: Post) {
  return (
    <Link
      href={`/post/${id}`}
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-md hover:translate-y-1 transition-all ease-in-out"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3
            title={title}
            className="text-lg font-bold text-gray-900 sm:text-xl "
          >
            {title.length > 25 ? `${title.substring(0, 20)}...` : title}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">
          {body.substring(0, 80)}...
        </p>
      </div>
    </Link>
  );
}
