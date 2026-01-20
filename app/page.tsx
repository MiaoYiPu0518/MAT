"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "设备磨损自愈在线解决方案",
    subtitle: "MAT金属表面自生强化技术™",
    desc: "MATехнология® - 为由于运动产生的摩擦和磨损导致的问题提供针对性解决方案。",
    bg: "/assets/images/banner-1.png"
  },
  {
    title: "工业传动全寿命周期摩擦治理方案",
    subtitle: "微纳米设备减摩抗磨技术",
    desc: "涵盖表面抗磨、间隙优化、在线自愈及固液多元润滑的运动副综合优化方案。",
    bg: "/assets/images/banner-2.png"
  },
  {
    title: "焕生原动力·汽车健康宝™",
    subtitle: "发动机·变速箱·差速器系列再生强化剂",
    desc: "固液多元润滑与自愈技术：强化原厂动力，节能降碳，倍增运动件与润滑油使用寿命。",
    bg: "/assets/images/banner-3.png"
  },
  {
    title: "风电机组抗磨提效在线系统解决方案",
    subtitle: "主升速齿轮箱·主轴轴承·电机轴承·偏航舵桨传动系统",
    desc: "通过协同提高发电能力与延长风机寿命，实现全生命周期维护成本的显著降低。",
    bg: "/assets/images/banner-4.png"
  },
  {
    title: "轨道交通装备全寿命周期高效安全运行保障方案",
    subtitle: "柴油机·齿轮箱·轴承箱·轮轨",
    desc: "· 提效· 延寿· 节能· 减排",
    bg: "/assets/images/banner-5.png"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-70px)] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center ${index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
              }`}
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container mx-auto px-5 relative z-20">
              <div className={`transition-all duration-1000 delay-300 transform ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-5 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-white text-3xl md:text-4xl font-semibold opacity-90 mb-5">
                  {slide.subtitle}
                </h2>
                <p className="text-white text-xl max-w-2xl mt-5 opacity-90 leading-relaxed font-light">
                  {slide.desc}
                </p>
                <div className="mt-10">
                  <Link href="/tech/tech-intro" className="btn btn-primary text-lg px-10 py-4">
                    了解更多
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-white w-12" : "bg-white/40 w-6 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CCTV Documentary Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary-blue">
                科创中国 (Innovation China)
              </h2>
              <p className="text-lg mb-6 text-text-main leading-relaxed">
                摩安科技作为新质生产力的典型代表企业入选央视《科创中国》栏目。纪录片《创启摩安 智造未来》在2025年3月10日在央视播出。
              </p>
              <p className="text-text-main opacity-80 leading-relaxed">
                《科创中国》是由中央广播电视总台所属的中央新影老故事频道和北京中科新影文化传媒有限公司联合出品的大型科创主题系列纪录片节目。
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="bg-black aspect-video flex items-center justify-center text-white relative transition-transform duration-500 group-hover:scale-105">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster="/assets/images/video-poster.png"
                >
                  <source src="/assets/videos/Innovation_China.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              金属表面自生强化技术
            </h2>
            <p className="text-xl text-text-light font-light">
              基于天然富镁层状硅酸盐的摩擦学特性
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal">
            {[
              {
                title: "在线摩擦治理",
                desc: "金属表面工程技术和润滑技术相融合的机械装备在线摩擦治理工艺技术。",
                icon: "⚙️"
              },
              {
                title: "增材补偿",
                desc: "基于“闪温熔覆”理论模型，实现运动副表面磨损和增材补偿的动态平衡。",
                icon: "💎"
              },
              {
                title: "自修复能力",
                desc: "通过MAT技术，可以在不停机的状态下对金属表面进行强化和修复。",
                icon: "🛡️"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-secondary-blue">
                  {item.title}
                </h3>
                <p className="text-text-main leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center mb-16 reveal">
            <div className="inline-block mb-4">
              <h2 className="text-4xl font-bold text-primary-blue mb-1">MAT产品</h2>
              <div className="text-sm font-medium text-gray-400 tracking-[0.2em]">MAT PRODUCTS</div>
              <div className="h-0.5 w-full bg-accent-blue mt-4"></div>
            </div>
            <p className="max-w-5xl mx-auto text-gray-600 leading-8 mt-8 text-lg">
              针对不同的应用场景，MAT产品包括风电齿轮箱再生强化剂、铁路机车齿轮箱再生强化剂、工业机器人RV减速器专用脂、机车柴油机再生强化剂、焕升原动力汽车健康宝系列、轴承再生强化脂、机车轮缘减摩棒、轨侧专用减摩润滑脂、等液态、脂和固态三种形态系列产品。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            {[
              {
                title: "凝胶产品系列",
                image: "/assets/images/prod-gel.png",
                link: "/products"
              },
              {
                title: "脂润滑系列",
                image: "/assets/images/prod-grease.png",
                link: "/products"
              },
              {
                title: "固态产品系列",
                image: "/assets/images/prod-solid.png",
                link: "/products"
              }
            ].map((prod, idx) => (
              <Link
                key={idx}
                href={prod.link}
                className="flex flex-col group border-4 border-secondary-blue/10 overflow-hidden shadow-lg hover:shadow-2xl hover:border-accent-blue/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="bg-secondary-blue py-4 text-center group-hover:bg-accent-blue transition-colors duration-500">
                  <h3 className="text-white text-xl font-bold tracking-wider">
                    {prod.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="inline-block mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">MAT认证与鉴定证书</h2>
              <div className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">MAT CERTIFICATION AND APPRAISAL CERTIFICATE</div>
              <div className="h-0.5 w-1/2 mx-auto bg-accent-blue mt-4"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="bg-white p-2 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/assets/images/cert1.png" alt="MAT Certificate 1" className="h-48 md:h-64 w-auto object-contain" />
              </div>
              <div className="bg-white p-2 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/assets/images/cert2.png" alt="MAT Certificate 2" className="h-48 md:h-64 w-auto object-contain" />
              </div>
              <div className="bg-white p-2 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                <img src="/assets/images/cert3.png" alt="MAT Certificate 3" className="h-48 md:h-64 w-auto object-contain" />
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
              <p className="text-lg md:text-xl text-text-main leading-relaxed font-light">
                MAT金属表面自生强化技术产品通过了高科技成果鉴定，得到了原铁道部、中国设备管理协会、国家自然科学基金、国家发改委的认可和推广，包括中央电视台在内的诸多权威媒体都做了深度报道，在多个领域取得了大量的实车运用报告，为MAT工业化运用奠定了坚实的基础。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
