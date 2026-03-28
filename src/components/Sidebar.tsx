"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Inventory", href: "/", icon: "domain" },
    { name: "CRM", href: "/crm", icon: "group" },
    { name: "Transactions", href: "/transactions", icon: "receipt_long" },
    { name: "Finance", href: "#", icon: "payments" },
];

export default function Sidebar({
    isOpen = false,
    closeSidebarAction,
}: {
    isOpen?: boolean;
    closeSidebarAction?: () => void;
}) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={closeSidebarAction}
                />
            )}
            <aside
                className={`fixed inset-y-0 left-0 flex flex-col w-64 py-6 px-4 bg-surface-container-low border-r border-outline-variant/10 h-screen z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="flex items-center gap-3 px-2 mb-10">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-white"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            domain
                        </span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-on-surface font-headline">
                            Amanura
                        </h1>
                        <p className="text-[10px] font-medium uppercase tracking-widest text-primary/60">
                            Real Estate Management
                        </p>
                    </div>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            (item.href !== "/" &&
                                pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                    isActive
                                        ? "text-primary font-semibold bg-surface-container-lowest shadow-sm"
                                        : "text-primary/70 hover:text-on-surface hover:bg-surface-container-high/50"
                                }`}
                            >
                                <span
                                    className={`material-symbols-outlined ${isActive ? "text-primary" : ""}`}
                                    style={
                                        isActive
                                            ? {
                                                  fontVariationSettings:
                                                      "'FILL' 1",
                                              }
                                            : {}
                                    }
                                >
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto space-y-2 pt-6 border-t border-outline-variant/10">
                    <button className="w-full mb-6 bg-primary text-on-primary py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dim transition-all shadow-md active:scale-[0.98]">
                        <span className="material-symbols-outlined text-sm">
                            add
                        </span>
                        <span className="text-sm font-semibold">
                            New Property
                        </span>
                    </button>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 text-primary/70 hover:text-on-surface transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 text-primary/70 hover:text-on-surface transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            help_outline
                        </span>
                        <span className="text-sm font-medium">Support</span>
                    </Link>
                </div>
            </aside>
        </>
    );
}
