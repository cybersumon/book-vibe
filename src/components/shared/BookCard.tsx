import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const BookCard = ({book}) => {
    return (
                
            <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Book image */}
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <Image
                  src={book.image}
                  alt={`Cover of ${book.bookName}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur">
                  {book.category}
                </span>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  <span className="text-amber-400">★</span>
                  <span>{book.rating}</span>
                </div>
              </div>

              {/* Book content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-emerald-600">
                  {book.bookName}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  By <span className="text-slate-700">{book.author}</span>
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                  {book.review}
                </p>

                {/* Book information */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4 text-sm">
                  <div>
                    <p className="text-xs text-slate-400">Published</p>
                    <p className="mt-1 font-semibold text-slate-700">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Total pages</p>
                    <p className="mt-1 font-semibold text-slate-700">
                      {book.totalPages} pages
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-slate-400">Publisher</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {book.publisher}
                  </p>
                </div>

                {/* Details button */}
                <Link
                  href={`/books/${book.bookId}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Details

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </Link>
              </div>
            </article>
         
    );
};

export default BookCard;