const bookings = [
    {
        id: "#SO-99210",
        name: "Emerald Heights - Penthouse B",
        client: "Julianne Vought",
        price: "$2,450,000",
        status: "IN PROGRESS",
        img: "/images/dashboard.png",
    },
    {
        id: "#SO-99208",
        name: "The Azure - Villa 4",
        client: "Marcus Chen",
        price: "$1,820,000",
        status: "VERIFICATION",
        img: "/images/customer_list.png",
    },
    {
        id: "#SO-99194",
        name: "Opal Reserve - Lot 12",
        client: "Sarah Al-Fayed",
        price: "$3,100,000",
        status: "SCHEDULE GENERATED",
        img: "/images/transactions.png",
        active: true,
    },
];

const invoices = [
    {
        id: "#INV-8821",
        property: "Emerald Heights B",
        milestone: "Milestone 1",
        date: "Oct 12, 2023",
        price: "$285,000",
        status: "OVERDUE",
    },
    {
        id: "#INV-8822",
        property: "The Azure 4",
        milestone: "Booking Fee",
        date: "Oct 28, 2023",
        price: "$50,000",
        status: "UNPAID",
    },
    {
        id: "#INV-8819",
        property: "The Azure 1",
        milestone: "DP Final",
        date: "Oct 05, 2023",
        price: "$120,000",
        status: "PAID",
    },
];

export default function TransactionsPage() {
    return (
        <div className="space-y-12 pb-12">
            {/* Header Section */}
            <header className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">
                        Transaction Hub
                    </h2>
                    <p className="text-outline">
                        Overview of Amanura's financial ecosystem and ongoing
                        sales pipelines.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-surface-container-lowest text-primary font-semibold rounded-lg shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all uppercase tracking-widest text-xs">
                        Export Ledger
                    </button>
                    <button className="px-6 py-2.5 bg-primary text-on-primary font-semibold rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center gap-2 uppercase tracking-widest text-xs">
                        <span className="material-symbols-outlined text-sm">
                            add_shopping_cart
                        </span>
                        Create Order
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-8">
                {/* Bookings & Sales Orders List */}
                <section className="col-span-12 xl:col-span-7 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold font-headline">
                            Recent Bookings
                        </h3>
                        <button className="text-sm font-semibold text-primary hover:underline">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer border-l-4 ${booking.active ? "border-primary" : "border-transparent"}`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-4">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container">
                                            <img
                                                alt={booking.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                src={booking.img}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-primary tracking-wider uppercase mb-1">
                                                {booking.id}
                                            </p>
                                            <h4 className="font-bold text-lg font-headline text-on-surface leading-tight">
                                                {booking.name}
                                            </h4>
                                            <p className="text-sm text-outline">
                                                Client: {booking.client}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-extrabold font-headline text-on-surface">
                                            {booking.price}
                                        </p>
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold mt-2 ${booking.status === "SCHEDULE GENERATED" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}
                                        >
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Payment Schedule Generator */}
                <section className="col-span-12 xl:col-span-5 bg-surface-container-low rounded-3xl p-8 flex flex-col shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary p-2 bg-surface-container-lowest rounded-lg shadow-sm">
                            event_repeat
                        </span>
                        <h3 className="text-xl font-bold font-headline">
                            Schedule Generator
                        </h3>
                    </div>
                    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm mb-8 border border-outline-variant/10">
                        <div className="mb-6">
                            <label className="text-[10px] font-bold text-outline tracking-widest uppercase mb-2 block">
                                Payment Scheme
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="py-2.5 text-xs font-bold bg-primary text-white rounded-lg">
                                    KPR
                                </button>
                                <button className="py-2.5 text-xs font-bold bg-surface-container-lowest text-primary rounded-lg border border-outline-variant/10">
                                    Cash
                                </button>
                                <button className="py-2.5 text-xs font-bold bg-surface-container-lowest text-primary rounded-lg border border-outline-variant/10">
                                    Installment
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    label: "Down Payment (20%)",
                                    value: "$620,000",
                                },
                                { label: "Tenure", value: "12 Months" },
                                {
                                    label: "Monthly Installment",
                                    value: "$206,666",
                                    last: true,
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex justify-between items-center py-3 ${item.last ? "" : "border-b border-outline-variant/5"}`}
                                >
                                    <span className="text-sm font-medium text-outline">
                                        {item.label}
                                    </span>
                                    <span className="text-sm font-bold text-on-surface">
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-64">
                        <h4 className="text-xs font-bold text-outline uppercase tracking-wider mb-4">
                            Projected Milestones
                        </h4>
                        <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
                            {[
                                {
                                    step: 1,
                                    title: "Initial Booking Fee",
                                    detail: "Due: Oct 24, 2023 • $50,000",
                                    active: true,
                                },
                                {
                                    step: 2,
                                    title: "DP Milestone 1",
                                    detail: "Due: Nov 24, 2023 • $285,000",
                                },
                                {
                                    step: 3,
                                    title: "DP Milestone 2",
                                    detail: "Due: Dec 24, 2023 • $285,000",
                                },
                            ].map((m) => (
                                <div
                                    key={m.step}
                                    className="flex gap-4 relative"
                                >
                                    <div
                                        className={`w-6 h-6 rounded-full ${m.active ? "bg-primary text-white" : "bg-surface-container-highest text-primary"} flex items-center justify-center text-[10px] z-10 shrink-0 font-bold`}
                                    >
                                        {m.step}
                                    </div>
                                    <div className="pb-4">
                                        <p
                                            className={`text-sm font-bold ${m.active ? "text-on-surface" : "text-outline"}`}
                                        >
                                            {m.title}
                                        </p>
                                        <p className="text-xs text-outline">
                                            {m.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="mt-8 w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dim transition-all active:scale-[0.98] uppercase tracking-widest text-sm">
                        Finalize & Send Schedule
                    </button>
                </section>

                {/* Invoices Tracking */}
                <section className="col-span-12 grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-xl font-bold font-headline">
                                    Recent Invoices
                                </h3>
                                <p className="text-sm text-outline">
                                    Track payment health across active sales.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-error/10 text-error uppercase tracking-tighter">
                                    3 Overdue
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-secondary/10 text-secondary uppercase tracking-tighter">
                                    12 Pending
                                </span>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-y-3">
                                <thead>
                                    <tr className="text-[10px] uppercase tracking-widest text-outline font-bold">
                                        <th className="pb-2 px-2">
                                            Invoice ID
                                        </th>
                                        <th className="pb-2">Property</th>
                                        <th className="pb-2">Due Date</th>
                                        <th className="pb-2">Amount</th>
                                        <th className="pb-2">Status</th>
                                        <th className="pb-2 text-right">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((inv) => (
                                        <tr
                                            key={inv.id}
                                            className="group hover:bg-surface-container-low/50 transition-colors"
                                        >
                                            <td className="py-4 px-2 font-bold text-sm text-primary">
                                                {inv.id}
                                            </td>
                                            <td className="py-4 text-on-surface">
                                                <p className="text-sm font-semibold">
                                                    {inv.property}
                                                </p>
                                                <p className="text-[10px] text-outline">
                                                    {inv.milestone}
                                                </p>
                                            </td>
                                            <td className="py-4 text-sm font-medium text-outline">
                                                {inv.date}
                                            </td>
                                            <td className="py-4 font-bold text-on-surface">
                                                {inv.price}
                                            </td>
                                            <td className="py-4">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold ${
                                                        inv.status === "OVERDUE"
                                                            ? "bg-error/10 text-error"
                                                            : inv.status ===
                                                                "PAID"
                                                              ? "bg-emerald-50 text-emerald-600"
                                                              : "bg-surface-container-highest text-outline"
                                                    }`}
                                                >
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="py-4 text-right">
                                                <button className="text-outline hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">
                                                        more_vert
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Verification Queue */}
                    <div className="col-span-12 lg:col-span-4 bg-primary/5 rounded-3xl p-8 border border-primary/10 flex flex-col shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold font-headline">
                                Verification Queue
                            </h3>
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                2
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
                                <div className="flex gap-3 mb-4">
                                    <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center text-primary">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                fontVariationSettings:
                                                    "'FILL' 1",
                                            }}
                                        >
                                            description
                                        </span>
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-xs font-bold truncate">
                                            receipt_4429.pdf
                                        </p>
                                        <p className="text-[10px] text-outline uppercase tracking-tighter">
                                            Marcus Chen • $50,000
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 text-[10px] font-bold bg-surface-container-highest text-primary rounded hover:bg-surface-container-high transition-colors uppercase tracking-widest">
                                        Reject
                                    </button>
                                    <button className="flex-1 py-2 text-[10px] font-bold bg-primary text-white rounded hover:bg-primary-dim transition-all shadow-sm uppercase tracking-widest">
                                        Approve
                                    </button>
                                </div>
                            </div>
                            <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/50 transition-colors bg-white/30 backdrop-blur-sm">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                                    <span className="material-symbols-outlined text-outline">
                                        upload_file
                                    </span>
                                </div>
                                <p className="text-xs font-bold mb-1">
                                    Upload New Proof
                                </p>
                                <p className="text-[10px] text-outline leading-tight">
                                    Drag and drop bank receipts or click to
                                    browse files
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
