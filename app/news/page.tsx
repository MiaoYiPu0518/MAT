import Link from "next/link";

export default function NewsPage() {
    const newsList = [
        {
            title: "摩安科技亮相2025北京国际风能大会暨展览会——以MAT技术助力中国风电装备突破新极限",
            date: "2025年10月16日",
            summary: "在这一全球风能产业的舞台上，摩安科技（MAT）将携其核心创新成果——金属表面自生强化技术（MAT技术）重磅亮相。",
            image: "/images/news/news-cwp2025.jpg",
            link: "/news/cwp2025"
        },
        {
            title: "MAT金属表面自生强化技术 助力风电机组高效“自愈”运行",
            date: "2025年8月23日",
            summary: "MAT金属表面自生强化技术，首次在风电机组传动系统中实现长期稳定应用，并在2025年第七期《风能》杂志发表的论文中公布了验证数据。",
            image: "/images/news/news-self-heal.jpg",
            link: "/news/news-title-01"
        }
    ];

    return (
        <div>
            {/* News Banner */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <img 
                    src="/images/news/news-banner.png" 
                    alt="News Banner" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-5 relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight">企业新闻</h1>
                    <div className="w-20 h-1 bg-accent-blue mx-auto mb-6"></div>
                    <p className="text-xl opacity-90 text-white/80 max-w-2xl mx-auto">
                        追踪摩安科技最新动态，见证中国风电与摩擦治理技术的每一次突破。
                    </p>
                </div>
            </section>

            {/* News List */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-5">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-blue">最新快讯</h2>
                            <p className="mt-2 text-text-light">LATEST UPDATES & MEDIA COVERAGE</p>
                        </div>
                        <div className="hidden md:block h-[1px] flex-1 mx-10 bg-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {newsList.map((news, idx) => (
                            <Link 
                                key={idx} 
                                href={news.link}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img 
                                        src={news.image} 
                                        alt={news.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-accent-blue font-bold text-xs tracking-widest uppercase">{news.date}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                <div className="p-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary-blue transition-colors leading-snug mb-4 line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-text-light leading-relaxed mb-8 flex-1 line-clamp-3">
                                        {news.summary}
                                    </p>
                                    <div className="flex items-center gap-3 text-accent-blue font-bold tracking-wider group-hover:gap-5 transition-all">
                                        <span className="text-sm uppercase">阅读详情</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
