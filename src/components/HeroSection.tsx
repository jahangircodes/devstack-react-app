import bannerImage from '../assets/banner-stack.png';

export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                    Build Your Ideal <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-600">
                        Development Stack
                    </span>
                </h1>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
                    <button className="w-full sm:w-auto bg-linear-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-md font-medium text-xs sm:text-sm shadow-md hover:opacity-95 transition cursor-pointer">
                        Explore Technologies
                    </button>
                    <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md font-medium text-xs sm:text-sm hover:bg-slate-100 transition cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-4 md:mt-0">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                    <img
                        src={bannerImage}
                        alt="Dev Stack Illustration"
                        className="w-full h-full object-contain drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}

