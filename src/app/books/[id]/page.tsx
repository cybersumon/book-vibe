import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface IbookDetailsprops {
    params: Promise<{
        id: string;
    }>;
}

interface Book {
    bookId: number;
    bookName: string;
    author: string;
    image: string;
    review: string;
    totalPages: number;
    rating: number;
    category: string;
    tags: string[];
    publisher: string;
    yearOfPublishing: number;
}

const getBooks = async (): Promise<Book[]> => {
    const response = await fetch('http://localhost:3000/booksData.json', {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to load books');
    }

    return response.json();
};


const BookDetailspage = async ({ params }: IbookDetailsprops) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: any) => book.bookId == id);
    return (
  <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-10 sm:px-6 lg:py-16">
    <div className="container mx-auto max-w-6xl">
      {/* Back button */}
      <Link
        href="/books"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m6 6-6-6 6-6"
          />
        </svg>

        Back to Books
      </Link>

      {/* Book details card */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
        <div className="grid lg:grid-cols-[380px_1fr]">
          {/* Book cover section */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100 via-teal-50 to-slate-100 p-8 sm:p-12">
            {/* Decorative shapes */}
            <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-emerald-300/30 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-teal-300/30 blur-3xl" />

            <div className="relative h-[430px] w-full max-w-[290px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
              <Image
                src={book.image}
                alt={`Cover of ${book.bookName}`}
                fill
                priority
                sizes="(max-width: 1024px) 290px, 380px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Book information */}
          <div className="flex flex-col p-6 sm:p-10 lg:p-12">
            {/* Category and rating */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                {book.category}
              </span>

              <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
                <span className="text-lg text-amber-400">★</span>

                <span className="font-bold text-slate-800">
                  {book.rating}
                </span>

                <span className="text-sm text-slate-400">/ 5</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-base text-slate-500 sm:text-lg">
              By{' '}
              <span className="font-semibold text-emerald-600">
                {book.author}
              </span>
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-slate-200" />

            {/* Review */}
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                About this book
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {book.review}
              </p>
            </div>

            {/* Book information cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"
                    />
                  </svg>
                </div>

                <p className="text-xs font-medium text-slate-400">
                  Published
                </p>

                <p className="mt-1 font-bold text-slate-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Zm0 0V6"
                    />
                  </svg>
                </div>

                <p className="text-xs font-medium text-slate-400">
                  Total pages
                </p>

                <p className="mt-1 font-bold text-slate-800">
                  {book.totalPages} pages
                </p>
              </div>

              <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6m-6 4h6m-6 4h6"
                    />
                  </svg>
                </div>

                <p className="text-xs font-medium text-slate-400">
                  Publisher
                </p>

                <p className="mt-1 font-bold text-slate-800">
                  {book.publisher}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7Z" />
                </svg>

                Listen Now
              </button>

              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 4h12v17l-6-4-6 4V4Z"
                  />
                </svg>

                Add to Library
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
);
};

export default BookDetailspage;