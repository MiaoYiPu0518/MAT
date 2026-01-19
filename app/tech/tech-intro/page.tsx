import Link from "next/link";

export default function TechIntro() {
    const sidebarLinks = [
        { name: "技术介绍", href: "/tech/tech-intro", active: true },
        { name: "科技成果鉴定及专利", href: "/tech/patents" },
        { name: "推广文件/产品标准", href: "/tech/standards" },
        { name: "运用报告", href: "/tech/reports" },
        { name: "学术论文", href: "/tech/papers" },
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-secondary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">技术介绍</h1>
                    <p className="mt-2 text-sm opacity-80">MAT技术 &gt; 技术介绍</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
                    {/* Sidebar */}
                    <aside>
                        <div className="bg-gray-light p-5 rounded">
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
                        <h2 className="text-3xl font-bold mb-6 text-primary-blue">什么是MAT技术？</h2>
                        <div className="prose max-w-none text-text-main space-y-6">
                            <p className="text-lg leading-relaxed">
                                <strong>MAT (Metal surface Adaptive strengthening Triboceramic technology)</strong>，即“金属表面自生强化技术”，是一项金属表面工程技术和润滑技术相融合的机械装备在线摩擦治理工艺技术。
                            </p>

                            <div className="bg-primary-blue text-white p-8 rounded-lg text-center shadow-lg">
                                <h3 className="text-xl font-bold mb-4">核心公式</h3>
                                <p className="text-2xl font-bold tracking-wide">
                                    MAT = 在线动态抛光 + 固液复合润滑 + 原位改性强化 + 自适应增材修复
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary-blue mb-4">“闪温熔覆”理论模型</h3>
                                    <p>
                                        MAT技术基于天然富镁层状硅酸盐的摩擦学特性和“闪温熔覆”理论模型。通过将以天然富镁层状硅酸盐为基材的活性粉体材料引入润滑介质中，利用摩擦能的作用使运动副表面发生原位改性和自适应增材过程。
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-secondary-blue mb-4">实现“动态平衡”</h3>
                                    <p>通过在线动态抛光、自适应增适应增材过程，优化配合间隙，改善摩擦副匹配，实现运动副表面磨损和增材补偿的动态平衡。</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="border-l-4 border-accent-blue pl-5">
                                    <h4 className="text-xl font-bold text-primary-blue mb-3">技术机理</h4>
                                    <p>利用摩擦产生的瞬时高温（闪温），引导活性材料与金属基体发生物理化学反应，形成高硬度、低摩擦系数的金属陶瓷层。</p>
                                </div>
                                <div className="border-l-4 border-accent-blue pl-5">
                                    <h4 className="text-xl font-bold text-primary-blue mb-3">核心价值</h4>
                                    <p>在不停机的状态下，实现对磨损表面的精准修复和强化，大幅延长设备维修周期，降低运维成本。</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
