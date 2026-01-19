import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/images/banner-1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-5 relative z-10 reveal">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-5 leading-tight">
            设备磨损自愈在线解决方案
          </h1>
          <h2 className="text-white text-3xl md:text-4xl font-semibold opacity-90 mb-5">
            MAT金属表面自生强化技术™
          </h2>
          <p className="text-white text-xl max-w-2xl mt-5 opacity-90">
            MATехнология® - 为由于运动产生的摩擦和磨损导致的问题提供针对性解决方案。
          </p>
          <div className="mt-10">
            <Link href="/tech/tech-intro" className="btn btn-primary text-lg">
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* CCTV Documentary Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center reveal">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-blue">
                科创中国 (Innovation China)
              </h2>
              <p className="text-lg mb-4 text-text-main">
                摩安科技作为新质生产力的典型代表企业入选央视《科创中国》栏目。纪录片《创启摩安 智造未来》在2025年3月10日在央视播出。
              </p>
              <p className="text-text-main opacity-80">
                《科创中国》是由中央广播电视总台所属的中央新影老故事频道和北京中科新影文化传媒有限公司联合出品的大型科创主题系列纪录片节目。
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-black aspect-video flex items-center justify-center text-white">
                <span className="text-lg">CCTV 纪录片播放区域</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-15 reveal">
            <h2 className="text-4xl font-bold text-primary-blue mb-3">
              金属表面自生强化技术
            </h2>
            <p className="text-xl text-text-light">
              基于天然富镁层状硅酸盐的摩擦学特性
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal">
            {[
              {
                title: "在线摩擦治理",
                desc: "是一项金属表面工程技术和润滑技术相融合的机械装备在线摩擦治理工艺技术。"
              },
              {
                title: "增材补偿",
                desc: "基于“闪温熔覆”理论模型，实现运动副表面磨损和增材补偿的动态平衡。"
              },
              {
                title: "自修复能力",
                desc: "通过MAT技术，可以在不停机的状态下对金属表面进行强化和修复。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-secondary-blue">
                  {item.title}
                </h3>
                <p className="text-text-main leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
