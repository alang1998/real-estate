import KpiCard from "@/components/KpiCard";

export default function DashboardPage() {
    return (
        <div className="space-y-12">
            {/* Hero Header */}
            <header className="flex justify-between items-end">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
                        Portfolio Overview
                    </p>
                    <h2 className="text-5xl font-extrabold text-on-surface leading-tight tracking-tight font-headline">
                        The Real Estates <br /> at{" "}
                        <span className="text-primary-dim">Amanura</span>
                    </h2>
                </div>
                <div className="hidden lg:flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl">
                    <div className="text-right">
                        <p className="text-xs font-medium text-outline">
                            Market Performance
                        </p>
                        <p className="text-lg font-bold text-on-surface">
                            +12.4%{" "}
                            <span className="text-xs font-normal text-emerald-600">
                                ↑
                            </span>
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">
                            trending_up
                        </span>
                    </div>
                </div>
            </header>

            {/* KPI Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard
                    title="Total Inventory"
                    value="1,248 Units"
                    icon="inventory_2"
                    badgeText="Q3 STATS"
                    progress={72}
                    progressText="72% Booked"
                    type="primary"
                />
                <KpiCard
                    title="Sales Leads"
                    value="482 Active"
                    icon="radar"
                    badgeText="PIPELINE"
                    subtext='<span class="text-emerald-600 font-bold">14 new</span> leads added today from social campaigns.'
                    type="secondary"
                />
                <KpiCard
                    title="Monthly Bookings"
                    value="$4.2M / $5.0M"
                    icon="calendar_month"
                    badgeText="TARGETS"
                    progress={84}
                    progressText="84% Goal"
                    type="tertiary"
                />
                <KpiCard
                    title="Pending Payments"
                    value="18 Invoices"
                    icon="warning"
                    badgeText="URGENT"
                    subtext='Total outstanding amount: <span class="font-bold">$124,500</span>'
                    type="error"
                />
            </div>

            {/* Main Dashboard Layout: 2 Column Asymmetry */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left: Sales Pipeline & Actions */}
                <div className="lg:col-span-2 space-y-10">
                    {/* Quick Actions */}
                    <section className="bg-surface-container-low rounded-[2rem] p-8">
                        <h4 className="text-lg font-bold mb-6 flex items-center gap-2 font-headline">
                            <span className="w-1 h-6 bg-primary rounded-full"></span>
                            Executive Actions
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-4 p-8 bg-surface-container-lowest rounded-2xl hover:bg-primary hover:text-white transition-all group shadow-sm border border-transparent hover:border-primary/10">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                                    person_add
                                </span>
                                <span className="text-sm font-bold">
                                    Add New Lead
                                </span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-4 p-8 bg-surface-container-lowest rounded-2xl hover:bg-primary hover:text-white transition-all group shadow-sm border border-transparent hover:border-primary/10">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                                    apartment
                                </span>
                                <span className="text-sm font-bold">
                                    Book a Unit
                                </span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-4 p-8 bg-surface-container-lowest rounded-2xl hover:bg-primary hover:text-white transition-all group shadow-sm border border-transparent hover:border-primary/10">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">
                                    description
                                </span>
                                <span className="text-sm font-bold">
                                    Generate Sales Order
                                </span>
                            </button>
                        </div>
                    </section>

                    {/* Sales Pipeline Visualization */}
                    <section className="bg-surface-container-lowest rounded-3xl p-10 shadow-[0_20px_40px_rgba(42,52,57,0.04)] border border-outline-variant/10">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h4 className="text-2xl font-extrabold tracking-tight font-headline">
                                    Sales Pipeline
                                </h4>
                                <p className="text-sm text-outline">
                                    Lead conversion velocity across stages
                                </p>
                            </div>
                            <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">
                                <span className="text-xs font-bold text-primary">
                                    Last 30 Days
                                </span>
                                <span className="material-symbols-outlined text-sm">
                                    expand_more
                                </span>
                            </div>
                        </div>
                        <div className="flex items-end gap-4 h-64 w-full px-4">
                            {[
                                {
                                    name: "Discovery",
                                    height: "90%",
                                    fill: "40%",
                                },
                                {
                                    name: "Qualified",
                                    height: "75%",
                                    fill: "60%",
                                },
                                {
                                    name: "Proposal",
                                    height: "60%",
                                    fill: "80%",
                                },
                                { name: "Closing", height: "45%", fill: "95%" },
                            ].map((stage) => (
                                <div
                                    key={stage.name}
                                    className="flex-1 flex flex-col items-center group cursor-pointer"
                                >
                                    <div
                                        className="w-full bg-surface-container-high rounded-t-xl transition-all group-hover:bg-primary/20 relative"
                                        style={{ height: stage.height }}
                                    >
                                        <div
                                            className="absolute inset-x-0 bottom-0 bg-primary/40 rounded-t-xl transition-all group-hover:bg-primary"
                                            style={{ height: stage.fill }}
                                        ></div>
                                    </div>
                                    <span className="mt-4 text-[10px] font-bold text-outline uppercase tracking-widest">
                                        {stage.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Activity Feed */}
                <div className="space-y-8">
                    <section className="bg-surface-container-low rounded-3xl p-8 h-full">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-xl font-bold font-headline">
                                Activity Feed
                            </h4>
                            <button className="text-xs font-bold text-primary hover:underline">
                                View All
                            </button>
                        </div>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Payment Processed",
                                    detail: "Unit A-402, Amanura Heights",
                                    amount: "+$14,200.00",
                                    time: "2 mins ago",
                                    icon: "check_circle",
                                    color: "text-emerald-600",
                                    bg: "bg-emerald-100",
                                },
                                {
                                    title: "New Lead Assigned",
                                    detail: "Michael R. (International Investor)",
                                    time: "45 mins ago",
                                    icon: "person_pin_circle",
                                    color: "text-blue-600",
                                    bg: "bg-blue-100",
                                },
                                {
                                    title: "Unit Booked",
                                    detail: "Villa 72, The Gardens Cluster",
                                    amount: "Contract Pending Signature",
                                    time: "3 hours ago",
                                    icon: "key",
                                    color: "text-amber-600",
                                    bg: "bg-amber-100",
                                },
                                {
                                    title: "Support Ticket",
                                    detail: "Title Transfer Inquiry - Unit B-12",
                                    time: "Yesterday",
                                    icon: "mail",
                                    color: "text-purple-600",
                                    bg: "bg-purple-100",
                                    last: true,
                                },
                            ].map((item, index, arr) => (
                                <div key={index} className="flex gap-4">
                                    <div className="relative">
                                        <div
                                            className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} relative z-10`}
                                        >
                                            <span className="material-symbols-outlined text-sm">
                                                {item.icon}
                                            </span>
                                        </div>
                                        {index < arr.length - 1 && (
                                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-12 bg-outline-variant/20"></div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-outline mb-2">
                                            {item.detail}
                                        </p>
                                        {item.amount && (
                                            <div className="bg-surface-container-lowest px-3 py-2 rounded-lg inline-block shadow-sm">
                                                <p
                                                    className={`text-[10px] font-bold ${item.color}`}
                                                >
                                                    {item.amount}
                                                </p>
                                            </div>
                                        )}
                                        <p className="text-[10px] text-outline mt-2 font-medium">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Featured Property Card */}
                        <div className="mt-12 group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden h-40 mb-4 shadow-lg">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="/images/dashboard.png"
                                    alt="The Obsidian Penthouse"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                                        Property Spotlight
                                    </p>
                                    <p className="text-white font-bold">
                                        The Obsidian Penthouse
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-outline">
                                    Click to view brochure
                                </p>
                                <span className="material-symbols-outlined text-primary text-sm">
                                    arrow_forward
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
