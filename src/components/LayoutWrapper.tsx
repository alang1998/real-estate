"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-on-surface">
            <Sidebar
                isOpen={isSidebarOpen}
                closeSidebarAction={() => setIsSidebarOpen(false)}
            />
            <div className="flex flex-col">
                <Header
                    toggleSidebarAction={() => setIsSidebarOpen(!isSidebarOpen)}
                />
                <main className="md:ml-64 pt-24 px-4 sm:px-6 lg:px-10 pb-12 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
