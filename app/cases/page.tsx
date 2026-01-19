"use client";

import { useState } from 'react';

export default function Cases() {
    const [activeTab, setActiveTab] = useState('railway');

    const tabs = [
        { id: 'railway', name: '铁路机车' },
        { id: 'wind', name: '风电' },
        { id: 'thermal', name: '热电厂' },
        { id: 'shield', name: '盾构机' },
        { id: 'auto', name: '汽车' },
    ];

    const content = {
        railway: {
            title: "铁路机车领域",
            desc: "MAT技术于2002年首获铁道部测试，证明其可延长发动机缸套、活塞等部件寿命2-3倍，综合节油2.2%。目前已在铁路系统近1000台机车上得到应用。",
            bullets: [
                "某型机车运行115万公里缸套零磨损。",
                "铁道部发文推广应用。"
            ]
        },
        wind: {
            title: "风电领域",
            desc: "在某风场应用后，发电量提升5%-15%，油温明显下降。1.5MW机组单台每年可提升收益约7.5万元。",
            bullets: [
                "张北风场B23、B25、C63机组实测数据支持。",
                "有效降低齿轮箱故障率，延长换油周期。"
            ]
        },
        thermal: {
            title: "热电厂领域",
            desc: "应用于空冷岛，延长齿轮箱寿命和连续运行时间，降低维护成本，节电2-10%。",
            extra: "典型案例：大唐托克托电厂、神华上湾电厂实测运行电流下降1.9%-2.1%。"
        },
        shield: {
            title: "盾构机领域",
            desc: "2013年应用于大直径盾构机，提升主齿轮箱能量输出效率最高达18.6%，故障率降低一半。",
            extra: "案例：中铁隧道集团海瑞克φ9.33m土压平衡盾构机。"
        },
        auto: {
            title: "汽车领域",
            desc: "助力恢复发动机原动力，节油3%-6%，减排30%-50%。提供“无油”状态下的极限保护。",
            extra: "典型案例：青岛交运集团公交车试用、央视《科技之光》2010年奔驰无油行驶120公里电视直播测试。"
        }
    };

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">应用案例</h1>
                    <p className="mt-2 text-sm opacity-80">首页 &gt; 应用案例</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5">
                    <div className="flex flex-wrap gap-2 border-b-2 border-gray-light mb-10 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-3 font-semibold transition-all whitespace-nowrap ${activeTab === tab.id
                                        ? "text-primary-blue border-b-4 border-primary-blue"
                                        : "text-text-light hover:text-primary-blue"
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="reveal">
                        <div className="bg-white p-10 rounded-lg shadow-xl border border-gray-100 min-h-[300px]">
                            <h3 className="text-3xl font-bold text-primary-blue mb-6">
                                {(content as any)[activeTab].title}
                            </h3>
                            <p className="text-lg text-text-main leading-relaxed mb-6">
                                {(content as any)[activeTab].desc}
                            </p>

                            {(content as any)[activeTab].bullets && (
                                <ul className="list-disc pl-5 space-y-3 text-text-main">
                                    {(content as any)[activeTab].bullets.map((bullet: string, idx: number) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            )}

                            {(content as any)[activeTab].extra && (
                                <p className="mt-6 p-4 bg-gray-50 rounded border-l-4 border-accent-blue text-text-main italic">
                                    {(content as any)[activeTab].extra}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
