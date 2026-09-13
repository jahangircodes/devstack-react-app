export default function TechFallback() {
    return (
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 animate-pulse flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="w-8 h-8 bg-slate-200 rounded-md"></div>
                    <div className="w-12 h-4 bg-slate-200 rounded-full"></div>
                </div>
                <div className="h-5 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-full mb-1"></div>
                <div className="h-3 bg-slate-200 rounded w-4/5"></div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="h-3 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-9 bg-slate-200 rounded-md w-full"></div>
            </div>
        </div>
    );
}