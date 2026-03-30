import Link from "next/link";
import { notFound } from "next/navigation";

const newsData: Record<string, any> = {
    "cwp2025": {
        title: "摩安科技亮相2025北京国际风能大会暨展览会——以MAT技术助力中国风电装备突破新极限",
        date: "2025年10月16日",
        category: "展会报道",
        banner: "/images/news/news-cwp2025.jpg",
        content: [
            { type: "p", text: "在即将于10月20日至22日在北京盛大开幕的2025北京国际风能大会暨展览会（CWP2025）上，摩安科技（MAT）将携其核心创新成果——金属表面自生强化技术（MAT技术）重磅亮相。" },
            { type: "h2", text: "助力中国风电装备突破新极限" },
            { type: "p", text: "随着中国风电产业从高速增长转向高质量发展，对发电机组的可靠性、寿命和运维效率提出了前所未有的挑战。摩安科技的MAT技术正是为应对这些挑战而生。该技术基于天然富镁层状硅酸盐的摩擦学特性，通过在线动态抛光、固液复合润滑、原位改性强化以及自适应增材修复，实现对运动副表面的精准治理。" },
            { type: "h2", text: "核心技术优势" },
            { type: "p", text: "MAT技术的核心优势在于其“在线治理”的能力。在不停机的状态下，通过向润滑介质中引入活性粉体材料，利用摩擦产生的闪温熔覆效应，在金属表面原位生成一层高硬度、抗磨损的金属陶瓷层，从而修复微观损伤，降低摩擦系数，提升机组效率。" },
            { type: "p", text: "目前，MAT技术已在风电机组的传动系统、轴承、齿轮箱等核心部件中表现出卓越的减摩防腐效果，极大地延长了关键零部件的使用寿命，降低了海上及陆上风电项目的全生命周期运维成本。" },
            { type: "h2", text: "邀请函" },
            { type: "p", text: "我们诚挚邀请各位业界同仁、专家及合作伙伴莅临摩安科技展位（E407A），共同探讨MAT技术在风电领域的创新应用与未来可能。" },
            { type: "blockquote", text: "展位号：E407A | 地点：中国国际展览中心（顺义馆）" }
        ]
    },
    "news-title-01": {
        title: "MAT金属表面自生强化技术 助力风电机组高效“自愈”运行",
        date: "2025年8月23日",
        category: "技术前沿",
        banner: "/images/news/news-self-heal.jpg",
        content: [
            { type: "p", text: "近日，2025年第七期《风能》杂志登载了对摩安科技MAT技术的专题分析，详细阐述了该技术如何助力风电机组实现高效“自愈”运行，并在多项实机数据监测中展现出突破性成果。" },
            { type: "h2", text: "从传统润滑到“自愈”运行" },
            { type: "p", text: "传统的摩擦副治理依赖于定期的润滑油更换和预防性停机大修。相比之下，MAT技术引入了“自适应增材修复”的概念。通过由天然矿物改性制得的微纳米颗粒，在摩擦副表面极小范围内实现“点对点”的动态补偿。" },
            { type: "image", src: "/images/news/news-self-heal-mag.jpg", alt: "《风能》杂志报道" },
            { type: "h2", text: "实测数据验证" },
            { type: "p", text: "在一台已运行10年的兆瓦级机组上，经过为期五年的持续跟踪监测，应用MAT技术后表现出显著的性能提升：" },
            { type: "list", items: [
                "齿轮箱油温及轴承温度平均下降超过10%。",
                "在相同风速条件下，机组输出效率提升了5%以上。",
                "核心运动部件的磨损速率降低了约60%，关键大部件的使用寿命得到显著延长。"
            ] },
            { type: "image", src: "/images/news/news-self-heal-stats.jpg", alt: "技术论文数据亮点" },
            { type: "h2", text: "赋能全生命周期价值" },
            { type: "p", text: "MAT技术不仅是一次润滑材料的迭代，更是一场摩擦治理理念的变革。通过跨界融合润滑、表面强化与在线修复，摩安科技正助力中国风电行业从“被动修”向“主动防”转变，构建全生命周期的设备资产保障体系。" }
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(newsData).map((slug) => ({
        slug: slug,
    }));
}

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const news = newsData[slug];

    if (!news) {
        notFound();
    }

    return (
        <article className="pb-24">
            {/* Header / Banner */}
            <header className="relative h-[500px] flex items-end pb-20 overflow-hidden">
                <img 
                    src={news.banner} 
                    alt={news.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/40 to-transparent"></div>
                <div className="container mx-auto px-5 relative z-10 text-white">
                    <Link href="/news" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-bold tracking-widest uppercase text-sm">返回新闻中心</span>
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-accent-blue text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                                {news.category}
                            </span>
                            <span className="text-white/60 text-sm font-medium tracking-wide">
                                {news.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15]">
                            {news.title}
                        </h1>
                    </div>
                </div>
            </header>

            {/* Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-5">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-xl prose-slate max-w-none text-gray-700 leading-relaxed space-y-10">
                            {news.content.map((item: any, idx: number) => {
                                if (item.type === "p") return <p key={idx} className="text-lg md:text-xl text-text-main/90">{item.text}</p>;
                                if (item.type === "h2") return <h2 key={idx} className="text-3xl font-bold text-primary-blue mt-16 first:mt-0">{item.text}</h2>;
                                if (item.type === "image") return (
                                    <figure key={idx} className="my-16 rounded-3xl overflow-hidden shadow-2xl">
                                        <img src={item.src} alt={item.alt} className="w-full h-auto" />
                                        {item.alt && <figcaption className="text-center text-sm text-text-light mt-4 italic">{item.alt}</figcaption>}
                                    </figure>
                                );
                                if (item.type === "list") return (
                                    <ul key={idx} className="space-y-4 list-none pl-0 my-10">
                                        {item.items.map((li: string, i: number) => (
                                            <li key={i} className="flex gap-4 items-start text-lg">
                                                <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
                                                <span>{li}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                                if (item.type === "blockquote") return (
                                    <blockquote key={idx} className="border-l-8 border-accent-blue bg-blue-50/50 p-10 rounded-2xl text-2xl font-bold text-primary-blue italic my-16 shadow-inner">
                                        “{item.text}”
                                    </blockquote>
                                );
                                return null;
                            })}
                        </div>

                        {/* Footer / Share */}
                        <footer className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">关键词:</span>
                                <div className="flex gap-2">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">MAT技术</span>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">摩擦学</span>
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">风电展示</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">关注我们:</span>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all cursor-pointer">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all cursor-pointer">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </section>
        </article>
    );
}
