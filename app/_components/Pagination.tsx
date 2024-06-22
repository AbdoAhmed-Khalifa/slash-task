'use client';
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <ol className="flex justify-center gap-1 text-sm font-medium my-5">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="disabled:cursor-not-allowed inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => (
        <li key={i}>
          <button
            onClick={() => onPageChange(i + 1)}
            className={`block rounded border ${
              currentPage === i + 1
                ? 'block size-8 rounded border-blue-600 bg-blue-600 text-white'
                : 'block size-8 rounded border border-gray-100 bg-white text-gray-900'
            } text-center leading-8`}
          >
            {i + 1}
          </button>
        </li>
      ))}

      <li>
        <button
          disabled={currentPage === 10}
          onClick={() => onPageChange(currentPage + 1)}
          className="disabled:cursor-not-allowed inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>
  );
}
