import { CONTACTS } from "@/constants";
import FadeIn from "@/components/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, ExternalLink } from "lucide-react";

export default function ContactPage() {
    // 아이콘 선택 로직
    const getIcon = (title: string) => {
        switch (title) {
            case "이메일": return <Mail className="w-5 h-5 text-blue-500" />;
            case "GitHub": return <Github className="w-5 h-5 text-slate-800 dark:text-white" />;
            default: return <ExternalLink className="w-5 h-5 text-purple-500" />;
        }
    };

    return (
        <section className="space-y-6">
            <FadeIn>
                <h2 className="section-title">연락처</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CONTACTS.map((contact, index) => (
                    <FadeIn key={contact.title} delay={index * 0.1}>
                        <a
                            href={contact.link}
                            target={contact.type === 'link' ? "_blank" : undefined}
                            rel={contact.type === 'link' ? "noopener noreferrer" : undefined}
                            className="block group"
                        >
                            <Card className="transition-all duration-300 group-hover:border-[#9b59b6] group-hover:shadow-md dark:bg-[#333333] dark:border-[#444444]">
                                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                    {getIcon(contact.title)}
                                    <CardTitle className="text-lg font-bold">{contact.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#3498db] dark:text-[#5dade2] font-medium break-all underline-offset-4 group-hover:underline">
                                        {contact.content}
                                    </p>
                                </CardContent>
                            </Card>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}