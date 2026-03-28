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
                <div className="hidden lg:flex items-center gap-6 bg-surface-container-low p-4 rounded-2xl">
                    <div className="text-right">
                        <p className="text-xs font-medium text-outline mb-1">
                            Market Performance
                        </p>
                        <p className="text-lg font-bold text-on-surface flex items-center justify-end gap-1">
                            +12.4%{" "}
                            <span className="text-xs font-normal text-emerald-600">
                                ↑
                            </span>
                        </p>
                    </div>
                    {/* Small Sparkline */}
                    <svg
                        width="40"
                        height="20"
                        className="text-emerald-500 overflow-visible"
                    >
                        <path
                            d="M 0 15 L 8 18 L 16 10 L 24 12 L 32 4 L 40 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle cx="40" cy="6" r="2.5" fill="currentColor" />
                    </svg>
                    <div className="w-11 h-11 rounded-full border-4 border-white bg-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-xl">
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
                        <div className="relative h-64 w-full px-4">
                            {/* SVG Chart Background (Grid Lines) */}
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{
                                    paddingBottom: "40px",
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                }}
                            >
                                {[0, 25, 50, 75, 100].map((tick) => (
                                    <g key={tick}>
                                        <line
                                            x1="0"
                                            y1={`${100 - tick}%`}
                                            x2="100%"
                                            y2={`${100 - tick}%`}
                                            stroke="currentColor"
                                            className="text-outline-variant/10"
                                            strokeDasharray="4 4"
                                        />
                                        <text
                                            x="-5"
                                            y={`${100 - tick}%`}
                                            className="text-[8px] fill-outline font-bold"
                                            textAnchor="end"
                                            alignmentBaseline="middle"
                                        >
                                            {tick}%
                                        </text>
                                    </g>
                                ))}
                            </svg>

                            <div
                                className="flex items-end gap-6 h-full w-full relative z-10"
                                style={{ paddingBottom: "40px" }}
                            >
                                {[
                                    {
                                        name: "Discovery",
                                        height: "95%",
                                        fill: "85%",
                                        leads: 284,
                                        value: "$12.4M",
                                        color: "fill-blue-400",
                                        bg: "fill-blue-100",
                                    },
                                    {
                                        name: "Qualified",
                                        height: "80%",
                                        fill: "65%",
                                        leads: 142,
                                        value: "$8.2M",
                                        color: "fill-indigo-400",
                                        bg: "fill-indigo-100",
                                    },
                                    {
                                        name: "Proposal",
                                        height: "65%",
                                        fill: "45%",
                                        leads: 68,
                                        value: "$4.1M",
                                        color: "fill-purple-400",
                                        bg: "fill-purple-100",
                                    },
                                    {
                                        name: "Negotiation",
                                        height: "50%",
                                        fill: "30%",
                                        leads: 32,
                                        value: "$2.8M",
                                        color: "fill-pink-400",
                                        bg: "fill-pink-100",
                                    },
                                    {
                                        name: "Closing",
                                        height: "35%",
                                        fill: "15%",
                                        leads: 14,
                                        value: "$1.2M",
                                        color: "fill-emerald-400",
                                        bg: "fill-emerald-100",
                                    },
                                ].map((stage) => (
                                    <div
                                        key={stage.name}
                                        className="flex-1 flex flex-col items-center group cursor-pointer relative h-full justify-end"
                                    >
                                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-on-surface text-surface-container-lowest px-3 py-1.5 rounded-lg text-[10px] font-bold z-20 shadow-xl whitespace-nowrap pointer-events-none">
                                            {stage.leads} Leads • {stage.value}
                                        </div>

                                        <svg
                                            className="w-full"
                                            style={{ height: stage.height }}
                                        >
                                            <rect
                                                width="100%"
                                                height="100%"
                                                rx="12"
                                                className="fill-surface-container-high group-hover:fill-surface-container-highest transition-colors"
                                            />
                                            <rect
                                                width="100%"
                                                height={stage.fill}
                                                y={`${100 - parseFloat(stage.fill)}%`}
                                                rx="12"
                                                className={`${stage.color} opacity-40 group-hover:opacity-100 transition-all`}
                                            />
                                        </svg>

                                        <div className="absolute top-full mt-4 text-center w-full">
                                            <span className="block text-[10px] font-bold text-on-surface uppercase tracking-widest whitespace-nowrap">
                                                {stage.name}
                                            </span>
                                            <span className="text-[9px] font-medium text-outline">
                                                {stage.leads} leads
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
