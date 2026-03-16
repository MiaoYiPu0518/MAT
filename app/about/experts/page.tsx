import Link from "next/link";

export default function Experts() {
    const sidebarLinks = [
        { name: "公司介绍", href: "/about/company-intro" },
        { name: "公司历程", href: "/about/history" },
        { name: "专家介绍", href: "/about/experts", active: true },
        { name: "资质荣誉", href: "/about/credentials" },
    ];

    const experts = [
        {
            name: "徐滨士",
            titles: ["中国工程院院士", "中外表面工程和再制造工程 开拓者和创始人"],
            desc: "中国工程院院士，波兰科学院外籍院士。表面工程及再制造工程学科主要倡导者和奠基人之一。",
            image: "/images/about/experts/expert-xubinshi.png"
        },
        {
            name: "杨其明",
            titles: ["摩擦学专家 教授高级工程师", "03院士候选人 国家津贴专家", "检测技术专家"],
            desc: "国家级突出贡献专家，享受国务院政府特殊津贴.长期从事摩擦学、表面工程及油液分析技术研究。",
            image: "/images/about/experts/expert-yangqiming.png"
        },
        {
            name: "易新乾",
            titles: ["工程机械专家 国家津贴专家", "中国工程机械学会维修与再制造分会创始人"],
            desc: "享受国务院政府特殊津贴专家。在工程机械维修理论、再制造技术及标准化方面具有深厚造诣。",
            image: "/images/about/experts/expert-yixinqian.png"
        },
        {
            name: "白志民",
            titles: ["材料学专家 博士教授", "原中国地质大学材料学院院长", "摩安首席科学家"],
            desc: "博士生导师。长期从事非金属矿物材料、矿物功能材料及纳米复合材料的教学与科研工作。",
            image: "/images/about/experts/expert-baizhimin.png"
        },
        {
            name: "许一",
            titles: ["表面工程专家 “双百计划”青年科技英才", "中国设备协会设备维修分会主任委员等"],
            desc: "主要研究方向为抗磨自修复材料、纳米减摩添加剂及其表面作用机制。",
            image: "/images/about/experts/expert-xuyi.png"
        },
        {
            name: "赵敬贤",
            titles: ["机电工程专家 教授高级工程师", "原航天工业部机械研究所所长"],
            desc: "多年从事航天机械系统、精密传动及机电一体化技术的研究与工程实践。",
            image: "/images/about/experts/expert-zhaojingxian.png"
        },
        {
            name: "杨超",
            titles: ["热能动力专家", "原北京交大机电工程学院院院长", "著名的铁路热能动力专家"],
            desc: "在机车动力系统、节能降耗及铁路装备摩擦治理论领域拥有权威地位。",
            image: "/images/about/experts/expert-yangchao.png"
        },
        {
            name: "曹琦",
            titles: ["摩擦治理专家", "摩安科技创始人、董事长"],
            desc: "金属表面自生强化技术发明人，致力于工业摩擦治理技术的推广与应用。",
            image: "/images/about/experts/expert-caoqi.png"
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">专家介绍</h1>
                    <p className="mt-2 text-sm opacity-80">关于MAT &gt; 专家介绍</p>
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
                    <article className="reveal">
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-primary-blue mb-4">专家贡献</h2>
                            <p className="text-lg text-text-main leading-relaxed max-w-4xl italic border-l-4 border-accent-blue pl-6">
                                一群人的努力，两代科学家跨领域、多学科资源整合，十年磨一剑，成就了摩安科技如今拥有自主知识产权的MAT技术。摩安科技决心继承老一代科学家的勇敢创新精神、与用户企业的工程技术人员合作，把金属表面减摩自修复金属推向更广泛的领域。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                            {experts.map((expert, idx) => (
                                <div key={idx} className="bg-white flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
                                        <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden shadow-inner">
                                           <img 
                                             src={expert.image} 
                                             alt={expert.name}
                                             className="w-full h-full object-cover"
                                           />
                                           <div className="absolute inset-x-0 bottom-0 bg-primary-blue/20 h-1"></div>
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-8">
                                        <h3 className="text-2xl font-bold text-primary-blue mb-3">{expert.name}</h3>
                                        <div className="space-y-1 mb-4">
                                            {expert.titles.map((title, tIdx) => (
                                                <div key={tIdx} className="text-sm font-semibold text-accent-blue leading-snug">
                                                    {title}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-text-light text-sm leading-relaxed border-t border-gray-50 pt-4">
                                            {expert.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
