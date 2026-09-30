import type { Metadata } from "next";
import Link from "next/link";

const destination = "/tech/tech-intro/#applications";

export const metadata: Metadata = {
  title: "应用案例已并入技术介绍",
  description: "MAT应用案例与技术机理现统一收录于技术介绍页面。",
  alternates: { canonical: "/tech/tech-intro/" },
  robots: { index: false, follow: true },
};

// Static-export-compatible handoff for bookmarks and existing external links.
export default function CasesRedirect() {
  return (
    <div>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <section className="bg-primary-blue py-10 text-white">
        <div className="container mx-auto px-5"><h1>应用案例已并入技术介绍</h1></div>
      </section>
      <section className="py-20"><div className="container mx-auto px-5"><Link href={destination} className="pdf-btn-primary">前往技术介绍与应用案例 →</Link></div></section>
    </div>
  );
}
