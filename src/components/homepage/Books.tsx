import Image from 'next/image';
import Link from 'next/link';
import BookCard from '../shared/BookCard';

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

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="bg-slate-50 px-4 py-16 sm:px-6">
            <div className="container mx-auto">
                {/* Section heading */}
                <div className="mb-10 text-center">
                    <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Our Book Collection
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Explore your next great read
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                        Discover timeless classics, inspiring stories, and memorable
                        books selected for every reader.
                    </p>
                </div>

                {/* Books grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {booksData.slice(0,9).map((book) => (<BookCard
                        key={book.bookId}
                        book={book}
                    />

                    ))}
                </div>

                {/* Empty state */}
                {booksData.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                        <h3 className="text-xl font-bold text-slate-800">
                            No books found
                        </h3>
                        <p className="mt-2 text-slate-500">
                            Books will appear here when they become available.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Books;