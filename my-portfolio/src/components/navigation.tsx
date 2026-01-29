"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-[120] flex items-center gap-3 px-5 py-3 backdrop-blur-md bg-white/88 dark:bg-black/60 border-bottom border-black/5 dark:border-white/5">
            <div className="flex flex-1 justify-center gap-[10px]">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "px-[18px] py-2 rounded-[10px] text-[15px] transition-all duration-180 border border-black/5 bg-white hover:-translate-y-[2px] hover:shadow-md dark:bg-[#3b3b3b] dark:hover:bg-[#4a4a4a]",
                            pathname === item.href && "bg-[#f7f7fb] dark:bg-[#5a5a5a] font-bold shadow-inner"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* 기존 Material Switch를 대체하는 shadcn Switch */}
            <div className="flex items-center gap-2 ml-auto">
                <Switch
                    id="theme-toggle"
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
            </div>
        </nav>
    );
}