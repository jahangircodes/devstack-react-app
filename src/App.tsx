import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Header from './components/Navbar';
import StackSidebar from './components/StackSidebar';
import TechCard from './components/TechCard';
import type { Technology } from './types/technology';

function TechFallback() {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm animate-pulse">
            <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-xl bg-slate-200" />
                <div className="h-5 w-16 rounded-full bg-slate-200" />
            </div>
            <div className="mt-5 h-4 w-28 rounded bg-slate-200" />
            <div className="mt-3 h-3 w-full rounded bg-slate-200" />
            <div className="mt-2 h-3 w-4/5 rounded bg-slate-200" />
            <div className="mt-5 flex gap-2">
                <span className="h-8 w-20 rounded bg-slate-200" />
                <span className="h-8 w-20 rounded bg-slate-200" />
            </div>
        </div>
    );
}

export default function App() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
    const [isMobileStackOpen, setIsMobileStackOpen] = useState<boolean>(false);


    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                setIsLoading(true);

                const response = await fetch('/technologies.json');
                const data = await response.json();
                // return data;


                setTimeout(() => {
                    setTechnologies(data);
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching technologies:', error);
                setIsLoading(false);
            }
        };

        fetchTechnologies();
    }, []);


    const handleAddToStack = (tech: Technology) => {
        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
        }
    };


    const handleRemoveFromStack = (id: string) => {
        setSelectedStack(selectedStack.filter((tech) => tech.id !== id));
    };


    const handleRemoveAll = () => {
        setSelectedStack([]);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20 lg:pb-0 container m-auto">
            <Header />

            <HeroSection />


            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="mb-6 sm:mb-8 text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Explore the <span className="text-[#EC4899]">Technologies</span>
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">

                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

                        {isLoading
                            ? Array.from({ length: 12 }).map((_, index) => (
                                <TechFallback key={index} />
                            ))
                            : technologies.map((tech) => {
                                const isAdded = selectedStack.some((item) => item.id === tech.id);
                                return (
                                    <TechCard
                                        key={tech.id}
                                        tech={tech}
                                        isAdded={isAdded}
                                        onAddToStack={handleAddToStack}
                                    />
                                );
                            })}
                    </div>


                    <StackSidebar
                        selectedStack={selectedStack}
                        onRemoveFromStack={handleRemoveFromStack}
                        onRemoveAll={handleRemoveAll}
                        isMobileStackOpen={isMobileStackOpen}
                        setIsMobileStackOpen={setIsMobileStackOpen}
                    />
                </div>
            </main>


            <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
                <button
                    onClick={() => setIsMobileStackOpen(true)}
                    className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl shadow-lg flex items-center justify-between border border-slate-700"
                >
                    <span className="text-xs font-semibold">
                        Your Stack ({selectedStack.length})
                    </span>
                    <span className="text-xs bg-pink-600 px-2.5 py-1 rounded-full font-medium">
                        View Selected
                    </span>
                </button>
            </div>


            <Footer />
        </div>
    );
}