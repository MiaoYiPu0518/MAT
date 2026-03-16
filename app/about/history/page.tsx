import Link from "next/link";

export default function History() {
    const sidebarLinks = [
        { name: "公司介绍", href: "/about/company-intro" },
        { name: "公司历程", href: "/about/history", active: true },
        { name: "专家介绍", href: "/about/experts" },
        { name: "资质荣誉", href: "/about/credentials" },
    ];

    const milestones = [
        {
            period: "2021 – 2024",
            title: "引领未来：理论突破与现代应用",
            events: [
                { year: "2024", text: "MAT产品正式进入海装风电应用领域。" },
                { year: "2023", text: "发表“闪温熔覆”理论模型；技术成功应用于精密机床、机器人RV减速机及华锐张北大型风电场。" },
                { year: "2022", text: "正式提出“金属表面原位强韧化技术”工程概念，通过风电齿轮箱疲劳寿命试验。" },
                { year: "2021", text: "研发出可实现在线冷添加的MAT凝胶系列产品。" },
            ]
        },
        {
            period: "2014 – 2019",
            title: "产业深耕：工业化与战略合作",
            events: [
                { year: "2018-2019", text: "进军风电领域，在国广、华润电力开展试验；研发并专利化MAT风电专用靶向涂敷装置。" },
                { year: "2017", text: "与瑞典SKF建立深度战略合作，在SKF嘉定基地开启联合试验。" },
                { year: "2015", text: "承德隆化生产基地一期工程落成。" },
                { year: "2014", text: "获得ISO9001认证，正式入围北京铁路局采购名录。" },
            ]
        },
        {
            period: "2009 – 2013",
            title: "品牌崛起：国家认可与专利护航",
            events: [
                { year: "2013", text: "获北京铁路局科技进步三等奖；技术成功应用于中铁隧道盾构机。" },
                { year: "2012", text: "入选国家发改委第五批节能减排技术产品名录。" },
                { year: "2010-2011", text: "获北京自主创新产品证书；与北京铁路局合作轮缘润滑，在神华能源成功运用。" },
                { year: "2009", text: "获得国家发明专利；立项国家科技部创新基金及国家自然科学基金；受邀参加CCTV-10专题报道。" },
            ]
        },
        {
            period: "2003 – 2008",
            title: "初心起航：技术研发与本土化探索",
            events: [
                { year: "2008", text: "与中电54所及多家汽车维修领军企业开展系列技术验证。" },
                { year: "2007", text: "在海军后勤技术研究所完成天然矿物粉体性能验证。" },
                { year: "2004", text: "联合中国地质大学、北京交通大学形成专家团队，开启核心技术本土化研发。" },
                { year: "2003", text: "通过北京铁路局《金属磨损自修复材料应用试验》技术成果鉴定。" },
            ]
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">公司历程</h1>
                    <p className="mt-2 text-sm opacity-80">关于MAT &gt; 公司历程</p>
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
                        <div className="space-y-16">
                            {milestones.map((group, groupIdx) => (
                                <div key={groupIdx} className="relative">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-secondary-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                                            {group.period}
                                        </div>
                                        <h2 className="text-2xl font-bold text-primary-blue">{group.title}</h2>
                                    </div>
                                    
                                    <div className="pl-6 border-l-2 border-gray-100 space-y-10 relative">
                                        {group.events.map((event, eventIdx) => (
                                            <div key={eventIdx} className="relative group">
                                                {/* Timeline Dot */}
                                                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-secondary-blue group-hover:scale-125 transition-transform duration-300"></div>
                                                
                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300">
                                                    <span className="text-accent-blue font-bold text-lg block mb-1">{event.year}</span>
                                                    <p className="text-text-main leading-relaxed">
                                                        {event.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
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
