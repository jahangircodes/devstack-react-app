import type { Technology } from '../types/technology';

interface StackSidebarProps {
    selectedStack: Technology[];
    onRemoveFromStack: (id: string) => void;
    onRemoveAll: () => void;
    isMobileStackOpen: boolean;
    setIsMobileStackOpen: (open: boolean) => void;
}

export default function StackSidebar({
    selectedStack,
    onRemoveFromStack,
    onRemoveAll,
    isMobileStackOpen,
    setIsMobileStackOpen,
}: StackSidebarProps) {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm sticky top-6">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">Your Stack</h3>
                    <p className="text-xs text-slate-400 mb-4">{selectedStack.length} Technology Selected</p>

                    {selectedStack.length === 0 ? (
                        <p className="text-xs text-slate-400 italic py-6 text-center border border-dashed border-slate-200 rounded-lg">
                            Your stack is empty.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {selectedStack.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50">
                                    <div className="flex items-center gap-2">
                                        <img src={item.iconUrl} alt={item.name} className="w-4 h-4" />
                                        <span className="text-xs font-semibold text-slate-700">{item.name}</span>
                                    </div>
                                    <button
                                        onClick={() => onRemoveFromStack(item.id)}
                                        className="text-slate-400 hover:text-red-500 text-xs px-1"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            <button
                                onClick={onRemoveAll}
                                className="w-full mt-4 py-2 border border-pink-600 text-pink-600 hover:bg-pink-50 text-xs font-semibold rounded-md transition"
                            >
                                Remove All
                            </button>
                        </div>
                    )}
                </div>
            </aside>

            {/* Mobile Drawer */}
            {isMobileStackOpen && (
                <div className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end flex-col">
                    <div className="bg-white rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-300">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                            <div>
                                <h3 className="font-bold text-slate-900 text-base">Your Stack</h3>
                                <p className="text-xs text-slate-400">{selectedStack.length} Technology Selected</p>
                            </div>
                            <button
                                onClick={() => setIsMobileStackOpen(false)}
                                className="bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm"
                            >
                                ✕
                            </button>
                        </div>

                        {selectedStack.length === 0 ? (
                            <p className="text-xs text-slate-400 italic py-8 text-center border border-dashed border-slate-200 rounded-lg">
                                Your stack is empty.
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {selectedStack.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-pink-50/50">
                                        <div className="flex items-center gap-2">
                                            <img src={item.iconUrl} alt={item.name} className="w-5 h-5" />
                                            <span className="text-xs font-semibold text-slate-800">{item.name}</span>
                                        </div>
                                        <button
                                            onClick={() => onRemoveFromStack(item.id)}
                                            className="text-pink-600 font-bold hover:bg-pink-100 px-2 py-1 rounded text-xs"
                                        >
                                            ✕ Remove
                                        </button>
                                    </div>
                                ))}

                                <button
                                    onClick={onRemoveAll}
                                    className="w-full mt-4 py-2.5 border border-pink-600 text-pink-600 hover:bg-pink-50 text-xs font-semibold rounded-md transition"
                                >
                                    Remove All
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}