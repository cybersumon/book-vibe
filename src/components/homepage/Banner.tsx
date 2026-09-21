import Image from 'next/image';
import bannerImage from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:py-16">
      <div className="relative container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-lime-100 px-6 py-10 shadow-xl shadow-emerald-950/10 sm:px-10 lg:px-16 lg:py-14">
        
        {/* Decorative background */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-lime-300/30 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Banner content */}
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
              Discover your next great read
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Books to freshen up
              <span className="block bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                your bookshelf
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              Explore inspiring stories, timeless classics, and new
              favourites carefully selected for every kind of reader.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="btn border-0 bg-emerald-600 px-8 text-white shadow-lg shadow-emerald-600/25 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700"
              >
                View the Books
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
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Banner image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-4 rotate-3 rounded-3xl bg-emerald-500/20" />

            <Image
              src={bannerImage}
              alt="A collection of books"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;