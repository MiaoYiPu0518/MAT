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
            pdf: "/docs/applications/application-railway.pdf"
        },
        wind: {
            title: "风电领域",
            image: "/images/applications/application_windmills.png"
        },
        thermal: {
            title: "热电厂领域",
            image: "/images/applications/application_electricity.png"
        },
        shield: {
            title: "盾构机领域",
            image: "/images/applications/application_TBM.png"
        },
        auto: {
            title: "汽车领域",
            image: "/images/applications/application_cars.png",
            video: "/videos/application_cars.m4s"
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
                        <div className="bg-white p-10 rounded-lg shadow-xl border border-gray-100 min-h-[500px]">
                            <h3 className="text-3xl font-bold text-primary-blue mb-6">
                                {(content as any)[activeTab].title}
                            </h3>

                            {(content as any)[activeTab].desc && (
                                <p className="text-lg text-text-main leading-relaxed mb-6">
                                    {(content as any)[activeTab].desc}
                                </p>
                            )}

                            <div className="flex flex-col gap-10 items-center">
                                {(content as any)[activeTab].image && (
                                    <div className="w-full flex justify-center">
                                        <img
                                            src={(content as any)[activeTab].image}
                                            alt={(content as any)[activeTab].title}
                                            className="max-w-4xl w-full h-auto rounded-lg shadow-md border border-gray-100"
                                        />
                                    </div>
                                )}

                                {(content as any)[activeTab].video && (
                                    <div className="w-full flex justify-center">
                                        <div className="max-w-4xl w-full">
                                            <video
                                                controls
                                                className="w-full rounded-lg shadow-md border border-gray-100"
                                                poster={(content as any)[activeTab].image}
                                                preload="metadata"
                                            >
                                                <source src={(content as any)[activeTab].video} />
                                                您的浏览器不支持视频播放。
                                            </video>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {(content as any)[activeTab].pdf && (
                                <div className="w-full h-[1000px] border rounded overflow-hidden mt-6">
                                    <iframe
                                        src={(content as any)[activeTab].pdf}
                                        className="w-full h-full"
                                        title={(content as any)[activeTab].title}
                                    />
                                </div>
                            )}

                            {(content as any)[activeTab].bullets && (
                                <ul className="list-disc pl-5 space-y-3 text-text-main mt-6">
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
