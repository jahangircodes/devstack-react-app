import type { Technology } from '../types/technology';

interface TechCardProps {
    tech: Technology;
    isAdded: boolean;
    onAddToStack: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAddToStack }: TechCardProps) {
    return (
        <div
            className={`bg-white rounded-xl p-4 sm:p-5 border transition flex flex-col justify-between ${isAdded ? 'border-pink-500 shadow-sm' : 'border-slate-200 shadow-sm hover:shadow-md'
                }`}
        >
            <div>
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <img src={tech.iconUrl} alt={tech.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    {tech.badge && (
                        <span className="text-[10px] sm:text-[11px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
                            {tech.badge}
                        </span>
                    )}
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">{tech.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 sm:mt-2 line-clamp-3 leading-relaxed">
                    {tech.description}
                </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-slate-400 mb-3 sm:mb-4">
                    <span>{tech.category}</span>
                    <span className="hidden xs:inline">{tech.level}</span>
                    <span className="font-semibold text-amber-500">★ {tech.rating}</span>
                </div>

                <button
                    onClick={() => onAddToStack(tech)}
                    disabled={isAdded}
                    className={`w-full py-2 sm:py-2.5 rounded-md text-xs font-semibold transition flex items-center justify-center gap-1 ${isAdded
                            ? 'bg-transparent text-pink-600 border border-pink-200 cursor-not-allowed'
                            : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                        }`}
                >
                    {isAdded ? (
                        <>
                            <span className="text-pink-600 font-bold">✓</span> Added to Stack
                        </>
                    ) : (
                        'Add to Stack'
                    )}
                </button>
            </div>
        </div>
    );
}