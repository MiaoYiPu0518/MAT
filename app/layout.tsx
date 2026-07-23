import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MAT摩安科技 | 金属表面自生强化技术",
  description: "以微纳米摩擦学技术，为高价值工业装备提供不停机、可持续的磨损自愈与摩擦治理解决方案。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-shell footer-main">
            <div className="footer-brand"><Image src="/images/MAT_logo.png" alt="MAT摩安科技" width={160} height={46} /><p>重构摩擦，驱动工业未来。</p></div>
            <div className="footer-nav"><div><strong>探索</strong><Link href="/tech/tech-intro">核心技术</Link><Link href="/products">产品体系</Link><Link href="/cases">行业应用</Link></div><div><strong>关于</strong><Link href="/about/company-intro">公司介绍</Link><Link href="/about/credentials">资质荣誉</Link><Link href="/news">新闻中心</Link></div></div>
            <div className="footer-contact"><Link href="/contact" className="footer-contact-title"><strong>联系我们</strong></Link><p>北京市丰台区外环南路甲1号 A座 3-701</p><a href="tel:+8613604098408">+86 136 0409 8408</a><a href="mailto:caoqi0511@gmail.com">caoqi0511@gmail.com</a><Link href="/contact" className="footer-wechat"><Image src="/images/QR_code.jpg" alt="MAT微信公众号二维码" width={76} height={76} /><span>WECHAT / 微信公众号</span></Link></div>
          </div>
          <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} 北京摩安迈特技术有限公司</span><span>MAT TECHNOLOGY®</span></div>
        </footer>
      </body>
    </html>
  );
}
