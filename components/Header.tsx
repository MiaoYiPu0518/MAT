"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "关于MAT", href: "/about/company-intro" },
  { label: "核心技术", href: "/tech/tech-intro" },
  { label: "产品体系", href: "/products" },
  { label: "行业应用", href: "/cases" },
  { label: "新闻中心", href: "/news" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const segment = href.split("/")[1];
    return pathname === href || (Boolean(segment) && pathname.startsWith(`/${segment}`));
  };

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="MAT摩安科技首页">
          <Image src="/images/MAT_logo.png" alt="MAT摩安科技" width={180} height={52} priority />
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isItemActive(item.href) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <Link
            href="/contact"
            className={`header-contact ${pathname.startsWith("/contact") ? "active" : ""}`}
          >
            联系我们 <b>↗</b>
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="移动端导航">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={isItemActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <span>0{i + 1}</span>{item.label}<b>↗</b>
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mobile-contact-link ${pathname.startsWith("/contact") ? "active" : ""}`}
            onClick={() => setOpen(false)}
          >
            <span>06</span>联系我们<b>↗</b>
          </Link>
        </nav>
      </div>
    </header>
  );
}
