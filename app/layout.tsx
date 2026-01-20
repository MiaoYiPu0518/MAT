import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "北京摩安迈特技术有限公司 | 设备摩擦治理",
  description: "MATехнология® - 为由于运动产生的摩擦和磨损导致的问题提供针对性解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>
        <header className="fixed top-0 w-full bg-[#002D5B]/95 backdrop-blur-md z-[1000] text-white py-4">
          <div className="container mx-auto px-5 flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/images/MAT_logo.png"
                  alt="MAT Technology Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <nav>
              <ul className="flex gap-8">
                <li><Link href="/" className="text-[15px] font-medium hover:text-accent-blue">首页</Link></li>
                <li className="relative group cursor-pointer text-[15px] font-medium">
                  关于MAT
                  <div className="absolute top-full left-0 bg-primary-blue min-w-[200px] hidden group-hover:flex flex-col shadow-lg">
                    <Link href="/about/company-intro" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">公司介绍</Link>
                    <Link href="/about/history" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">公司历程</Link>
                    <Link href="/about/experts" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">专家介绍</Link>
                  </div>
                </li>
                <li className="relative group cursor-pointer text-[15px] font-medium">
                  MAT技术
                  <div className="absolute top-full left-0 bg-primary-blue min-w-[200px] hidden group-hover:flex flex-col shadow-lg">
                    <Link href="/tech/tech-intro" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">技术介绍</Link>
                    <Link href="/tech/patents" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">科技成果鉴定及专利</Link>
                    <Link href="/tech/standards" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">推广文件/产品标准</Link>
                    <Link href="/tech/reports" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">运用报告</Link>
                    <Link href="/tech/papers" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue">学术论文</Link>
                  </div>
                </li>
                <li><Link href="/products" className="text-[15px] font-medium hover:text-accent-blue">MAT产品</Link></li>
                <li><Link href="/cases" className="text-[15px] font-medium hover:text-accent-blue">应用案例</Link></li>
                <li><Link href="/news" className="text-[15px] font-medium hover:text-accent-blue">企业新闻</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="mt-[70px]">
          {children}
        </main>

        <footer className="bg-dark-bg text-white py-15">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-5">关于摩安</h3>
                <p className="text-gray-300">北京摩安迈特技术有限公司是领先的金属表面自修复技术提供商，致力于提升工业设备寿命与效率。</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-5">联系我们</h3>
                <div className="text-gray-300 space-y-2">
                  <p>地址：北京市丰台区外环南路甲1号A座 3-701</p>
                  <p>电话：86-13604098408</p>
                  <p>传真：86-010-86229793</p>
                  <p>邮箱：caoqi0511@gmail.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-5">关注我们</h3>
                <div className="w-[100px] h-[100px] bg-white mb-2"></div>
                <p className="text-gray-300">微信公众号</p>
              </div>
            </div>
            <div className="mt-10 pt-5 border-t border-white/10 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} 北京摩安迈特技术有限公司 版权所有</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
