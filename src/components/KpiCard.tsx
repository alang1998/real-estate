"use client";

interface KpiCardProps {
    title: string;
    value: string;
    subtext?: string;
    icon: string;
    badgeText?: string;
    badgeActive?: boolean;
    progress?: number;
    progressText?: string;
    type?: "primary" | "secondary" | "tertiary" | "error";
}

export default function KpiCard({
    title,
    value,
    subtext,
    icon,
    badgeText,
    badgeActive = true,
    progress,
    progressText,
    type = "primary",
}: KpiCardProps) {
    const bgColorMap = {
        primary: "bg-primary/10",
        secondary: "bg-secondary/10",
        tertiary: "bg-tertiary/10",
        error: "bg-error/10",
    };

    const textColorMap = {
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary",
        error: "text-error",
    };

    const badgeColorMap = {
        primary: "bg-primary-container text-on-primary-container",
        secondary: "bg-secondary-container text-on-secondary-container",
        tertiary: "bg-tertiary-container text-on-tertiary-container",
        error: "bg-error-container text-on-error-container",
    };

    const progressColorMap = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        error: "bg-error",
    };

    return (
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-transparent hover:border-primary/5 transition-all group">
            <div className="flex justify-between items-start mb-6">
                <div
                    className={`w-12 h-12 rounded-xl ${bgColorMap[type]} flex items-center justify-center ${textColorMap[type]}`}
                >
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                {badgeText && (
                    <span
                        className={`text-[10px] font-bold py-1 px-2 rounded-full ${badgeColorMap[type]}`}
                    >
                        {badgeText}
                    </span>
                )}
            </div>
            <h3 className="text-sm font-medium text-outline mb-1">{title}</h3>
            <p className="text-3xl font-extrabold mb-4 tracking-tighter text-on-surface">
                {value}
            </p>

            {progress !== undefined ? (
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div
                            className={`h-full ${progressColorMap[type]} transition-all duration-500`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    {progressText && (
                        <span className="text-[11px] font-bold text-outline whitespace-nowrap">
                            {progressText}
                        </span>
                    )}
                </div>
            ) : subtext ? (
                <p
                    className="text-[11px] text-outline leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: subtext }}
                />
            ) : null}
        </div>
    );
}
