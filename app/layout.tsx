import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />

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
                {/* <div className="w-[100px] h-[100px] bg-white mb-2"></div> */}
                <img src="/images/QR_code.jpg" alt="QR Code" className="w-[100px] h-[100px] mb-2" />
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
