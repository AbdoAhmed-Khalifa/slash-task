import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className=" max-w-screen px-4 py-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center   sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl tracking-wider">
              <Link href="/">Welcome to slash blog</Link>
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Let&apos;s write a new blog post! 🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring text-sm font-medium"
            >
              Explore Posts
            </Link>

            <Link
              href="/create"
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
