export default function Products() {
    const products = [
        {
            category: "主齿轮箱 (Main Gearbox)",
            items: [
                { model: "MA-NJ-GW500S", ratio: "2‰", cycle: "20000小时或3年" },
                { model: "MA-NJ-GW1000S", ratio: "2‰", cycle: "20000小时或3年" },
                { model: "MA-NJ-GW500R", ratio: "2‰", cycle: "20000小时或3年（之后转为S型）" },
                { model: "MA-NJ-GW1000R", ratio: "2‰", cycle: "20000小时或3年（之后转为S型）" },
            ]
        },
        {
            category: "偏航驱动减速器 (Yaw Drive Reducer)",
            items: [
                { model: "MA-NJ-GW30S", ratio: "2‰", cycle: "30000小时或3年" },
                { model: "MA-NJ-GW60S", ratio: "2‰", cycle: "30000小时或3年" },
                { model: "MA-NJ-GW30R", ratio: "2‰", cycle: "30000小时或3年（之后转为S型）" },
                { model: "MA-NJ-GW60R", ratio: "2‰", cycle: "30000小时或3年（之后转为S型）" },
            ]
        },
        {
            category: "变桨驱动减速器 (Pitch Drive Reducer)",
            items: [
                { model: "MA-NJ-GW30S", ratio: "2‰", cycle: "30000小时或3年" },
                { model: "MA-NJ-GW60S", ratio: "2‰", cycle: "30000小时或3年" },
            ]
        },
        {
            category: "轴承系列 (Bearings)",
            items: [
                { model: "MA-ZH-BW001-1 (主轴轴承)", ratio: "/", cycle: "按运维标准添加润滑脂" },
                { model: "MA-ZH-BW003-1 (发电机轴承)", ratio: "/", cycle: "按运维标准添加润滑脂" },
                { model: "MA-ZH-BW001-1 (偏航轴承)", ratio: "/", cycle: "按运维标准添加润滑脂" },
                { model: "MA-ZH-BW001-1 (变桨轴承)", ratio: "/", cycle: "按运维标准添加润滑脂" },
            ]
        },
        {
            category: "偏航开放齿轮 (Yaw Open Gear)",
            items: [
                { model: "MA-ZH-T001", ratio: "/", cycle: "按运维标准添加润滑脂" },
            ]
        }
    ];

    return (
        <div>
            {/* Banner */}
            <section className="bg-primary-blue py-10 text-white">
                <div className="container mx-auto px-5">
                    <h1 className="text-3xl font-bold">MAT产品目录</h1>
                    <p className="mt-2 text-sm opacity-80">首页 &gt; MAT产品</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-5">
                    <div className="reveal">
                        <h2 className="text-3xl font-bold mb-10 text-primary-blue text-center">摩安科技 MAT 系列产品</h2>

                        <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary-blue text-white">
                                        <th className="p-4 uppercase text-sm font-semibold">产品型号</th>
                                        <th className="p-4 uppercase text-sm font-semibold">添加比例</th>
                                        <th className="p-4 uppercase text-sm font-semibold">添加周期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((group, idx) => (
                                        <React.Fragment key={idx}>
                                            <tr className="bg-gray-light font-bold text-primary-blue">
                                                <td colSpan={3} className="p-4">{group.category}</td>
                                            </tr>
                                            {group.items.map((item, iIdx) => (
                                                <tr key={iIdx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                    <td className="p-4 text-text-main">{item.model}</td>
                                                    <td className="p-4 text-text-main">{item.ratio}</td>
                                                    <td className="p-4 text-text-main">{item.cycle}</td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
