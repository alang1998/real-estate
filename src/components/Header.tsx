"use client";

export default function Header({
    toggleSidebarAction,
}: {
    toggleSidebarAction?: () => void;
}) {
    return (
        <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 z-40 bg-background/70 backdrop-blur-md flex justify-between items-center px-4 sm:px-8 shadow-[0_20px_40px_rgba(42,52,57,0.06)] border-b border-outline-variant/5">
            <div className="flex items-center gap-2 sm:gap-4 flex-1">
                <button
                    onClick={toggleSidebarAction}
                    className="p-2 md:hidden text-primary/60 hover:text-on-surface transition-colors"
                    aria-label="Toggle Sidebar"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div className="relative w-full max-w-md group hidden sm:block">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
                        search
                    </span>
                    <input
                        className="w-full bg-surface-container-highest/50 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/40 transition-all outline-none"
                        placeholder="Search properties, leads or documents..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <button className="text-primary/60 hover:text-on-surface transition-all scale-95 hover:scale-100 duration-200">
                        <span className="material-symbols-outlined">
                            notifications
                        </span>
                    </button>
                    <button className="text-primary/60 hover:text-on-surface transition-all scale-95 hover:scale-100 duration-200">
                        <span className="material-symbols-outlined">mail</span>
                    </button>
                </div>
                <div className="h-6 w-px bg-outline-variant/30"></div>
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-on-surface">
                            Alex Thompson
                        </p>
                        <p className="text-[10px] text-outline uppercase tracking-tighter">
                            Portfolio Manager
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-high overflow-hidden shadow-sm">
                        <img
                            alt="User Avatar"
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkBIkExkoil8VEAudiJuWEKxdrLQnnqXhQAZnKbDHcLKm5HtLxB69Zpn_-WI7vFsf17AmaFqVTLfzbcWUOtm7WWCR_wd57DS8ntn1oAJ9j0xxZkXEDG5BGqndMqFx8Ne4zHz2wmntB3a550pNzBnNg9tlVdgU4Wgmj8QZsDxX9DRT6ACLrb3pD8kLZ-vkWO5Chpxn3ReQefeG-oi1sNRQnSiMY3caXMSNbf2xxkeTddNw3ljcY4f_3-h2wozgyrRz5Lned7Nvpb6Lv"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
