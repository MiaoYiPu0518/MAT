import Link from "next/link";

export default function Credentials() {
    const sidebarLinks = [
        { name: "公司介绍", href: "/about/company-intro" },
        { name: "公司历程", href: "/about/history" },
        { name: "专家介绍", href: "/about/experts" },
        { name: "资质荣誉", href: "/about/credentials", active: true },
    ];

    const techAchievements = [
        {
            title: "科技成果鉴定会现场 (一)",
            image: "/images/about/credentials/meeting-1.png",
        },
        {
            title: "科技成果鉴定会现场 (二)",
            image: "/images/about/credentials/meeting-2.png",
        },
        {
            title: "科学技术成果鉴定证书",
            image: "/images/about/credentials/achievement-cert.png",
        },
        {
            title: "实用新型专利证书 (1)",
            image: "/images/about/credentials/patent-1.png",
        },
        {
            title: "实用新型专利证书 (2)",
            image: "/images/about/credentials/patent-2.png",
        },
        {
            title: "实用新型专利证书 (3)",
            image: "/images/about/credentials/patent-3.png",
        }
    ];

    const documents = [
        {
            title: "2024摩安科技 - 产品企业标准",
            preview: "/images/about/credentials/doc-preview-1.png",
            file: "/docs/standard-enterprise.pdf"
        },
        {
            title: "国家重点节能技术推广目录",
            preview: "/images/about/credentials/doc-preview-2.png",
            file: "/docs/standard-energy-saving.pdf"
        },
        {
            title: "铁道推广文件",
            preview: "/images/about/credentials/doc-preview-3.png",
            file: "/docs/standard-railway.pdf"
        },
        {
            title: "中国设备管理协会推广文件",
            preview: "/images/about/credentials/doc-preview-4.png",
            file: "/docs/standard-equipment-assoc.pdf"
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">资质荣誉</h1>
                    <p className="mt-2 text-sm opacity-80">关于MAT &gt; 资质荣誉</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
                    {/* Sidebar */}
                    <aside>
                        <div className="bg-gray-light p-5 rounded sticky top-24">
                            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary-blue pb-2">关于MAT</h3>
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
                    <article className="reveal space-y-20">
                        {/* Section 1: Tech Achievements */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-primary-blue mb-4 border-l-4 border-accent-blue pl-4">科技成果鉴定及专利</h2>
                                <p className="text-text-light">MAT技术得到了国家多个部委及行业协会的认可，拥有多项自主研发专利。</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {techAchievements.map((item, idx) => (
                                    <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                                        <a 
                                            href={item.image} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center p-4 cursor-zoom-in"
                                        >
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                                            />
                                        </a>
                                        <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                                            <p className="text-sm font-semibold text-primary-blue">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 2: Documents & Standards */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-primary-blue mb-4 border-l-4 border-accent-blue pl-4">推广文件及产品标准</h2>
                                <p className="text-text-light">查阅MAT技术的行业应用标准与国家节能推广官方文件。</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                                {documents.map((doc, idx) => (
                                    <a 
                                        key={idx} 
                                        href={doc.file} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center"
                                    >
                                        <div className="relative w-full aspect-[1/1.414] bg-white rounded-xl shadow-lg border border-gray-100 p-1 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300 ring-0 group-hover:ring-4 ring-accent-blue/10">
                                            <img 
                                                src={doc.preview} 
                                                alt={doc.title} 
                                                className="w-full h-full object-cover rounded-lg" 
                                            />
                                            <div className="absolute inset-0 bg-primary-blue/0 group-hover:bg-primary-blue/5 transition-colors duration-300 rounded-lg flex items-center justify-center">
                                                <div className="bg-accent-blue text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-primary-blue text-center group-hover:text-accent-blue transition-colors">
                                            {doc.title}
                                        </p>
                                        <span className="text-[10px] text-gray-400 mt-1">PDF DOCUMENT</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
