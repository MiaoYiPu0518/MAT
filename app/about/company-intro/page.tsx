import Link from "next/link";

export default function CompanyIntro() {
    const sidebarLinks = [
        { name: "公司介绍", href: "/about/company-intro", active: true },
        { name: "公司历程", href: "/about/history" },
        { name: "专家介绍", href: "/about/experts" },
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">公司介绍</h1>
                    <p className="mt-2 text-sm opacity-80">关于MAT &gt; 公司介绍</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
                    {/* Sidebar */}
                    <aside>
                        <div className="bg-gray-light p-5 rounded">
                            <h3 className="text-xl font-bold mb-4 border-b-2 border-primary-blue pb-2">关于MAT</h3>
                            <ul className="space-y-3">
                                {sidebarLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block transition-colors ${link.active ? "color-accent-blue font-bold" : "hover:text-accent-blue"
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
                        <h2 className="text-3xl font-bold mb-6 text-primary-blue">北京摩安迈特技术有限公司</h2>
                        <div className="prose max-w-none text-text-main space-y-4">
                            <p>
                                北京摩安迈特技术有限公司（Beijing Moan Maite Technology Co., Ltd.，原北京天界卓尔技术有限公司）是一家专业从事“金属表面自生强化增材制造技术（MAT技术）”研发、生产及服务的生产服务型高新技术企业。
                            </p>

                            <p>
                                我们致力于为由于运动产生的摩擦和磨损导致的问题提供针对性的解决方案。作为新质生产力的典型代表，摩安科技专注于装备摩擦治理和在线磨损修复领域，整合了研发、生产、销售和技术服务。我们的目标是为机械装备全生命周期的运行和维护提供高效的生态环境。
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-secondary-blue">我们的使命</h3>
                            <p>
                                致力于解决由于金属磨损引发的装备失效、部件性能劣化、能源利用效率降低等严峻难题，延长设备寿命，提高生产效率。
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-secondary-blue">行业应用</h3>
                            <p>
                                我们的技术广泛应用于火力发电、风能发电、轨道交通机车、工业机器人（RV减速机）、精密机床、建筑机械、汽车、船舶、化工、冶金、矿山、纺织、印刷以及军事装备等领域。
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4 text-secondary-blue">企业荣誉</h3>
                            <p>
                                拥有20余年行业积淀。是国家高新技术企业，通过ISO9001质量管理体系认证，并拥有多项发明专利和实用新型专利。
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
