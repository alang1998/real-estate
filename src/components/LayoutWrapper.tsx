import Sidebar from "./Sidebar";
import Header from "./Header";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col">
                <Header />
                <main className="ml-64 pt-24 px-10 pb-12 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
