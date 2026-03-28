import Link from "next/link";

export default function CustomerDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    // Mock data for Adrian Wijaya (ID 1)
    const customer = {
        name: "Adrian Wijaya",
        title: "Tech Entrepreneur & Investor",
        tier: "Gold Tier",
        status: "Lead: New",
        email: "adrian.w@nexus.id",
        phone: "+62 811 9872 441",
        location: "Uluwatu, Bali",
        buyingPower: "$2.4M - $4.0M",
        risk: "Low Risk",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkTnmP6OgxZmamGEseBx0qUzQvQijVDObdQ-HkG98_KMuEyUJs1qj25OfuZf8iRYSDYiX8YLppIkAhjyIM5yI83lng40Gj1ZU1taqALfOU3iQs3Up-yqWvCCaTARde430P-2DluhhcT-qxWYr_H7vV7Y1LP8tmG7wCGUJL1y1vVJ6fV6jN01AR9it_exd6R-ANAI3nuMzg-PPdA9ftaG7ugtNdC6Wn1CDQANJSpIRTe7FExPufZrTxvLlCfmAmTLQEtY_0i2yjKHm4",
    };

    const transactions = [
        {
            name: "Amanura Heights Phase II - Villa B-12",
            date: "14 Oct 2023",
            price: "$1,250,000",
            status: "Booked",
            img: "/images/customer_details.png",
        },
        {
            name: "Ocean Breeze Penthouse 4C",
            date: "02 Oct 2023",
            price: "$890,000",
            status: "Visited",
            img: "/images/transactions.png",
        },
    ];

    const documents = [
        {
            name: "Identity Verification",
            type: "ID Document (KTP)",
            status: "Verified",
            icon: "badge",
        },
        {
            name: "Fiscal Compliance",
            type: "Tax Record (NPWP)",
            status: "Verified",
            icon: "description",
        },
        {
            name: "Proof of Funds",
            type: "Financial Proof",
            status: "Pending",
            icon: "account_balance",
        },
    ];

    const logs = [
        {
            title: "Follow-up Call: Financial Discussion",
            date: "Yesterday, 14:20",
            text: "Discussed potential payment plans for Villa B-12. Adrian expressed interest in the 24-month installment option. Mentioned Proof of Funds is being processed by his bank.",
            icon: "call",
            color: "bg-primary",
        },
        {
            title: "On-site Property Tour",
            date: "14 Oct 2023, 10:00",
            text: "Conducted a physical walkthrough of Amanura Heights Phase II. Client was particularly impressed with the western sunset views from the terrace.",
            icon: "visibility",
            color: "bg-secondary",
        },
        {
            title: "Initial Inquiry - Website Form",
            date: "28 Sep 2023, 23:15",
            text: '"Hi, I\'m interested in the Uluwatu developments. Looking for a 4-bedroom villa with private beach access. Please send brochures."',
            icon: "mail",
            color: "bg-surface-container-highest",
            italic: true,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12">
            {/* Header Editorial Section */}
            <div className="flex justify-between items-end">
                <div>
                    <nav className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-outline mb-3">
                        <Link
                            href="/crm"
                            className="hover:text-primary transition-colors"
                        >
                            CRM
                        </Link>
                        <span className="material-symbols-outlined text-[10px]">
                            chevron_right
                        </span>
                        <span className="text-primary">Customer Profile</span>
                    </nav>
                    <h2 className="text-4xl font-extrabold text-on-surface tracking-tight font-headline">
                        {customer.name}
                    </h2>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-lg border border-outline-variant/30 text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-all">
                        Export Portfolio
                    </button>
                    <button className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-semibold text-sm hover:bg-primary-dim transition-all shadow-sm">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Bento Layout Content */}
            <div className="grid grid-cols-12 gap-8 items-start">
                {/* Left Column: Profile Card */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(42,52,57,0.06)] border border-outline-variant/5">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <img
                                alt={customer.name}
                                className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500"
                                src={customer.image}
                            />
                            <div className="absolute -bottom-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-sm">
                                {customer.tier}
                            </div>
                        </div>
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-on-surface font-headline">
                                {customer.name}
                            </h3>
                            <p className="text-sm text-outline mb-4">
                                {customer.title}
                            </p>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                {customer.status}
                            </span>
                        </div>
                        <div className="space-y-6 pt-6 border-t border-surface-container">
                            {[
                                {
                                    label: "Email Address",
                                    value: customer.email,
                                    icon: "mail",
                                },
                                {
                                    label: "Phone Number",
                                    value: customer.phone,
                                    icon: "phone",
                                },
                                {
                                    label: "Preferred Area",
                                    value: customer.location,
                                    icon: "location_on",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-xl">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-outline uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium text-on-surface">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden shadow-lg shadow-primary/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">
                            Purchasing Power
                        </p>
                        <h4 className="text-3xl font-extrabold mb-6 font-headline">
                            {customer.buyingPower}
                        </h4>
                        <div className="flex justify-between items-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                            <span className="text-xs font-medium">
                                Risk Assessment
                            </span>
                            <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-100 rounded uppercase tracking-widest">
                                {customer.risk}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="col-span-12 lg:col-span-8 space-y-8">
                    <div className="bg-surface-container-low p-8 rounded-xl border border-white content-center">
                        <div className="flex justify-between items-center mb-8">
                            <h4 className="text-lg font-bold text-on-surface font-headline">
                                Transaction History
                            </h4>
                            <button className="text-xs font-bold text-primary flex items-center gap-1 uppercase tracking-widest hover:underline">
                                View All{" "}
                                <span className="material-symbols-outlined text-sm">
                                    trending_flat
                                </span>
                            </button>
                        </div>
                        <div className="space-y-4">
                            {transactions.map((t, i) => (
                                <div
                                    key={i}
                                    className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-md transition-all flex items-center justify-between border border-outline-variant/5"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-20 h-16 rounded-lg overflow-hidden bg-surface-container">
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                src={t.img}
                                                alt={t.name}
                                            />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                                                {t.name}
                                            </h5>
                                            <p className="text-xs text-outline flex items-center gap-1 mt-1">
                                                <span className="material-symbols-outlined text-xs">
                                                    calendar_today
                                                </span>{" "}
                                                Viewed {t.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-on-surface mb-1">
                                            {t.price}
                                        </p>
                                        <span
                                            className={`text-[10px] font-extrabold uppercase px-2 py-1 rounded ${t.status === "Booked" ? "bg-primary/10 text-primary" : "bg-surface-container-highest text-outline"}`}
                                        >
                                            {t.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {documents.map((doc, i) => (
                            <div
                                key={i}
                                className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <span className="material-symbols-outlined text-primary mb-4">
                                    {doc.icon}
                                </span>
                                <p className="text-[10px] font-bold uppercase text-outline tracking-wider mb-1">
                                    {doc.type}
                                </p>
                                <h5 className="font-bold text-sm mb-4 text-on-surface leading-tight">
                                    {doc.name}
                                </h5>
                                <span
                                    className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${doc.status === "Verified" ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50"}`}
                                >
                                    <span
                                        className="material-symbols-outlined text-xs"
                                        style={{
                                            fontVariationSettings: "'FILL' 1",
                                        }}
                                    >
                                        {doc.status === "Verified"
                                            ? "check_circle"
                                            : "pending"}
                                    </span>
                                    {doc.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
                        <div className="flex justify-between items-center mb-10">
                            <h4 className="text-lg font-bold text-on-surface font-headline">
                                Communication Log
                            </h4>
                            <button className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-low transition-colors text-primary">
                                <span className="material-symbols-outlined text-sm">
                                    add
                                </span>
                            </button>
                        </div>
                        <div className="relative space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-highest">
                            {logs.map((log, i) => (
                                <div key={i} className="relative pl-10">
                                    <div
                                        className={`absolute left-0 top-1 w-6 h-6 rounded-full ${log.color} ${log.color === "bg-primary" || log.color === "bg-secondary" ? "text-white" : "text-outline"} flex items-center justify-center ring-4 ring-white z-10 shadow-sm`}
                                    >
                                        <span className="material-symbols-outlined text-[14px]">
                                            {log.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h6 className="font-bold text-sm text-on-surface">
                                                {log.title}
                                            </h6>
                                            <span className="text-[10px] font-medium text-outline">
                                                {log.date}
                                            </span>
                                        </div>
                                        <p
                                            className={`text-sm text-outline leading-relaxed ${log.italic ? "italic" : ""}`}
                                        >
                                            {log.text}
                                        </p>
                                        {i === 0 && (
                                            <div className="mt-4 flex items-center gap-2 pt-2 border-t border-outline-variant/5">
                                                <img
                                                    alt="Agent"
                                                    className="w-6 h-6 rounded-full object-cover grayscale"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBlLfP-xsGKKMFpgaxXDqWW6l59HnnLlhryHOldafSnOTlzpj2Q5dgzJG4NZ-EPAOz5DfD_juyU2P3_IIw-ZmH4xAKIzvKJwQS84g5LPqhQ8qKV4NHmRXrECsTpyLYAiD9_us_hclyHjJUEwxvScE7DFRcg7tqhJB8TJ9qXmG3yuHwWAhF2whJ6rv_LQ_FJW5BmSvO31ovzPjj_GOA0_T4hm-lX5KynGQlkbB-6bsr6jTE5UZgvExHRGDBIZsDPcNbvNMaBx-zmaNe"
                                                />
                                                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                                                    Logged by Sarah J. (Senior
                                                    Agent)
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
