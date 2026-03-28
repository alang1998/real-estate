"use client";

import KpiCard from "@/components/KpiCard";
import { useRouter } from "next/navigation";

const leads = [
    {
        id: "1",
        name: "Sofia Martinez",
        email: "sofia.m@gmail.com",
        initials: "SM",
        status: "Booking",
        date: "Oct 24, 2023",
        interaction: "Phone call - 15m",
        agent: "David Chen",
        agentImg:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBbB-GuFj48HSRenXVkQ6nycpuchyhBytlGkI5kbBohiq-eajfI3PtFs9m68fCqdwOJe9kCrWgLM_uKTpA-huXKy8uqK4_LHI20NB4VFbCaXXurG82ziSCeTYergVhBYaQyI6mtZcKOvZrLTbP4oMO53qIaXuBbeBJvICXSfwpc8BmQdgrx7UAvm2fySvNk6YFxA_4irnVPm6YwWhmukaOMuBs-w6451-p4GVr9_rO0xBzMQ60yEx__gtFfsDVu7mVi3yCQEXs151yS",
    },
    {
        id: "2",
        name: "Arthur Wright",
        email: "wright.art@outlook.com",
        initials: "AW",
        status: "Negotiation",
        date: "Oct 22, 2023",
        interaction: "In-person meeting",
        agent: "Sarah Jenkins",
        agentImg:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAngmAhZE8I3NVmSsF7pSSXZsbx6wFC_gbj2_3C1yhXFx_iBCfjUJMbc_Nq3sDyz2IacA2ejeYgDFDnQDU5K9pcosAt6dekgMV1ZHzLJcI0gjHHLvdu-AeIqf-CTZ5ZcZ2tlU0EZXIZR8kSaqipS5K54L9iavv2ZWJ_Q90K261o-k83ZiRqAOQiuAZpJa4Bj7p4w_YpouJZgQOvIXZCbwuoBeUPVRvTssMBoWmru1vpn_rjPAgvFg6zqumOFES38G3smn2Egpi8sGSH",
    },
    {
        id: "3",
        name: "Lena Lofton",
        email: "l.lofton@studio.io",
        initials: "LL",
        status: "Site Visit",
        date: "Oct 20, 2023",
        interaction: "Property tour - Villa A2",
        agent: "David Chen",
    },
    {
        id: "4",
        name: "Bradley Pitt",
        email: "b.pitt@estate.com",
        initials: "BP",
        status: "Contacted",
        date: "Oct 19, 2023",
        interaction: "Email followup",
        agent: "Unassigned",
    },
    {
        id: "5",
        name: "Marcus Aurelius",
        email: "emperor@rome.gov",
        initials: "MC",
        status: "Lead",
        date: "Oct 18, 2023",
        interaction: "New Inquiry - Website",
        agent: "Sarah Jenkins",
        agentImg:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDWINrE9BR5Gg3-KA9R11XGBUo4wZ4VfoHTV1ruavZKMiZHr1nWzFfOs9ZU6rQQtHityi_UDMhTi5Fhc2n72LlMM3hBgkPm_sSGQqkKRkUoBJ_GGGT2kfSCxGBDPVwfkIId5-b1O60QsO_5VBIPfuYcP7oLrV3RSYOnfs0LfT0arWnRfF8QeTzBFg9_hHKQMKt_wjB37UavsfhQ6q0PCzFHcWcfgzp-wc572MMUD2hyuZnwt0mORSAfHSNg4ELumQOIEvX69xzpX-nY",
    },
];

export default function CrmPage() {
    const router = useRouter();

    return (
        <div className="space-y-10">
            {/* Welcome Header */}
            <header className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">
                        CRM Dashboard
                    </h2>
                    <p className="text-outline mt-1">
                        Manage your relationship pipeline and lead performance.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-sm font-medium text-primary hover:bg-surface-container-low transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">
                            file_download
                        </span>{" "}
                        Export CSV
                    </button>
                    <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">
                            add
                        </span>{" "}
                        New Lead
                    </button>
                </div>
            </header>

            {/* Summary Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard
                    title="Total Leads"
                    value="482"
                    icon="person_search"
                    badgeText="+12.5%"
                    type="primary"
                />
                <KpiCard
                    title="Active Customers"
                    value="124"
                    icon="handshake"
                    badgeText="+4.2%"
                    type="secondary"
                />
                <KpiCard
                    title="Pending Documents"
                    value="12"
                    icon="description"
                    badgeText="-2"
                    type="tertiary"
                />
                <KpiCard
                    title="Conversion Rate"
                    value="8.4%"
                    icon="trending_up"
                    badgeText="+0.8%"
                    type="primary"
                />
            </section>

            {/* CRM Table Section */}
            <section className="bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_rgba(42,52,57,0.06)] overflow-hidden border border-outline-variant/5">
                <div className="px-8 py-6 border-b border-surface-container flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h4 className="font-bold text-lg text-on-surface font-headline">
                            Recent Activity
                        </h4>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-surface-container-low text-xs font-semibold rounded-lg flex items-center gap-2 hover:bg-surface-container transition-colors">
                                Status: All{" "}
                                <span className="material-symbols-outlined text-sm">
                                    expand_more
                                </span>
                            </button>
                            <button className="px-3 py-1.5 bg-surface-container-low text-xs font-semibold rounded-lg flex items-center gap-2 hover:bg-surface-container transition-colors">
                                Date: Last 30 Days{" "}
                                <span className="material-symbols-outlined text-sm">
                                    calendar_today
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="relative min-w-[300px]">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
                            filter_list
                        </span>
                        <input
                            className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                            placeholder="Filter by agent or name..."
                            type="text"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low/50">
                                <th className="px-8 py-4 text-xs font-bold text-outline uppercase tracking-wider font-body">
                                    Name
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-outline uppercase tracking-wider font-body">
                                    Status
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-outline uppercase tracking-wider font-body">
                                    Last Interaction
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-outline uppercase tracking-wider font-body">
                                    Assigned Agent
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-outline uppercase tracking-wider font-body text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container/30">
                            {leads.map((lead) => (
                                <tr
                                    key={lead.id}
                                    className="hover:bg-surface-container-low transition-colors group cursor-pointer"
                                    onClick={() =>
                                        router.push(`/crm/${lead.id}`)
                                    }
                                >
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                {lead.initials}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-on-surface">
                                                    {lead.name}
                                                </p>
                                                <p className="text-xs text-outline">
                                                    {lead.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-tight">
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <p className="text-sm text-on-surface">
                                            {lead.date}
                                        </p>
                                        <p className="text-[10px] text-outline">
                                            {lead.interaction}
                                        </p>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            {lead.agentImg ? (
                                                <img
                                                    alt="Agent"
                                                    className="w-6 h-6 rounded-full"
                                                    src={lead.agentImg}
                                                />
                                            ) : (
                                                <div className="w-6 h-6 rounded-full bg-surface-container-high"></div>
                                            )}
                                            <span className="text-sm font-medium">
                                                {lead.agent}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-outline hover:text-primary transition-colors">
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

                <div className="px-8 py-4 bg-surface-container-low/30 border-t border-surface-container flex items-center justify-between">
                    <p className="text-xs text-outline">
                        Showing 1 to 5 of 482 results
                    </p>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-outline hover:bg-white transition-colors">
                            <span className="material-symbols-outlined text-lg">
                                chevron_left
                            </span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-xs font-bold text-primary/70 hover:bg-white transition-colors">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-xs font-bold text-primary/70 hover:bg-white transition-colors">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant/30 text-outline hover:bg-white transition-colors">
                            <span className="material-symbols-outlined text-lg">
                                chevron_right
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Performance Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
                <div className="lg:col-span-2 bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group min-h-[300px]">
                    <div className="relative z-10 text-on-surface">
                        <h4 className="text-xl font-bold mb-2 font-headline">
                            Team Conversion Performance
                        </h4>
                        <p className="text-outline text-sm mb-6 max-w-sm">
                            Monthly overview of lead transitions across the
                            sales funnel from discovery to closing.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    label: "Initial Contact",
                                    value: "88%",
                                    color: "bg-primary",
                                    width: "88%",
                                },
                                {
                                    label: "Site Visit Scheduled",
                                    value: "42%",
                                    color: "bg-secondary",
                                    width: "42%",
                                },
                                {
                                    label: "Negotiation Phase",
                                    value: "18%",
                                    color: "bg-tertiary",
                                    width: "18%",
                                },
                            ].map((stat) => (
                                <div key={stat.label} className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-outline">
                                        <span>{stat.label}</span>
                                        <span>{stat.value}</span>
                                    </div>
                                    <div className="w-full bg-surface-container-highest h-1.5 rounded-full">
                                        <div
                                            className={`${stat.color} h-1.5 rounded-full transition-all duration-1000`}
                                            style={{ width: stat.width }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-bold text-on-surface mb-6 flex items-center justify-between font-headline">
                        Critical Tasks
                        <span className="bg-error/10 text-error text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                            3 High Priority
                        </span>
                    </h4>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Contract Renewal: Villa 4B",
                                detail: "Expires in 2 days • Sofia Martinez",
                                color: "bg-error",
                            },
                            {
                                title: "Document Verification",
                                detail: "Awaiting ID for Arthur Wright",
                                color: "bg-secondary",
                            },
                            {
                                title: "Site Visit Preparation",
                                detail: "Tomorrow at 10:00 AM • Lena Lofton",
                                color: "bg-primary",
                            },
                        ].map((task, i) => (
                            <div key={i} className="flex gap-4">
                                <div
                                    className={`w-1 ${task.color} rounded-full`}
                                ></div>
                                <div>
                                    <p className="text-sm font-semibold text-on-surface">
                                        {task.title}
                                    </p>
                                    <p className="text-xs text-outline">
                                        {task.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <button className="w-full py-3 mt-4 text-xs font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors uppercase tracking-widest">
                            View All Tasks
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
