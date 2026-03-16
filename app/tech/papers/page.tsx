import Link from "next/link";

export default function AcademicPapers() {
    const sidebarLinks = [
        { name: "技术介绍", href: "/tech/tech-intro" },
        { name: "资质荣誉", href: "/about/credentials" },
        { name: "运用报告", href: "/tech/reports" },
        { name: "学术论文", href: "/tech/papers", active: true },
    ];

    const papers = [
        {
            title: "学术论文 - 蛇纹石表面特性",
            file: "/docs/papers/paper-serpentine.pdf",
            journal: "材料工程 / Journal of Materials Engineering"
        },
        {
            title: "学术论文 - 盾构主轴承齿轮箱应用参数监测技术的可行性研究",
            file: "/docs/papers/paper-main-bearing.pdf",
            journal: "隧道建设 / Tunnel Construction"
        },
        {
            title: "学术论文 - 表面包覆蛇纹石超细粉末作为润滑剂添加剂的摩擦学行为",
            file: "/docs/papers/paper-coating.pdf",
            journal: "材料科学与工艺 / Materials Science and Technology"
        },
        {
            title: "学术论文 - 叶蛇纹石作为润滑材料的摩擦学性能及应用",
            file: "/docs/papers/paper-antigorite.pdf",
            journal: "润滑与密封 / Lubrication Engineering"
        },
        {
            title: "学术论文 - 基于金属表面自生强化技术的机车柴油机极低摩擦自润滑环境构建",
            file: "/docs/papers/paper-diesel.pdf",
            journal: "中国铁道科学 / China Railway Science"
        },
        {
            title: "学术论文 - 金属表面自生强化技术机理研究及实践应用",
            file: "/docs/papers/paper-mechanism.pdf",
            journal: "表面工程资讯 / Surface Engineering Journal"
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-secondary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">学术论文</h1>
                    <p className="mt-2 text-sm opacity-80">MAT技术 &gt; 学术论文</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
                    {/* Sidebar */}
                    <aside>
                        <div className="bg-gray-light p-5 rounded sticky top-24">
                            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary-blue pb-2">MAT技术</h3>
                            <ul className="space-y-3">
                                {sidebarLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block transition-colors ${link.active ? "text-accent-blue font-bold" : "hover:text-accent-blue"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Content */}
                    <article className="reveal">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-primary-blue mb-4 border-l-4 border-accent-blue pl-4">核心期刊与学术成果</h2>
                            <p className="text-text-light text-lg">
                                MAT技术的核心理论与实验成果已在多个国家级核心期刊发表，涵盖材料科学、表面工程、润滑摩擦及轨道交通装备等领域。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {papers.map((paper, idx) => (
                                <a 
                                    key={idx} 
                                    href={paper.file} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
                                >
                                    <div className="md:w-1/3 bg-gray-50/50 flex items-center justify-center p-10 border-r border-gray-100 overflow-hidden relative">
                                        <div className="w-24 h-24 relative transform group-hover:scale-110 transition-transform duration-700">
                                            <img 
                                                src="/images/tech/papers/paper-abstract-icon.png" 
                                                alt="Paper Icon" 
                                                className="w-full h-full object-contain" 
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/5 transition-colors duration-300"></div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-4 text-accent-blue">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                <span className="text-xs font-bold tracking-widest uppercase">Academic Paper</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-blue transition-colors leading-snug mb-3">
                                                {paper.title}
                                            </h3>
                                            <p className="text-sm text-text-light font-medium flex items-center gap-2 mb-6">
                                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span>
                                                {paper.journal}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                            <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">PDF DOCUMENT</span>
                                            <div className="inline-flex items-center gap-2 text-primary-blue font-bold text-sm bg-primary-blue/5 px-4 py-2 rounded-full group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                                <span>阅读全文</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
