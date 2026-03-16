import Link from "next/link";

export default function ApplicationReports() {
    const sidebarLinks = [
        { name: "技术介绍", href: "/tech/tech-intro" },
        { name: "资质荣誉", href: "/about/credentials" },
        { name: "运用报告", href: "/tech/reports", active: true },
        { name: "学术论文", href: "/tech/papers" },
    ];

    const reports = [
        {
            title: "MAT大唐托克托年使用报告",
            preview: "/images/tech/reports/preview-tokto.png",
            file: "/docs/reports/report-tokto.pdf"
        },
        {
            title: "MAT大板机务段报告",
            preview: "/images/tech/reports/preview-daban.png",
            file: "/docs/reports/report-daban.pdf"
        },
        {
            title: "MAT奔驰无机油试验",
            preview: "/images/tech/reports/preview-benz.png",
            file: "/docs/reports/report-benz.pdf"
        },
        {
            title: "MAT富康无机油试验",
            preview: "/images/tech/reports/preview-fukang.png",
            file: "/docs/reports/report-fukang.pdf"
        },
        {
            title: "MAT怀化机务段使用报告",
            preview: "/images/tech/reports/preview-huaihua.png",
            file: "/docs/reports/report-huaihua.pdf"
        },
        {
            title: "MAT神华齿轮运用报告",
            preview: "/images/tech/reports/preview-shenhua.png",
            file: "/docs/reports/report-shenhua.pdf"
        },
        {
            title: "MAT齿轮试验机实验报告",
            preview: "/images/tech/reports/preview-gear.png",
            file: "/docs/reports/report-gear.pdf"
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-secondary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">运用报告</h1>
                    <p className="mt-2 text-sm opacity-80">MAT技术 &gt; 运用报告</p>
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
                            <h2 className="text-3xl font-bold text-primary-blue mb-4 border-l-4 border-accent-blue pl-4">实车运用与实验报告</h2>
                            <p className="text-text-light text-lg">
                                MAT技术在电力、铁路、汽车及工业制造等领域积累了大量的第三方实验报告与实车运用数据，多维度证实了技术的减摩、节能与自修复效果。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {reports.map((report, idx) => (
                                <a 
                                    key={idx} 
                                    href={report.file} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                        <div className="relative aspect-[1.414/1] bg-gray-50 flex items-center justify-center p-4 border-b border-gray-50 overflow-hidden">
                                            <img 
                                                src={report.preview} 
                                                alt={report.title} 
                                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" 
                                            />
                                            <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/5 transition-colors duration-300 flex items-center justify-center">
                                                <div className="bg-accent-blue text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg scale-75 group-hover:scale-100 transform duration-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-2 text-primary-blue">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="text-[10px] font-bold tracking-widest uppercase">Research Document</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-accent-blue transition-colors line-clamp-2 min-h-[3.5rem]">
                                                {report.title}
                                            </h3>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="text-xs text-gray-400 font-medium tracking-wider">PDF FORMAT</span>
                                                <div className="flex items-center gap-1 text-accent-blue font-bold text-xs">
                                                    <span>View Report</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
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
